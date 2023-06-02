function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createAstolfoCluster() {
  var container = document.getElementById("astolfo-container");
  var clusterSize = getRandomPosition(3, 5);

  for (var i = 0; i < clusterSize; i++) {
    var astolfo = document.createElement("img");
    astolfo.src = "images/astolfo.png";
    astolfo.classList.add("astolfo");
    astolfo.style.top = getRandomPosition(0, 100) + "%";
    astolfo.style.left = getRandomPosition(0, 100) + "%";
    container.appendChild(astolfo);
  }
}

// Create random Astolfo clusters
for (var i = 0; i < 6; i++) {
  createAstolfoCluster();
}

// Show content on scroll
window.addEventListener("scroll", function() {
  var content = document.getElementById("content");
  var scrollDown = document.getElementById("scroll-down");

  if (window.scrollY > 0) {
    content.style.display = "block";
    scrollDown.style.display = "none";
  } else {
    content.style.display = "none";
    scrollDown.style.display = "block";
  }
});
