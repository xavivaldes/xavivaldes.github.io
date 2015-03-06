function processLevel(index, element) {
  for (var i = 0; i < 5; i ++) {
    var point = $("<div/>");
    point.addClass("point");
    if (element.getAttribute("value") > i) {
      point.addClass("fill");
    } else {
      point.addClass("empty");
    }
    $(element).append(point);
  }
}

function processAllLevels() {
  $(".level").each(processLevel);
}

$(document).ready(processAllLevels);
