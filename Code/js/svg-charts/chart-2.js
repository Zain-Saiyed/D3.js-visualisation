// Create an SVG container
var chart2_svg = svg.append("svg");

file_name = "chart-2.json";
chart_data_promise = load_json_file(file_name);
  
chart_data_promise.then(result => {
  
  header1_x = 675;
  header1_y = 690;
  chart2_line_height = 40;
  chart2_image_width = chart2_image_height = 70;
  img_width = img_height = 70;

  // Add Main Heading
  chart2_svg.append("text")
    .text("Technologies Facing the Most Organizational")
    .attr("x", header1_x) 
    .attr("y", header1_y) 
    .style("font-size", "20px") 
    .style("fill", primary_text_color_accent); 

  // Add secondary heading below main heading
  var new_y = header1_y+chart2_line_height;

  chart2_svg.append("text")
    .text("Challenges or Resistance")
    .attr("x", header1_x) 
    .attr("y", new_y) 
    .style("fill", primary_text_color_accent)
    .style("font-size", "34px"); 

  var image_names  = result[0].images;
  var image_labels = result[0].text_values;
  var img_idx=0;
  // console.log(image_labels[0]);
  // Adding First image in chart-2 
  var img2_x = header1_x;
  var img2_y = new_y+30; // 30 is margin start of first image 
  var img2_text1_x = header1_x+80;
  var img2_text1_y = new_y+30+30; // 30 is margin, 30 is text line height 
  var img2_text2_x = header1_x+80;
  var img2_text2_y = new_y+30+30*1.6; // 30 is margin, 30 is text line height 

  chart2_group_svg = chart2_svg.append('g').attr("class","img-group")

  chart2_group_svg = display_image_multi_text(chart2_group_svg.append("svg"), 
    image_names[img_idx],
    [img2_x,img2_text1_x,img2_text2_x], 
    [img2_y,img2_text1_y,img2_text2_y], 
    image_labels[img_idx], "17px", 
    "normal", secondary_text_color_accent)

  // Adding Second image in chart-2
  img2_x = header1_x
  img2_y = new_y+30+chart2_image_height+15
  img2_text_x = header1_x+80
  img2_text_y = new_y+30+30+chart2_image_height*1.35
  img_idx +=1;
  chart2_group_svg = chart2_svg.append('g').attr("class","img-group")

  chart2_group_svg = display_image_single_text(chart2_group_svg.append("svg"), 
    image_names[img_idx], 
    [img2_x,img2_text_x], 
    [img2_y,img2_text_y], 
    image_labels[img_idx], "17px", 
    "normal", secondary_text_color_accent)

  // Adding Third image in chart-2 
  img2_x = header1_x+220; // 220 is the right margin of second column in which image should start 
  img2_text1_x = img2_text_x+220;
  img2_text2_x = img2_text_x+220;

  img2_y = img2_y; 
  img2_text1_y = img2_text_y-15*0.7; // 15px is the padding to distribuetd between the 2 texts, 70% is the buffer margin to include between text to make it center aligned with the image.  
  img2_text2_y = img2_text_y+15*0.7; 
  img_idx +=1;
  chart2_group_svg = chart2_svg.append('g').attr("class","img-group")

  chart2_group_svg = display_image_multi_text(chart2_group_svg.append("svg"), 
    image_names[img_idx], 
    [img2_x,img2_text1_x,img2_text2_x], 
    [img2_y,img2_text1_y,img2_text2_y], 
    image_labels[img_idx], "17px", 
    "normal", secondary_text_color_accent)


  // Adding Fourth image in chart-2
  img2_x = header1_x
  img2_y = img2_y+chart2_image_height+15
  img2_text_x = header1_x+80
  img2_text_y = img2_text_y+chart2_image_height*1.25
  img_idx +=1;
  chart2_group_svg = chart2_svg.append('g').attr("class","img-group")

  chart2_group_svg = display_image_single_text(chart2_group_svg.append("svg"), 
    image_names[img_idx], 
    [img2_x,img2_text_x], 
    [img2_y,img2_text_y], 
    image_labels[img_idx], "17px", 
    "normal", secondary_text_color_accent)


  // Adding Fifth image in chart-2 
  img2_x = header1_x+220; // 220 is the right margin of second column in which image should start 
  img2_text1_x = img2_text_x+220;
  img2_text2_x = img2_text_x+220;

  img2_y = img2_y; 
  img2_text1_y = img2_text_y-15*0.7; // 15px is the padding to distribuetd between the 2 texts, 70% is the buffer margin to include between text to make it center aligned with the image.  
  img2_text2_y = img2_text_y+15*0.7; 
  img_idx +=1;
  chart2_group_svg = chart2_svg.append('g').attr("class","img-group")

  chart2_group_svg = display_image_multi_text(chart2_group_svg.append("svg"), 
    image_names[img_idx], 
    [img2_x,img2_text1_x,img2_text2_x], 
    [img2_y,img2_text1_y,img2_text2_y], 
    image_labels[img_idx], "17px", 
    "normal", secondary_text_color_accent);

    chart2_svg.selectAll(".img-group")
    // When mouse is over the selection then enlarge the image by 15% and incraese font size by 3px and make the text 'bold'
      .on("mouseover", function (data, idx) {
        // for images
        d3.select(this).select("image")
          .attr("width", img_width*1.15) 
          .attr("height", img_height*1.15)
          .attr("x",function() {
            return parseFloat(d3.select(this).attr("x"))-(img_width*0.15)/2; // have to convert to Float because by default d3 doesn't return a number response.
          }) 
          .attr("y",function() {
            return parseFloat(d3.select(this).attr("y"))-(img_height*0.15)/2;
          });
        // For text
        d3.select(this).selectAll("text")
          .style("font-size","20px")
          .style("font-weight", "bold");
      })

    // When mouse leaves focus of the selection then return image to its orginal size, and return font size to 17px, and make the text weight 'normal'
    .on("mouseout", function (data, idx) {
      // for images
      d3.select(this).select("image")
        .attr("width", img_width) 
        .attr("height", img_height)
        .attr("x",function() {
          return parseFloat(d3.select(this).attr("x"))+(img_width*0.15)/2; // have to convert to Float because by default d3 doesn't return a number response.
        }) 
        .attr("y",function() {
          return parseFloat(d3.select(this).attr("y"))+(img_height*0.15)/2;
        });
    
      // For text
      d3.select(this).selectAll("text")
        .style("font-size","17px")
        .style("font-weight", "normal");
    });
});