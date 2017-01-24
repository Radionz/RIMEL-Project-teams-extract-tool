// Global variables
var table,
members,
map_options,
map,
markers,
geocoder;

$(document).ready(function() {

  initTable();
  initMap();

  if (typeof teamLocations !== 'undefined' && typeof source !== 'undefined') {
    extractDataFromTeam(source, teamLocations);
  }

});

function initTable() {
  table = $('#dataTables-teams').DataTable({
    responsive: true
  });
  $(table.tables().containers()).hide();
  $("#table-loading").hide();
  $("#results").hide();
};

function initMap() {
  // INIT Map
  markers = [];
  map_options = {
    center: {
      lat: 43.6155793,
      lng: 7.0696861
    },
    zoom: 2
  };
  // map = new google.maps.Map($("#map"), map_options);
  geocoder = new google.maps.Geocoder();
};

function extractDataFromTeam(source, teamLocations) {
  $("#results").hide();

  $('#submit_url_extract_teams').click(function(event) {

    $("#results").show();

    table.clear();
    $(table.tables().containers()).hide();

    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }

    $("#table-loading > p > span").text('0%');
    $('.progress-bar').css('width', 0 + '%').attr('aria-valuenow', 0);
    $("#table-loading").show();

    var url = $('#input_url_extract_teams').val();
    if (url == "") {
      url = "http://spring.io/team.html";
    }

    map = new google.maps.Map(document.getElementById('map'), map_options);


    members = [];

    var $members = $(source).filter('section'),
    memberNb = $members.length,
    membersPositionsWords = [],
    membersLatLng = [];
    $members.filter('section').each(function(index, member) {
      var $member = $(member),
      member = {},
      rowNode = null;

      member.latitude = 'NA';
      member.longitude = 'NA';
      member.latLng = null;
      member.markerId = 0;
      member.marker = null;
      member.memberId = $member.attr('data-member-id');
      member.github = $member.find('.team-member--social--icon.github-small').attr('href');
      member.name = $member.find('.team-member--name').text();
      member.position = $member.find('.team-member--position').text();
      member.location = $member.find('.team-member--location').text();

      // Find member's latitude & longitude
      $.each(teamLocations, function(i, teamLocation) {
        if (teamLocation.memberId == member.memberId) {

          member.latitude = teamLocation.latitude;
          member.longitude = teamLocation.longitude;
          member.latLng = new google.maps.LatLng(member.latitude, member.longitude)
          membersLatLng.push(member.latLng);

          member.marker = new google.maps.Marker({
            position: member.latLng,
            title: teamLocation.name,
            map: map,
            animation: google.maps.Animation.DROP
          });
          member.markerId = markers.push(member.marker);

          return;
        }
      });

      rowNode = table.row.add([
        member.name,
        member.position,
        member.location,
        member.latitude + ' / ' + member.longitude + '<button type="button" class="btn btn-default btn-xs pull-right" id="marker_' + member.markerId + '">Show on map</button>',
        '<a href="' + member.github + '">Github of ' + member.github.replace('https://github.com/', '') + '</a>'
      ]).draw().node();

      $('button[id="marker_' + member.markerId + '"]').on('click', function() {
        map.panTo(member.marker.getPosition());
      });

      if (member.latitude == 'NA' || member.longitude == 'NA') {
        $(rowNode).addClass('warning');
      }

      member.memberPositionWords = member.position.split(' ');
      Array.prototype.push.apply(membersPositionsWords, member.memberPositionWords);

      members.push(member);

      // Update progress bar
      var progress = Math.floor(((index + 1) / memberNb) * 100);
      $("#table-loading > p > span").text(progress + '%');
      $('#table-loading > .progress > .progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);

      if (progress >= 100) {
        $("#table-loading").hide();
        $("#map").show();
        $(table.tables().containers()).show();
      }
    });

    $.each(membersPositionsWords, function(i, val) {
      membersPositionsWords[i] = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    })

    $("#text").text(membersPositionsWords.join(" "));
    parseText($("#text").text());

    var membersPositionsWordsOccurencies = {};
    $.each(membersPositionsWords, function(i, val) {
      membersPositionsWordsOccurencies[val] = (membersPositionsWordsOccurencies[val] || 0) + 1;
    })

    var wordsOccurencies = [],
    wordsOccurenciesMorris = []
    counter = 0,
    counterMorris = 0;
    $.each(membersPositionsWordsOccurencies, function(word, count) {
      wordsOccurencies[counter] = {}
      wordsOccurencies[counter].count = count;
      wordsOccurencies[counter].word = word;
      counter++;

      if (count > 3 && word != "" && word != "Spring") {
        wordsOccurenciesMorris[counterMorris] = {}
        wordsOccurenciesMorris[counterMorris].value = count;
        wordsOccurenciesMorris[counterMorris].label = word;
        counterMorris++;
      }
    })

    Morris.Donut({
      element: 'donut-jobs',
      data: wordsOccurenciesMorris
    });

    var countries = {};

    function getCountryFromLatLng(counterCountryFromLatLng) {
      setTimeout(function() {
        if (counterCountryFromLatLng < membersLatLng.length) {
          geocoder.geocode({ 'latLng': membersLatLng[counterCountryFromLatLng] },
           function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                var indice = 0;
                for (var j = 0; j < results.length; j++) {
                  if (results[j].types[0] == 'locality') {
                    indice = j;
                    break;
                  }
                }
                for (var i = 0; i < results[j].address_components.length; i++) {
                  if (results[j].address_components[i].types[0] == "locality") {
                    //this is the object you are looking for
                    city = results[j].address_components[i];
                  }
                  if (results[j].address_components[i].types[0] == "administrative_area_level_1") {
                    //this is the object you are looking for
                    region = results[j].address_components[i];
                  }
                  if (results[j].address_components[i].types[0] == "country") {
                    //this is the object you are looking for
                    country = results[j].address_components[i];
                  }
                }

                //city data
                // console.log(city.long_name + " || " + region.long_name + " || " + country.short_name);
                countries[country.long_name] = (countries[country.long_name] || 0) + 1;
              } else {
                // console.log("No results found");
              }
              //}
            } else {
              // console.log("Geocoder failed due to: " + status);
            }
          });

          // console.log(countries);

          counterCountryFromLatLng = counterCountryFromLatLng + 1;

          progress = Math.floor(((counterCountryFromLatLng) / membersLatLng.length) * 100);
          $("#countries-loading > p > span").text(progress + '% (' + counterCountryFromLatLng + "/" + membersLatLng.length + ")");
          $('#countries-loading > .progress > .progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);

          getCountryFromLatLng(counterCountryFromLatLng);
        } else {

          var countriesMorris = []
          counterMorris = 0;
          $.each(countries, function(countryName, count) {
            countriesMorris[counterMorris] = {}
            countriesMorris[counterMorris].value = count;
            countriesMorris[counterMorris].label = countryName;
            counterMorris++;
          })

          $("#countries-loading").hide();
          $("#donut-countries").show();

          Morris.Donut({
            element: 'donut-countries',
            data: countriesMorris
          });

        }
      }, 2000);
    }

    $("#countries-loading > p > span").text('0%');
    $('.progress-bar').css('width', 0 + '%').attr('aria-valuenow', 0);

    getCountryFromLatLng(0);
    $("#donut-countries").hide();

    /*
    * WORDS CLOUD CODE, WORKING :)
    */

    // var cloud = d3.layout.cloud;
    // var fill = d3.scale.category20();
    //
    // var layout = cloud()
    // .size([400, 500])
    // .words(wordsOccurencies.map(function(d) {
    //   return {text: d.word, size: 10 + d.count};
    // }))
    // .padding(5)
    // .rotate(function() { return ~~(Math.random() * 1) * 90; })
    // .font("Impact")
    // .fontSize(function(d) { return d.size; })
    // .on("end", draw);
    //
    // layout.start();
    //
    // function draw(words) {
    //   d3.select("#words-cloud").append("svg")
    //   .style("display", "block")
    //   .style("margin-left", "auto")
    //   .style("margin-right", "auto")
    //   .attr("width", layout.size()[0])
    //   .attr("height", layout.size()[1])
    //   .append("g")
    //   .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    //   .selectAll("text")
    //   .data(words)
    //   .enter().append("text")
    //   .style("font-size", function(d) { return d.size + "px"; })
    //   .style("font-family", "Impact")
    //   .style("fill", function(d, i) { return '#000'; })
    //   .attr("text-anchor", "middle")
    //   .attr("transform", function(d) {
    //     return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    //   })
    //   .text(function(d) { return d.text; });
    // }
  });
}
