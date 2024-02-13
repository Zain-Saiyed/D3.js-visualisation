// Adding chart 1 SVG  
var chart1_svg = svg.append("svg");

header1_x = 100;
header1_y = 690;
chart1_line_height = 40;

// Add Main Heading
display_text(chart1_svg,
    header1_x,header1_y,
    "Top Motivators for Implementing an",
    "20px",
    primary_text_color_accent);

// Add secondary heading below main heading
var new_y = header1_y+chart1_line_height;
display_text(chart1_svg,
    header1_x,new_y,
    "Emerging Technology",
    "34px",
    primary_text_color_accent);

var motivator_values = [29,3,9,15,18,24];
var motivator_labels = [["Anticipated Cost Savings"],["New Revenue Stream"],["Ability to Reach","New Customers"],["Increased Agility"],["Reputational Value"],["A Customer's Successful","Implementation"]];
var svgWidth = 600;
var svgHeight = 200;
var chartRadius = 80;
var chartGap = 30;
var centerX = svgWidth / 2;
var centerY = svgHeight / 2;

doughnutData = motivator_values;
doughnutLabels = motivator_labels;
doughnutColors = bar_color_palette;
    // Create a group for the doughnut charts
    var doughnutGroup = chart1_svg.append("g")
    .attr("transform", "translate(" + (centerX-50) + "," + (centerY+750) + ")");
    
// Function to create doughnut chart
function createDoughnutChart(data, labels, colors, xShift) {
    var pie = d3.pie().sort(null).value(function (d) { return d; });
    var arc = d3.arc().innerRadius(chartRadius - 20).outerRadius(chartRadius);
    
    var arcs = doughnutGroup.selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc")
      .attr("transform", "translate(" + xShift + ", 0)");
    
    arcs.append("path")
      .attr("d", arc)
      .attr("fill", function (d, i) { return colors[i]; });
    
    // // Display percentage in the middle of the chart
    // doughnutGroup.append("text")
    //   .text(data[0] + "%")
    //   .attr("class", "percentage-text")
    //   .attr("x", xShift)
    //   .attr("y", -5)
    //   .style("font-size", "16px")
    //   .style("text-anchor", "middle")
    //   .style("fill", "#333");
    
    // // Display labels below the chart
    // doughnutGroup.append("text")
    //   .text(labels[0])
    //   .attr("x", xShift)
    //   .attr("y", chartRadius + 20)
    //   .style("font-size", "14px")
    //   .style("text-anchor", "middle")
    //   .style("fill", "#666");
}
    
    // Create doughnut charts
    createDoughnutChart(doughnutData, doughnutLabels, doughnutColors, -chartGap);
    createDoughnutChart(doughnutData, doughnutLabels, doughnutColors, 0);
    createDoughnutChart(doughnutData, doughnutLabels, doughnutColors, chartGap);

