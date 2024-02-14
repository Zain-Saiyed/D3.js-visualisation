file_name = "chart-7.json";
chart_data_promise = load_json_file(file_name);
  
chart_data_promise.then(result => {

    // Adding chart 7 SVG  
    var chart7_svg = svg.append("svg");

    header1_x = 120;
    header1_y = 1890;
    chart7_line_height = 40;

    // Add Main Heading
    display_text(chart7_svg,
        header1_x,header1_y,
        "Are Your Organization’s Leaders",
        "20px",
        primary_text_color_accent);

    // Add secondary heading below main heading
    var new_y = header1_y+chart7_line_height;
    display_text(chart7_svg,
        header1_x,new_y,
        "Digitally Literate?",
        "34px",
        primary_text_color_accent);

    // Doughnut chart creation: 

    // Chart Data
    // var literacy_data = [53, 25, 22];
    // var literacy_labels = ["Yes", "No", "Unsure"];
    var literacy_data = result[0].data;
    var literacy_labels = result[0].labels;

    var pie_colors = ["#fbb346","white","#ffe9c9","white"];

    // Chart radii
    var outer_chart_radius = 60;
    var inner_chart_radius = outer_chart_radius-20;

    // Add chart SVG container
    var chart7_svg = chart7_svg.append("svg");
    value = literacy_data[0];
    label = literacy_labels[0];

    // Instantiating Pie Generator - specifying the value function for data value extraction
    var base_pie_gen = d3.pie().sort(null).value(function (val) { return val; });

    // Instantiating Arc Generator - Setting the inner and outer radii
    var base_arc_gen = d3.arc().innerRadius(inner_chart_radius).outerRadius(outer_chart_radius);

    inner_text_font_size = "25px"
    inner_text_font_weight = chart_label_font_weight = "bold"
    inner_text_font_color = chart_label_font_color = secondary_text_color_accent

    chart_label_font_size = "20px"

    // Create the first doughnut chart
    chart_num = 0;
    value = literacy_data[chart_num];
    label = literacy_labels[chart_num];
    x = 180
    y = 2020

    create_doughnut_chart_7(chart7_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, pie_colors, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius)

    // Create the second doughnut chart
    chart_num += 1;
    value = literacy_data[chart_num];
    label = literacy_labels[chart_num];
    x = x+150
    y = y

    create_doughnut_chart_7(chart7_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, pie_colors, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius)


    // Create the third doughnut chart
    chart_num += 1;
    value = literacy_data[chart_num];
    label = literacy_labels[chart_num];
    x = x+150
    y = y

    create_doughnut_chart_7(chart7_svg, value, label, (chart_num+1), 
        base_pie_gen, base_arc_gen, pie_colors, 
        x, y, 
        inner_text_font_size, inner_text_font_weight, inner_text_font_color, 
        chart_label_font_size, chart_label_font_weight, chart_label_font_color,
        outer_chart_radius)

});