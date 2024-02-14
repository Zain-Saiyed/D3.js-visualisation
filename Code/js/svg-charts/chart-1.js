// Adding chart 1 SVG  
var chart1_svg = svg.append("svg");

var file_name = "chart-1.json";
var chart_data_promise = load_json_file(file_name);

// var motivator_values = [29.43,3.43,9.41,15.4,18,24.33];
// var motivator_labels = ["Anticipated Cost Savings","New Revenue Stream","Ability to Reach New Customers","Increased Agility","Reputational Value","A Customer's Successful Implementation"];

chart_data_promise.then(result => {
    var motivator_values = result[0].value;
    var motivator_labels = result[0].labels;

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

    // Chart radii
    var outer_chart_radius = 90;
    var inner_chart_radius = outer_chart_radius-30;

    var all_arc_pieces = Array.from(motivator_values);
    var all_arc_labels = Array.from(motivator_labels);

    // Get maximum and minimum values in our data
    var max_value = d3.max(all_arc_pieces);
    var min_value = d3.min(all_arc_pieces);

    // !Ref Link: https://d3js.org/d3-scale/linear
    var color_scale = d3.scaleLinear()
    .domain([min_value, max_value]) // value range
    .range([0, bar_color_palette.length - 1]); // color palette indexes range

    var chart_x = (300) - 90;
    var chart_y = (100) + 770;
    // Create a group for the doughnut charts
    var chart_group = chart1_svg.append("g")
        .attr("transform", "translate(" + (chart_x) + "," + (chart_y) + ")");

    // Instantiating Pie Generator - specifying the value function for data value extraction
    var base_pie_gen = d3.pie().sort(null).value(function (val) { return val; });

    // Instantiating Arc Generator - Setting the inner and outer radii
    var base_arc_gen = d3.arc().outerRadius(outer_chart_radius).innerRadius(inner_chart_radius);

    // Add in the arc pieces information                                                       ### NOT YET DISPLAYED ON SCREEN 
    var pie_chart_arcs = chart_group.selectAll(".arc-chart-1")  // Add id for easy identification & debugging. 
        .data(base_pie_gen(all_arc_pieces))
        .enter()
        .append("g")
        .attr("class", "arc-chart-1");
        
    // Add in the path element for each of the arcs to visualise them.  
    pie_chart_arcs.append("path")
    .attr("fill", function (val, idx) { return bar_color_palette[Math.ceil(color_scale(val.data))]; }) // Map Colors from palette
    .transition()
    .duration(50)
    .delay(function(d, i) { return i*75; })
    // .ease(d3.easePolyOut)
    .attr("d", base_arc_gen);

    // PROBLEM: TOO THIN WIDTH, arc_GEN is overwritten to display width of 10px only
    // !REF: https://stackoverflow.com/questions/20501067/animating-d3-donut-chart-on-load
    // pie_chart_arcs.append("path")
    //   .style("fill", function(val) { return bar_color_palette[Math.ceil(color_scale(val.data))]; })
    //   .transition()
    //   .delay(function(d, i) { return i * 500; })
    //   .duration(1000)
    //   .attrTween('d', function(base_arc) {     // !REF: https://stackoverflow.com/questions/54852791/angular-d3-understanding-attrtween-function
    //     var interpolate_gen = d3.interpolate(base_arc.startAngle, base_arc.endAngle);
    //     return function(current_time_value) { 
    //         base_arc.endAngle = interpolate_gen(current_time_value); 
    //         return base_arc_gen(base_arc);  // Ultimately same as the [].attr("d", base_arc_gen);], but d3.interpolate makes the transition smooth.
    //     }
    //   });

    var text_label_scale_factor = 1.5;
    // Add text labels to each arc
    pie_chart_arcs.append("text")
        // by default at center of chart, can consider this as [0,0]
        // get centroid (x,y) cordinate of the arc coresponding to the data value, 
        // scale the (x,y) values UP by 50% or 1.5 times. (the values will move diogonally, absed on the arc's centroid position)
        .attr("transform", function(d) {
            var [center_x, center_y] = base_arc_gen.centroid(d);
            // console.log([d,center_x, center_y]);
            return "translate(" + (center_x*text_label_scale_factor) + "," + (center_y*(text_label_scale_factor+0.1)) + ")"; // Adding 0.1 padding to y's scale factor for better visual
        })
        .style("text-anchor", "middle") // anchor is middle toalign text center at the new (x, y)
        .style("font-size", "16px")
        .style("font-weight", "bold")
        .style("fill", primary_text_color_accent)
        .transition()
        .duration(50)
        .delay(function(d, i) { return i*75; })
        .text(function(d) { return Math.floor(d.data)+"%"; }); // Add the rounded numbers with "%" appended to it.
    // Arc Centroid reference: 
    // !REF: https://www.geeksforgeeks.org/d3-js-arc-centroid-function/
    // !REF: https://stackoverflow.com/questions/12068510/calculate-centroid-d3

    pie_chart_arcs.append("line")
        .attr("stroke", primary_text_color_accent)
        .attr("stroke-width", 1)
        .transition()
        .duration(50)
        .delay(function(d, i) { return i*75; })
        .attr("x1", function(val) { return base_arc_gen.centroid(val)[0]; })
        .attr("y1", function(val) { return base_arc_gen.centroid(val)[1]; })
        .attr("x2", function(val) { 
            // Adjust x value by subtracting 20% from the factor to point to the center of the text label
            if (val.value<20)
                return (text_label_scale_factor-.2)*base_arc_gen.centroid(val)[0];  
            // For larger values decrease the subtracting factor as line has to be aligned more to the center
            else
                return (text_label_scale_factor-.1)*base_arc_gen.centroid(val)[0]; 
        })
        .attr("y2", function(val) { 
            // Adjust y value by subtracting 20% from the factor to point to the center of the text label
            if (val.value<10)
                return (text_label_scale_factor-.2)*base_arc_gen.centroid(val)[1]; 
            else if (val.value > 9 && val.value < 20)
                return (text_label_scale_factor-0.25)*base_arc_gen.centroid(val)[1]; 
            else
                return (text_label_scale_factor)*base_arc_gen.centroid(val)[1]; 
        });  
        
    var legend_box_width = legend_box_height= 15;
    var legend_x = 135;
    var legend_y = -100;
        
    // Sorting data in descending order
    all_arc_pieces = all_arc_pieces.sort((a, b) => b - a);

    // Adding legends below the chart
    chart_group.selectAll(".legend-box-chart-1")
    .data(all_arc_pieces)
    .enter()
    .append("rect")
    .transition()
    .duration(1000)
    .delay(function(d, i) { return i*100; })
    .attr("class", "legend-box-chart-1")
    .attr("width", legend_box_width)
    .attr("height", legend_box_height)
    .attr("x", legend_x)
    .attr("y", function (data, idx) { return legend_y+(idx * 25); })
    .attr("fill", function (data) { return bar_color_palette[Math.round(color_scale(data))]; });

    // Adding legend labels
    chart_group.selectAll(".legend-label-chart-1")
    .data(all_arc_labels)
    .enter()
    .append("text")
    .transition()
    .duration(1000)
    .ease(d3.easePolyOut)
    .delay(function(d, i) { return i*100; })
    .attr("class", "legend-label-chart-1")
    .text(function (data) { return data; })
    .attr("x", legend_x+(legend_box_height*1.5))
    .attr("y", function (data, idx) { return legend_y+(idx * 25)+(legend_box_height*0.8); })
    .style("font-size", "14px")
    .style("fill", primary_text_color_accent);


    // Add Interactivity:
    // Upon hovering increase opacity else decrease 
    pie_chart_arcs
        .on('mouseover', function (event, d) {
            d3.select(this).select('path').attr('opacity', 1).attr("stroke","#1c1c1c").attr("stroke-width",2);
        })
        .on('mouseout', function (event, d) {
            // base opacity
            d3.select(this).select('path').attr('opacity', 0.9).attr("stroke","").attr("stroke-width",0);
        });
});