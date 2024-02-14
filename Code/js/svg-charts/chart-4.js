// Adding chart 4 SVG  

file_name = "chart-4.json";
chart_data_promise = load_json_file(file_name);

chart_data_promise.then(result => {
  
  var chart4_svg = svg.append("svg");
  var values = result[0].values;
  var names = result[0].labels;
  var idx = 0;


  header1_x = 600;
  header1_y = 1120;
  chart4_line_height = 30;

  // Add Primary main Heading
  display_text(chart4_svg,
      header1_x,header1_y,
      "Who is Responsible",
      "34px",
      primary_text_color_accent);

  // Add secondary heading below main heading
  var new_y = header1_y+chart4_line_height;
  display_text(chart4_svg,
      header1_x,new_y,
      "for Evaluating Emerging Technology?",
      "20px",
      primary_text_color_accent);


  // var values = [7, 7, 12, 33, 39];
  // var names = ["Innovation Group", "Business Unit", "Executive Management", "Multiple Groups' Decision", "IT Group"];

  // Define bar width (a.k.a bar height (since horizontal))
  var max_bar_width  = 400;

  // Creating a SVG container
  var chart4_svg = chart4_svg.append("svg")
    .attr("width", 420)
    .attr("height", 220)
    .attr("x",600)
    .attr("y",new_y+20);

  // Creating group to include the bars
  var barGroup = chart4_svg.append("g");

  // Get maximum and minimum values in our data
  var max_value = d3.max(values);
  var min_value = d3.min(values);

  // !Ref Link: https://d3js.org/d3-scale/linear
  var color_scale = d3.scaleLinear()
    .domain([min_value, max_value]) // value range
    .range([0, bar_color_palette.length - 1]); // color palette indexes range

  // Create bar chart with defined padding
  barGroup.selectAll("rect")
    .data(values)
    .enter()
    .append("rect")
    .attr("width", function (val) { return 1.5*(max_bar_width*(val/100)); }) // [1] 40% (1.4) scale up value. ; [2] Shorter Scaled up values: ~(val*5.5)
    .attr("height", 35) // bar_width = 35 
    .attr("y", function (val, idx) { return idx * 43; }) // 43: spacing between bars including padding. 
    .attr("fill", function (val, idx) { return bar_color_palette[Math.round(color_scale(val))]; }); // Map Colors from palette
  // Target Image [hex]: "#fcb344"

  // Adding value percentage label inside each bar's base
  // NOTE: selectAll("text") => this wont work because when adding the bar text labels, it will interfere, taht is hwy use ".id" label. 
  barGroup.selectAll(".value-percentage-label")
    .data(values)
    .enter()
    .append("text")
    .attr("class", "value-percentage-label")
    .text(function (val) { return val+"%"; })
    .attr("x", function (val) { return 7; }) // Add left padding to number text
    .attr("y", function (val, idx) { return idx * 43 + 25; }) // Add vertical padding to display text in middle of the bar.
    .style("font-size", "23px")
    .style("font-weight", "bold")
    .style("fill", "white");

  // Adding text label for each bar
  barGroup.selectAll(".bar-text-label")
    .data(names)
    .enter()
    .append("text")
    .attr("class", "bar-text-label")
    .text(function (val) { return val; })
    .attr("x", function (val,idx) { return (1.5*(max_bar_width*(values[idx]/100)) + (10) ); }) // Get bar's max (width) location, and add padding of 10 units
    .attr("y", function (val, idx) { return idx * 43 + 24; }) // Add vertical padding to display text in middle of the bar.
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .style("fill", secondary_text_color_accent);
});