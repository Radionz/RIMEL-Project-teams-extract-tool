$( document ).ready(function() {

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
  var map = new google.maps.Map(document.getElementById('map'), map_options);

  $('#submit_url_extract_teams').click(function(event) {

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
    memberNb = $members.length;
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




    var cloud = d3.layout.cloud;
    var fill = d3.scale.category20();

    var layout = cloud()
    .size([500, 500])
    .words(["TEST"].map(function(d) {
        return {text: d, size: 10 + Math.random() * 90, test: "haha"};
      }))
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 1) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw);

      layout.start();

      function draw(words) {
        d3.select("#words-cloud").append("svg")
        .attr("width", layout.size()[0])
        .attr("height", layout.size()[1])
        .append("g")
        .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return '#000'; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
      }



      //TODO: get code from url, NOT WORKING BECAUSE OF CORS ERRORS
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
