$( document ).ready(function() {
 draw();
})

var draw = function(){
  c3.generate({
    data: {
      x: 'x',
      columns: [
        ['x', ].concat(data.map(function(datum){ return datum.time})),
        ['体重', ].concat(data.map(function(datum){ return datum.weight})),
        // ['BMI', ].concat(data.map(function(datum){ return datum.weight / (1.68 ** 2)})),
      ],
      // axes: {
      //   '体重': 'y',
      //   'BMI': 'y2',
      // },
    },
    axis: {
      x: {
          type: 'timeseries',
          tick: {
              format: '%Y-%m-%d'
          }
      },
      // y2: {
      //   show: true
      // }
    }
  });
}
