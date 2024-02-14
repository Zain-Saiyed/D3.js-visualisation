file_name = "chart-5.json";
chart_data_promise = load_json_file(file_name);
  
chart_data_promise.then(result => {
  // Adding chart 5 SVG  
  var chart5_svg = svg.append("svg");

  header1_x = 120;
  header1_y = 1460;
  chart5_line_height = 40;

  // Add Main Heading
  display_text(chart5_svg,
      header1_x,header1_y,
      "Technologies With Most Potential to",
      "20px",primary_text_color_accent);

  // Add secondary heading below main heading
  var new_y = header1_y+chart5_line_height;
  display_text(chart5_svg,
      header1_x,new_y,
      "Deliver Transformational Value ",
      "34px",primary_text_color_accent);


  // Adding line spearater between the completion charts
  chart5_svg.append("rect")
      .attr("x",110)
      .attr("y",1822)
      .attr("width", 977)
      .attr("height", 2)
      .attr("fill", chart_outline_color_accent);

  // Adding line spearater between the completion charts
  chart5_svg.append("rect")
      .attr("x",690)
      .attr("y",1500)
      .attr("width", 2)
      .attr("height", 250)
      .attr("fill", chart_outline_color_accent);

  // Bar chart:
  // Data for bar plot
  // var potential_technology_data = [
  //     { domain: "Big Data Analytics", value: 38 },
  //     { domain: "Public Cloud", value: 18 },
  //     { domain: "Blockchain", value: 7 },
  //     { domain: "3D Printing", value: 1 },
  //     { domain: "IoT", value: 14 },
  //     { domain: "AR/VR", value: 2 },
  //     { domain: "AI/Machine Learning/Cognitive", value: 20 },
  //   ];
  var potential_technology_data = result[0].chart_data;


  // potential_technology_data.sort((a, b) => b.value - a.value);
  // Sorting data in descending order
  var potential_technology_data = potential_technology_data.sort((a, b) => b.value - a.value);

  // Create SVG container
  var chart5_svg = chart5_svg.append("svg")
    .attr("x", 120)
    .attr("y", 1422);

  // Create group to include the bars
  var bar_group = chart5_svg.append("g");

  // Get maximum and minimum values in our data
  var max_value = d3.max(potential_technology_data, d => d.value);
  var min_value = d3.min(potential_technology_data, d => d.value);
  var scale_factor = 5;
  var bar_spacing = 80;
  var max_bar_width = 55;
  var legend_box_width = legend_box_height= 15;

  // !Ref Link: https://d3js.org/d3-scale/linear
  var color_scale = d3.scaleLinear()
    .domain([min_value, max_value]) // value range
    .range([0, bar_color_palette.length - 1]); // color palette indexes range

  // Create bar chart with defined padding
  bar_group.selectAll("rect")
    .data(potential_technology_data)
    .enter()
    .append("rect")
    .attr("width", max_bar_width) // bar width
    .attr("height", function (data) { return scale_factor * data.value; }) // scale up value
    .attr("x", function (data, idx) { return 2+idx * bar_spacing; }) // spacing between bars
    .attr("y", function (data) { return 400 - (scale_factor * data.value); }) // align bars from the bottom
    .attr("fill", function (data) { return bar_color_palette[Math.round(color_scale(data.value))]; });

  // Adding value label on top of each bar
  bar_group.selectAll(".value-label")
    .data(potential_technology_data)
    .enter()
    .append("text")
    .attr("class", "value-label")
    .text(function (data) { return data.value+"%"; })
    .attr("x", function (data, idx) { return 2+(idx * bar_spacing) + (max_bar_width/2); }) // calculate bar's x distance and to adjust to center of bar pad with half the bar's width.
    .attr("y", function (data) { return (400 - (scale_factor * data.value)) - (max_bar_width*.15); }) // calculate bar's y distance, then add vertical padding of 15% of bar's max width.
    .style("font-size", "20px")
    .style("font-weight", "bold")
    .style("text-anchor", "middle")
    .style("fill", primary_text_color_accent);

  var legend_x = 310;
  var legend_y = 105;

  // Adding legends below the chart
  bar_group.selectAll(".legend-box")
    .data(potential_technology_data)
    .enter()
    .append("rect")
    .attr("class", "legend-box")
    .attr("width", legend_box_width)
    .attr("height", legend_box_height)
    .attr("x", legend_x)
    .attr("y", function (data, idx) { return legend_y+(idx * 25); })
    .attr("fill", function (data) { return bar_color_palette[Math.round(color_scale(data.value))]; });

  // Adding legend labels
  bar_group.selectAll(".legend-label")
    .data(potential_technology_data)
    .enter()
    .append("text")
    .attr("class", "legend-label")
    .text(function (data) { return data.domain; })
    .attr("x", legend_x+(legend_box_height*1.5))
    .attr("y", function (data, idx) { return legend_y+(idx * 25)+(legend_box_height*0.8); })
    .style("font-size", "14px")
    .style("fill", primary_text_color_accent);

  // Adding interactivity to bars

  bar_group.selectAll("rect")
    
    .on("mouseover", function (data) {
      
      // bars: add border when mouse hovered on that bar
      bar_group.selectAll("rect")
        .filter(function (val) {
          // console.log(data.toElement.__data__.value+"%");
          return val.value === data.toElement.__data__.value;
        })
        .attr("stroke","#1c1c1c") // Almost gray-black  (not pure)
        .attr("stroke-width", 2);
      
        // select all the value-labels id texts & increase font size, underline text, make the text bold, and change color to the palette's darkest color.
        bar_group.selectAll(".value-label")
          // Match those bar whose value is equal to the bar on which its hovered.
          .filter(function (val) {
            // console.log(data.toElement.__data__.value+"%");
              return val.value === data.toElement.__data__.value;
          })
          .style("font-size", "23px")
          .attr("text-decoration", "underline")
          .style("font-weight", "bold")
          .style("fill", bar_color_palette[bar_color_palette.length-1]);
        
        // select all legend-labels matching the label on which that specific bar  was highlighted.
        // increase font size, underline text, bold the text & set color as he darkest color in the palette. 
        bar_group.selectAll(".legend-label")
          .filter(function (val) {
            // console.log(data.toElement.__data__.value+"%");
              return val.value === data.toElement.__data__.value;
          })
          .style("font-size", "16px")
          .attr("text-decoration", "underline")
          .style("font-weight", "bold")
          .style("fill", bar_color_palette[bar_color_palette.length-1]);

      })
    
    // Upon moving out from the bar
    .on("mouseout", function (data) {
      // select all rectangles and unset the stroke and its width attribute
      bar_group.selectAll("rect")
        .attr("stroke","none")
        .attr("stroke-width", 0);

      // Restore font attributes to original for all labels. Remove underline, bold, dark color palatte color.
      bar_group.selectAll(".value-label")
        .style("font-size", "20px")
        .attr("text-decoration", "")
          .style("font-weight", "normal")
          .style("fill",primary_text_color_accent);
      
      // Restore font attributes for all the legend labels.
      bar_group.selectAll(".legend-label")
        .style("font-size", "14px")
        .attr("text-decoration", "")
        .style("font-weight", "normal")
        .style("fill",primary_text_color_accent);
    });
});