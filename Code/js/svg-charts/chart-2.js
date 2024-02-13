// Create an SVG container
var chart2_svg = svg.append("svg");

header1_x = 675;
header1_y = 690;
chart2_line_height = 40;
chart2_image_width = chart2_image_height = 70;

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

// Adding First image in chart-2 
var img2_x = header1_x;
var img2_y = new_y+30; // 30 is margin start of first image 
var img2_text1_x = header1_x+80;
var img2_text1_y = new_y+30+30; // 30 is margin, 30 is text line height 
var img2_text2_x = header1_x+80;
var img2_text2_y = new_y+30+30*1.6; // 30 is margin, 30 is text line height 

chart2_svg = display_image_multi_text(chart2_svg.append("svg"), 
  "image1.jpg", 
  [img2_x,img2_text1_x,img2_text2_x], 
  [img2_y,img2_text1_y,img2_text2_y], 
  ["Al/Machine Learning/","Cognitive Tech"], "17px", 
  "bold", secondary_text_color_accent)

// Adding Second image in chart-2
img2_x = header1_x
img2_y = new_y+30+chart2_image_height+15
img2_text_x = header1_x+80
img2_text_y = new_y+30+30+chart2_image_height*1.35

chart2_svg = display_image_single_text(chart2_svg.append("svg"), 
  "image2.jpg", 
  [img2_x,img2_text_x], 
  [img2_y,img2_text_y], 
  "Public Cloud", "17px", 
  "bold", secondary_text_color_accent)

// Adding Third image in chart-2 
img2_x = header1_x+220; // 220 is the right margin of second column in which image should start 
img2_text1_x = img2_text_x+220;
img2_text2_x = img2_text_x+220;

img2_y = img2_y; 
img2_text1_y = img2_text_y-15*0.7; // 15px is the padding to distribuetd between the 2 texts, 70% is the buffer margin to include between text to make it center aligned with the image.  
img2_text2_y = img2_text_y+15*0.7; 

chart2_svg = display_image_multi_text(chart2_svg.append("svg"), 
  "image4.jpg", 
  [img2_x,img2_text1_x,img2_text2_x], 
  [img2_y,img2_text1_y,img2_text2_y], 
  ["Internet of","Things"], "17px", 
  "bold", secondary_text_color_accent)


// Adding Fourth image in chart-2
img2_x = header1_x
img2_y = img2_y+chart2_image_height+15
img2_text_x = header1_x+80
img2_text_y = img2_text_y+chart2_image_height*1.25

chart2_svg = display_image_single_text(chart2_svg.append("svg"), 
  "image3.jpg", 
  [img2_x,img2_text_x], 
  [img2_y,img2_text_y], 
  "Blockchain", "17px", 
  "bold", secondary_text_color_accent)


// Adding Fifth image in chart-2 
img2_x = header1_x+220; // 220 is the right margin of second column in which image should start 
img2_text1_x = img2_text_x+220;
img2_text2_x = img2_text_x+220;

img2_y = img2_y; 
img2_text1_y = img2_text_y-15*0.7; // 15px is the padding to distribuetd between the 2 texts, 70% is the buffer margin to include between text to make it center aligned with the image.  
img2_text2_y = img2_text_y+15*0.7; 

chart2_svg = display_image_multi_text(chart2_svg.append("svg"), 
  "image5.jpg", 
  [img2_x,img2_text1_x,img2_text2_x], 
  [img2_y,img2_text1_y,img2_text2_y], 
  ["Big Data","Analytics"], "17px", 
  "bold", secondary_text_color_accent)


// svg = chart2_svg;