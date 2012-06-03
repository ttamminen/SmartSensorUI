$(function () {
  var
    humidityContainer = $('#humidity-graph'),
    temperatureContainer = $('#temperature-graph'),
    start = (new Date).getTime(),
    data, graph, offset, i;

  $('#led-slider').slider({
  
  }).bind('slidechange', function (event, ui) {
    $('#led-slider-value').text(ui.value + "%");
  });

  // Draw a sine curve at time t
  function animateHumidity (t) {

    data = [];
    offset = -1 * 9 * Math.PI * (t - start) / 10000;

    // Sample the sine function
    for (i = 0; i < 4 * Math.PI; i += 0.2) {
      data.push([i, Math.sin(i - offset)]);
    }

    // Draw Graph
    graph = Flotr.draw(humidityContainer[0], [ data ], {
      yaxis : {
        max : 2,
        min : -2
      }
    });

    // Animate
    setTimeout(function () {
      animateHumidity((new Date).getTime());
    }, 50);
  }
  
  // Draw a sine curve at time t
  function animateTemperature (t) {

    data = [];
    offset = -1 * 2 * Math.PI * (t - start) / 10000;

    // Sample the sine function
    for (i = 0; i < 4 * Math.PI; i += 0.2) {
      data.push([i, Math.sin(i - offset)]);
    }

    // Draw Graph
    graph = Flotr.draw(temperatureContainer[0], [ data ], {
      yaxis : {
        max : 2,
        min : -2
      }
    });

    // Animate
    setTimeout(function () {
      animateTemperature((new Date).getTime());
    }, 50);
  }  

  animateHumidity(start);
  animateTemperature(start);
});