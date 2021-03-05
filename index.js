function openNav() {
  document.getElementById("sideNav").style.width = "50%";
  document.querySelector(".main-overlay").classList.add("main-overlay-active");
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0%";
  document
    .querySelector(".main-overlay")
    .classList.remove("main-overlay-active");
  console.log("clicked");
}

document.getElementById("main").addEventListener("click", function () {
  document.getElementById("sideNav").style.width = "0%";
  closeNav();
});

// side bar collapse functionality
var dropdown = document.querySelectorAll(".dropdown-btn");
dropdown.forEach((e, i) => {
  e.addEventListener("click", function () {
    var target = e.getAttribute("data-target");
    let sideCollapceContent = document.querySelectorAll(
      ".side-collapse-content"
    );
    sideCollapceContent.forEach((content) => {
      let contentId = content.getAttribute("id");
      var existingStyle = content.getAttribute("style");
      if (existingStyle !== null && String(existingStyle).includes("block")) {
        if (target === contentId) {
          content.style.display = "none";
        } else {
          content.style.display = "none";
        }
      } else {
        if (target === contentId) {
          content.style.display = "block";                                                           
        } else {
          content.style.display = "none";
        }
      }
    });
  });
});
