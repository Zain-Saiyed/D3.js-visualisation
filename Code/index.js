
var width = 1200;
var height = 2360;

var svg = d3.select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("viewBox", "0 0 " + width + " " + height); // !REF: https://chartio.com/resources/tutorials/how-to-resize-an-svg-when-the-window-is-resized-in-d3-js/

svg.append("image")
  .attr("xlink:href", "assets/background.jpg")
  .attr("x",0)
  .attr("y",0);