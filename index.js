$(document).ready(function () {
  draw();
})

var draw = function () {
  c3.generate({
    data: {
      x: 'x',
      columns: [
        ['x',].concat(data.map(function (datum) {return datum.time})),
        ['体重',].concat(data.map(function (datum) {return datum.weight})),
        // ['BMI', ].concat(data.map(function(datum){ return datum.weight / (1.68 ** 2)})),
      ],
      // axes: {
      //   '体重': 'y',
      //   'BMI': 'y2',
      // },
    },
    grid: {
      y: {
        lines: [
          {value: 62.1, text: 'BMI:22'},
          {value: 70.6, text: 'BMI:25'},
        ]
      },
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        },
      },
      y: {
        min: 61
      }
      // y2: {
      //   show: true
      // }
    }
  });
}
