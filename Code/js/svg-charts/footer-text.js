// Footer text sentences
footer_text = ["Companies with digitally literate leaders are more aggressive and receptive to evaluating and adopting",
"emerging technologies in their quests to achieve digital transformation."]

// Create a group to contain all text sentences
var footer_text_group = svg.append("g").attr("class", "footer");

// In the above group append all the sentences one below the other with lineheight calculation
footer_text_group.selectAll("text")
  .data(footer_text)
  .enter()
  .append("text")
  .text(function (val) { return val; })
  .attr("x", 600)
  .attr("y", function (val, idx) { return 2210 + idx * 30; }); // lineheight = 30
