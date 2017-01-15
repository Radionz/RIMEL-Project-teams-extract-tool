$( document ).ready(function() {

  $("#results").hide();

  // INIT Tables
  var table = $('#dataTables-teams').DataTable({ responsive: true});
  $(table.tables().containers()).hide();
  $("#table-loading").hide();
  // $('#input_url_extract_teams').focus();

  // INIT Map
  var markers = [];
  var map_options = {
    center: {lat: 43.6155793, lng: 7.0696861},
    zoom: 2
  };
  var map;
  // var map = new google.maps.Map(document.getElementById('map'), map_options);

  $('#submit_url_extract_teams').click(function(event) {

    $("#results").show();

    table.clear();
    $(table.tables().containers()).hide();

    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    $("#map").hide();

    $("#table-loading > p > span").text('0%');
    $('.progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
    $("#table-loading").show();

    var url = $('#input_url_extract_teams').val();
    if (url == "") {
      url = "http://spring.io/team.html";
    }

    if(map == undefined) {
      map = new google.maps.Map(document.getElementById('map'), map_options);
    }

    var $members = $(source).filter('section'),
    memberNb = $members.length,
    membersPositionsWords = [],
    membersLatLng = [];
    var geocoder = new google.maps.Geocoder();
    $members.filter('section').each(function(index, member) {
      var $member = $(member),
      latitude = 'NA',
      longitude = 'NA',
      markerId = 0,
      marker = null,
      github = "",
      rowNode = null,
      progress = Math.floor(((index + 1) / memberNb) * 100);

      $("#table-loading > p > span").text(progress+'%');
      $('#table-loading > .progress > .progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);

      $.each(teamLocations, function(i, teamLocation) {
        if (teamLocation.memberId == $member.attr('data-member-id')) {
          latitude = teamLocation.latitude;
          longitude = teamLocation.longitude;

          marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude,longitude),
            title: teamLocation.name,
            map: map,
            animation: google.maps.Animation.DROP
          });
          markerId = markers.push(marker);
          return;
        }
      });

      if (marker != null) {
        membersLatLng.push(marker.getPosition());
      }

      var memberPositionWords = $member.find('.team-member--position').text().split(' ');
      Array.prototype.push.apply(membersPositionsWords,memberPositionWords);

      github = $member.find('.team-member--social--icon.github-small').attr('href');
      rowNode = table.row.add( [
        $member.find('.team-member--name').text(),
        $member.find('.team-member--position').text(),
        $member.find('.team-member--location').text(),
        latitude + ' / ' + longitude + '<button type="button" class="btn btn-default btn-xs pull-right" id="marker_'+markerId+'">Show on map</button>',
        '<a href="' + github + '">Github of ' + github.replace('https://github.com/','') + '</a>'
      ]).draw().node();

      $('button[id="marker_'+markerId+'"]').on('click', function() {
        map.panTo(marker.getPosition());
      });

      if (latitude == 'NA') {
        $(rowNode).addClass('warning');
      }
      if (progress >= 100) {
        $("#table-loading").hide();
        $("#map").show();
        $(table.tables().containers()).show();
      }
    });

    $.each(membersPositionsWords, function (i, val) {
      membersPositionsWords[i] = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
    })

    $("#text").text(membersPositionsWords.join(" "));
    parseText($("#text").text());

    var membersPositionsWordsOccurencies = {};
    $.each(membersPositionsWords, function (i, val) {
      membersPositionsWordsOccurencies[val] = (membersPositionsWordsOccurencies[val] || 0) + 1;
    })

    var wordsOccurencies = [],
    wordsOccurenciesMorris = []
    counter = 0,
    counterMorris = 0;
    $.each(membersPositionsWordsOccurencies, function (word, count) {
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
      setTimeout(function () {
        if (counterCountryFromLatLng < membersLatLng.length) {
          geocoder.geocode({'latLng': membersLatLng[counterCountryFromLatLng]}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                var indice=0;
                for (var j=0; j<results.length; j++)
                {
                  if (results[j].types[0]=='locality')
                  {
                    indice=j;
                    break;
                  }
                }
                for (var i=0; i<results[j].address_components.length; i++)
                {
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
                console.log(city.long_name + " || " + region.long_name + " || " + country.short_name);
                countries[country.long_name] = (countries[country.long_name] || 0) + 1;
              } else {
                // console.log("No results found");
              }
              //}
            } else {
              // console.log("Geocoder failed due to: " + status);
            }
          });

          console.log(countries);

          counterCountryFromLatLng = counterCountryFromLatLng + 1;

          progress = Math.floor(((counterCountryFromLatLng) / membersLatLng.length) * 100);
          $("#countries-loading > p > span").text(progress+'% ('+counterCountryFromLatLng+"/"+membersLatLng.length+")");
          $('#countries-loading > .progress > .progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);

          getCountryFromLatLng(counterCountryFromLatLng);
        }else{

          var countriesMorris = []
          counterMorris = 0;
          $.each(countries, function (countryName, count) {
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
    $('.progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);

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

    /*
    *TODO: get code from url, NOT WORKING BECAUSE OF CORS ERRORS :(
    */

    // $('#iframe_extract_teams').on('load', function(){
    //   console.log(document.getElementById('iframe_extract_teams').contentWindow.document.body.innerHTML);
    // });
    // $("#iframe_extract_teams").attr('src',url);
    //
    // $.ajax({
    //   url: url,
    //   cache: false,
    //   dataType: 'html',
    //   beforeSend: function( xhr ) {
    //     xhr.overrideMimeType( "xml/text" );
    //   }
    // })
    // .done(function( data ) {
    //   console.log( data );
    // })
    // .fail(function() {
    //   console.log( "error" );
    // })
    // .always(function() {
    //   console.log( "complete" );
    // });;

  });
});
