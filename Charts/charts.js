// Init()
// load google charts 
google.charts.load('current', {
  'packages': ['corechart']
});

// done init()
// google.charts.setOnLoadCallback(drawChart);
var nR= 1;
var nC= 1;

function changeSelection() {
  var selObj = document.getElementById("charts");
  var selValue = selObj.options[selObj.selectedIndex].value;
  var selIndex = parseInt(selObj.selectedIndex);

  //Setting Value
  document.getElementById("charts").value = selValue;
  console.log(typeof(selIndex));
  console.log(selIndex);
  return selIndex;

}

function drawChart(selectChart, ...args) {
  try {
    var data = google.visualization.arrayToDataTable(...args);
    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: {
        position: 'bottom'
      }
    };

    doc = document.getElementById('curve_chart');

    var list_of_charts = [google.visualization.PieChart,
      google.visualization.Histogram,
      google.visualization.GeoChart,
      google.visualization.BarChart,
      google.visualization.LineChart,
      google.visualization.AreaChart,
    ];

    var chart = new list_of_charts[selectChart](doc);

    if (doc && doc.style) {
      doc.style.maxHeight = '90%';
      doc.style.minWidth = '100%';
    }
    chart.draw(data, options);
  } catch (e) {
    var alert = document.getElementById('alert');
    var alert_btn = document.getElementsByClassName('close');
    var para = document.getElementById('alert_message');
    alert.style.display = 'block';
    console.log(e);
    return para.appendChild(document.createTextNode(String(e)));
  }
}

function dataEntry() {
  var input = document.getElementsByName('array[]');
  var lists = [
    [String(input[0].value), String(input[1].value), String(input[2].value)]
  ];
  for (var i = 3; i < input.length; i = i + 3) {
    lists.push([input[i].value, input[i + 1].value * 1, input[i + 2].value * 1]);
  }

  document.getElementById("par").innerHTML = lists;
  document.getElementById("po").innerHTML = "Output";
  return lists;
}

// Testing func
function store() {
  var lists = [
    ["Year", "Sales", "Expanses"],
    ["2020", 1000, 400],
    ["2004", 1174, 460]
  ];
  return lists;

}

function addRow() {
  var miDivRow = document.createElement("div");
  miDivRow.setAttribute('class', 'row');
  var miDivSm4 = document.createElement("div");
  miDivSm4.setAttribute('class', 'col-sm-4');
  var miDivSm8 = document.createElement("div");
  miDivSm8.setAttribute('class', 'col-sm-8');
  var miTitle = document.createElement("input");
  miTitle.setAttribute('type', 'text');
  miTitle.setAttribute('name', 'array[]');
  miTitle.setAttribute('class', 'form-control');
  miTitle.setAttribute('placeholder', 'row name');
  var miDataOne = document.createElement("input");
  miDataOne.setAttribute('type', 'number');
  miDataOne.setAttribute('name', 'array[]');
  miDataOne.setAttribute('class', 'form-control');
  miDataOne.setAttribute('placeholder', 'data');
  for (var i = 0; i <= nC; i++) { // from 1 to 10
    this["miData"+i] = document.createElement('input');
    this["miData"+i].setAttribute('type', 'number');
    this["miData"+i].setAttribute('name', 'array[]');
    this["miData"+i].setAttribute('class', 'form-control');
    this["miData"+i].setAttribute('placeholder', 'data');
    miDivSm8.appendChild(this['miData'+i]);
    miDivSm8.appendChild(document.createElement('br'));
    console.log(nC);
}
  var form = document.getElementById('chart_form');
  form.appendChild(miDivRow);
  miDivRow.appendChild(miDivSm4);
  miDivSm4.appendChild(miTitle);
  miDivSm4.appendChild(document.createElement('br'));
  miDivRow.appendChild(miDivSm8);
  miDivSm8.appendChild(miDataOne);
  miDivSm8.appendChild(document.createElement('br'));

  // return nR++;
}
 function addColumn(){
  // nR = addRow();

 }