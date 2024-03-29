file_name = "chart-8.json";
chart_data_promise = load_json_file(file_name);
  
chart_data_promise.then(result => {

    // Adding chart 8 SVG  
    var chart8_svg = svg.append("svg");

    header1_x = 630;
    header1_y = 1890;
    chart8_line_height = 40;

    // Add Main Heading
    display_text(chart8_svg,
        header1_x,header1_y,
        "Are Your Organization’s Leaders",
        "20px",
        primary_text_color_accent);

    // Add secondary heading below main heading
    var new_y = header1_y+chart8_line_height;
    display_text(chart8_svg,
        header1_x,new_y,
        "Receptive to Emerging Tech?",
        "34px",
        primary_text_color_accent);

    // Doughnut chart creation: 

    // Chart Data
    // var rating_data = [23, 50, 17, 7];
    // var rating_labels = ["Very", "Moderately", "Not Very", "Not all All"];
    var rating_data = result[0].data;
    var rating_labels = result[0].labels;

    // !Ref Link: https://d3js.org/d3-scale/linear
    var color_scale = d3.scaleLinear()
    .domain([d3.min(rating_data), d3.max(rating_data)]) // value range
    .range([0, bar_color_palette.length - 1]); // color palette indexes range


    // Chart radii
    var outer_chart_radius = 55;
    var inner_chart_radius = outer_chart_radius-6;

    // Add chart SVG container
    var chart8_svg = chart8_svg.append("svg");
    value = rating_data[0];
    label = rating_labels[0];

    // Instantiating Pie Generator - specifying the value function for data value extraction
    var base_pie_gen = d3.pie().sort(null).value(function (val) { return val; });

    // Instantiating Arc Generator - Setting the inner and outer radii
    var base_arc_gen = d3.arc().innerRadius(inner_chart_radius).outerRadius(outer_chart_radius);

    inner_text_font_size = "38px"
    inner_text_font_weight = chart_label_font_weight = "normal"
    inner_text_font_color = chart_label_font_color = primary_text_color_accent

    chart_label_font_size = "20px"

    // Create the first doughnut chart
    chart_num = 0;
    value = rating_data[chart_num];
    label = rating_labels[chart_num];
    x = 675
    y = 2020

    create_circle_chart_8(chart8_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, bar_color_palette, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius,color_scale)


    // Create the second doughnut chart
    chart_num += 1;
    value = rating_data[chart_num];
    label = rating_labels[chart_num];
    x = x+120
    y = y

    create_circle_chart_8(chart8_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, bar_color_palette, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius,color_scale)


    // Create the third doughnut chart
    chart_num += 1;
    value = rating_data[chart_num];
    label = rating_labels[chart_num];
    x = x+120
    y = y

    create_circle_chart_8(chart8_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, bar_color_palette, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius,color_scale)



    // Create the fourth doughnut chart
    chart_num += 1;
    value = rating_data[chart_num];
    label = rating_labels[chart_num];
    x = x+120
    y = y

    chart_group = create_circle_chart_8(chart8_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, bar_color_palette, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius,color_scale)

    // Interactivity: When hover enlarge font
    chart8_svg.selectAll("g")
        .on("mouseover", function (data, idx) {
            // BUG: Indefinte scaling up and down. REASON: <UNKOWN>
            // var current_transform = d3.select(this).attr("transform");
            // // Scale the arc chart
            // d3.select(this)
            // .transition()
            // .duration(200)
            // .attr("transform", current_transform + " scale(1.1)");
        
            // increase font size and weight
            d3.select(this).select("text")
              .style("font-size","40px")
              .style("font-weight", "bold");
            d3.select(this).select(".chart8-label")
              .style("font-size","25px")
              .style("font-weight", "bold");
            
          }
        )
        .on("mouseout", function (data, idx) {
            // BUG: Indefinte scaling up and down. REASON: <UNKOWN>
            // Restore the arch chart size 
            // var current_transform = d3.select(this).attr("transform");
            // console.log(current_transform);
            // d3.select(this)
            //     .transition()
            //     .duration(200)
            //     .attr("transform", current_transform+" scale(0.9091)");
        
            // revert font size and weight
            d3.select(this).select("text")
              .style("font-size","38px")
              .style("font-weight", "normal");
            
            d3.select(this).select(".chart8-label")
              .style("font-size","20px")
              .style("font-weight", "normal");
            
        });
});
