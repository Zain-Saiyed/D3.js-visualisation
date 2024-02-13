// Header text sentences
header_text =["ISACA’s Digital Transformation Barometer—research of more than 4,100 business technology professionals worldwide—", 
"found that the emerging technologies that are the most transformational also pose the most organizational challenges in", 
"terms of perceived risk and resistance to change. To enable a successful digital transformation journey, enterprises require strong",
"governance and risk management programs, which drive confidence and enable the speed of business."]

// Create a group to contain all text sentences
var header_text_group = svg.append("g").attr("class", "header");

// In the above group append all the sentences one below the other with lineheight calculation
header_text_group.selectAll("text")
  .data(header_text)
  .enter()
  .append("text")
  .text(function (val) { return val; })
  .attr("x", 600)
  .attr("y", function (val, idx) { return 500 + idx * 30; }); // lineheight = 30
