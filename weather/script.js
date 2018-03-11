$(document).ready(function() {
  $.getJSON('http://ip-api.com/json', function(data) {
    $.simpleWeather({
      location: data.zip,
      woeid: '',
      unit: 'f',
      success: function(weather) {
        html = '<h2><i class="icon-' + weather.code + '"></i> ' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
        html += '<ul class="text-center"><li>' + weather.city + ', ' + weather.region + '</li>';
        html += '<li class="currently">' + weather.currently + '</li>';

        if (weather.temp > 85) {
          $('body').css('background-image', 'url(' + 'http://i63.tinypic.com/dbo3nt.jpg' + ')');
        } else if (weather.temp < 45) {
          $('body').css('background-image', 'url(' + 'http://i65.tinypic.com/28juk5.jpg' + ')');
        }

        $('#weather').html(html);
      },

      error: function(error) {
        $('#weather').html('<p>' + data.zip + error + '</p>');
      },
    });
  })
});
