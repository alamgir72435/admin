document
  .querySelector(".sidebarToggle")
  .addEventListener("click", toogleSidebar);
function toogleSidebar() {
  const sideNav = document.getElementById("sideNav");
  const overlay = document.querySelector(".main-overlay");
  const opened = sideNav.classList.contains("sidebar-open");
  if (opened) {
    sideNav.classList.remove("sidebar-open");
    overlay.classList.remove("main-overlay-active");
  } else {
    sideNav.classList.add("sidebar-open");
    overlay.classList.add("main-overlay-active");
  }
}

document.getElementById("main").addEventListener("click", function () {
  const sideNav = document.getElementById("sideNav");
  const overlay = document.querySelector(".main-overlay");
  sideNav.classList.remove("sidebar-open");
  overlay.classList.remove("main-overlay-active");
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
      // var existingStyle = content.getAttribute("style");

      var existingClass = content.classList;

      if (content.classList.contains("opened")) {
        if (target === contentId) {
          content.classList.remove("opened");
          content.classList.add("closed");
        } else {
          content.classList.remove("opened");
          content.classList.add("closed");
        }
      } else {
        if (target === contentId) {
          content.classList.add("opened");
          content.classList.remove("closed");
        } else {
          content.classList.remove("opened");
          content.classList.add("closed");
        }
      }
    });
  });
});
