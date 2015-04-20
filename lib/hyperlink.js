
function hyperlink(item) {

  tool_tags = {
                "KI300"     : "https://localhost/crucible/cru/",
                "KIARS"     : "https://localhost/jira/browse/", 
                "TIC"       : "https://localhost/jira/browse/", 
                "REV"       : "https://localhost/contour/review.req#/r:",
                "KI_300-CR" : "https://localhost/jira/?jql=",
                "CR"        : "https://localhost/jira/?jql=",
              };
 
  var s = item;

  for (i in tool_tags)
  {
    var re = new RegExp("(?:^|\\s|[^\\\\\\?\\/\\-\\[])(" + i + "-\\d+)(?:\\W|$)","mi"); 
    s = s.replace(re, "[\$1]("+tool_tags[i]+"\$1)");
  } 
  return s;
}
