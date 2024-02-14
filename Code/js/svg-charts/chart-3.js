// Adding chart 3 SVG  
var chart3_svg = svg.append("svg");


file_name = "chart-3.json";
chart_data_promise = load_json_file(file_name);
  
chart_data_promise.then(result => {
  
    var completion_value = result[0].completion_value;
    var labels = result[0].labels;
    var idx = 0;

    header1_x = 120;
    header1_y = 1120;
    chart3_line_height = 30;

    // Add Main Heading
    display_text(chart3_svg,header1_x,header1_y,"Evaluating Opportunities","34px",primary_text_color_accent);

    // Add secondary heading below main heading
    var new_y = header1_y+chart3_line_height;
    display_text(chart3_svg,header1_x,new_y,"Arising From Emerging Technologies","20px",primary_text_color_accent);


    var completion_percentage = completion_value[idx]/100;

    // Bar dimensions
    var bar_height = 20;
    var bar_width = 100;

    // Create a group to add the completion bar chart
    var bar_group1 = chart3_svg.append("g");

    bar1_x = header1_x+5; // 5 is padding
    bar1_y = new_y+90;
    // Create the horizontal bar
    bar_group1.append("rect")
    .attr("x",bar1_x)
    .attr("y",bar1_y)
    .attr("width", bar_width * completion_percentage)
    .attr("height", bar_height)
    .attr("fill", "#fbb344");

    bar_group1.append("rect")
    .attr("x",bar1_x+(bar_width * completion_percentage))
    .attr("y",bar1_y)
    .attr("width", bar_width *(1-completion_percentage))
    .attr("height", bar_height)
    .attr("fill", "#ffe9c7");

    // Add completion percentage text above the bar
    // !FUTURE: To optimize use text-anchor & bar width positioning to automate the display process.
    display_text(bar_group1,
        bar1_x-2.5,bar1_y-bar_height/1.5,
        (completion_percentage*100) + "%",
        "55px",
        secondary_text_color_accent,font_weight="bold");
    
    // console.log(labels);

    display_text(bar_group1,
        bar1_x,bar1_y+bar_height*2,
        labels[idx][0],
        "16px",
        primary_text_color_accent);

    display_text(bar_group1,
        bar1_x-5,bar1_y+bar_height*3,
        labels[idx+1][1],
        "17px",
        primary_text_color_accent,"bold");


    // Adding line spearater between the completion charts
    var new_x = header1_x+5+bar_width + (40);
    new_y = new_y + (20);
    chart3_svg.append("rect")
        .attr("x",new_x)
        .attr("y",new_y)
        .attr("width", 2)
        .attr("height", 150)
        .attr("fill", chart_outline_color_accent);


    // ======  SECOND COMPLETION BAR CHART  ===========
    idx+=1;
    completion_percentage = completion_value[idx]/100;

    // Create a group to add the completion bar chart
    var bar_group2 = chart3_svg.append("g");

    bar2_x = bar1_x+180; // 150 is the separation between the side by side charts
    bar2_y = bar1_y;

    // Create the horizontal bar
    bar_group2.append("rect")
    .attr("x",bar2_x)
    .attr("y",bar2_y)
    .attr("width", bar_width * completion_percentage)
    .attr("height", bar_height)
    .attr("fill", "#fbb344");

    bar_group2.append("rect")
    .attr("x",bar2_x+(bar_width * completion_percentage))
    .attr("y",bar2_y)
    .attr("width", bar_width *(1-completion_percentage))
    .attr("height", bar_height)
    .attr("fill", "#ffe9c7");

    // Add completion percentage text above the bar
    // !FUTURE: To optimize use text-anchor & bar width positioning to automate the display process.
    display_text(bar_group2,
        bar2_x-2.5,bar2_y-bar_height/1.5, // 2.5 is the x error correction for center alignment, 1.5 is the auto y margin for sapcing between text and bar
        (completion_percentage*100) + "%",
        "55px",
        secondary_text_color_accent,font_weight="bold");

    display_text(bar_group2,
        bar2_x,bar2_y+bar_height*2,
        labels[idx][0],
        "16px",
        primary_text_color_accent);

    display_text(bar_group2,
        bar2_x-20,bar2_y+bar_height*3,
        labels[idx][1],
        "17px",
        primary_text_color_accent,"bold");

});