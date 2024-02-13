
// Function to display image along with text in the middle of the image
function display_image_single_text(svg, image_path, x, y, text, font_size, font_weight, text_color) {
  // Add image
  svg.append("image")
    .attr("xlink:href", "assets/"+image_path)
    .attr("width", 70)
    .attr("height", 70)
    .attr("x", x[0])
    .attr("y", y[0]);

  // Add text against the image
  svg.append("text")
    .text(text)
    .attr("x", x[1])
    .attr("y", y[1])
    .style("font-size", font_size)
    .style("font-weight", font_weight)
    .style("fill", text_color);

  return svg;
}

// Function to display image along with two texts in the middle of the image
function display_image_multi_text(svg, image_path, x, y, text, font_size, font_weight, text_color) {
  // Add image
  svg.append("image")
    .attr("xlink:href", "assets/"+image_path)
    .attr("width", 70)
    .attr("height", 70)
    .attr("x", x[0])
    .attr("y", y[0]);

  // Add first text against the image
  svg.append("text")
    .text(text[0])
    .attr("x", x[1])
    .attr("y", y[1])
    .style("font-size", font_size)
    .style("font-weight", font_weight)
    .style("fill", text_color);

  // Add second text against the image
  svg.append("text")
    .text(text[1])
    .attr("x", x[2])
    .attr("y", y[2])
    .style("font-size", font_size)
    .style("font-weight", font_weight)
    .style("fill", text_color);

  return svg;
}

// Display text
function display_text(svg, x, y, text, font_size, text_color,font_weight=null) {
  var display_text = svg.append("text")
    .text(text)
    .attr("x", x) 
    .attr("y", y) 
    .style("font-size", font_size) 
    .style("fill", text_color); 
  if (font_weight !== null) {
    display_text.style("font-weight",font_weight);
  }
}


function create_doughnut_chart_7(svg, value, label, chart_num, base_pie, base_arc, pie_colors, x, y, inner_text_font_size, inner_text_font_weight, inner_text_font_color, chart_label_font_size, chart_label_font_weight, chart_label_font_color, outer_chart_radius) {
  // Create a group for each of the doughnut charts - (chart 7)
  var chart_group = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")"); // As 0,0 of svg is set, moving/translating the doughnut chart to make it completely visible on svg canavs.

  // All Arc pieces data with padding for more visual clarity 
  var all_arc_pieces = [value-1, 1, (100-value)-1, 1]; // 1 is padding

  // Add in the arc pieces information                                                       ### NOT YET DISPLAYED ON SCREEN 
  var pie_chart_arcs = chart_group.selectAll(".arc-"+chart_num)  // Add id for easy identification & debugging. 
    .data(base_pie(all_arc_pieces))
    .enter()
    .append("g")
    .attr("class", "arc-"+chart_num);
  
  // Add in the path element for each of the arcs to visualise them.  
  pie_chart_arcs.append("path")
    .attr("d", base_arc)
    .attr("fill", function (val, idx) { return pie_colors[idx]; });

  // Set x, y position of chart
  chart_group.attr("transform", "translate(" + x + "," + y + ")");

  // Display percentage in the middle of the chart
  chart_group.append("text")
    .text(value + "%")
    .attr("y", 10)  // y padding, adjusting to center of chart
    .style("font-size", inner_text_font_size)
    .style("font-weight", inner_text_font_weight)
    .style("text-anchor", "middle")
    .style("fill", inner_text_font_color);

  // Display label below the chart
  chart_group.append("text")
  .text(label)
  .attr("y", outer_chart_radius+20+10)
  .style("font-size", chart_label_font_size)
  .style("font-weight", chart_label_font_weight)
  .style("text-anchor", "middle")
  .style("fill", chart_label_font_color);
}


function create_circle_chart_8(svg, value, label, chart_num, base_pie, base_arc, chart_outline_color_accent, x, y, inner_text_font_size, inner_text_font_weight, inner_text_font_color, chart_label_font_size, chart_label_font_weight, chart_label_font_color, outer_chart_radius) {
  // Create a group for each of the (single unit) doughnut charts - (chart 8)
  var chart_group = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")"); // As 0,0 of svg is set, moving/translating the doughnut chart to make it completely visible on svg canavs.

  // All Arc pieces data with padding for more visual clarity 
  var all_arc_pieces = [value]; // 1 is padding

  // Add in the arc pieces information                                                       ### NOT YET DISPLAYED ON SCREEN 
  var pie_chart_arcs = chart_group.selectAll(".arc-"+chart_num)  // Add id for easy identification & debugging. 
    .data(base_pie(all_arc_pieces))
    .enter()
    .append("g")
    .attr("class", "arc-"+chart_num);
  
  // Add in the path element for each of the arcs to visualise them.  
  pie_chart_arcs.append("path")
    .attr("d", base_arc)
    // .attr("fill", chart_outline_color_accent );
    .attr("fill", function (val, idx) { return pie_colors[Math.ceil(color_scale(val.data))]; }); // Map Colors from palette

  // Set x, y position of chart
  chart_group.attr("transform", "translate(" + x + "," + y + ")");

  // Display percentage in the middle of the chart
  chart_group.append("text")
    .text(value + "%")
    .attr("y", 15)  // y padding, adjusting to center of chart
    .style("font-size", inner_text_font_size)
    .style("font-weight", inner_text_font_weight)
    .style("text-anchor", "middle")
    .style("fill", inner_text_font_color);

  // Display label below the chart
  chart_group.append("text")
  .text(label)
  .attr("y", outer_chart_radius+20+10)
  .style("font-size", chart_label_font_size)
  .style("font-weight", chart_label_font_weight)
  .style("text-anchor", "middle")
  .style("fill", chart_label_font_color);
}