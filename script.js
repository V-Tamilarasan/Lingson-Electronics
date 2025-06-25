const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".product-box");

buttons.forEach((btnEl) => {
  btnEl.addEventListener("click", (e) => {
    document.querySelector(".clicked")?.classList.remove("clicked");
    btnEl.classList.add("clicked");

    const btnfilter = e.target.dataset.filter;

    boxes.forEach((box) => {
      if (btnfilter == "all" || box.dataset.item === btnfilter) {
        box.style.removeProperty("display");
      } else {
        box.style.display = "none";
      }
    });
  });
});

function togglemenu() {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");

  sidebar.classList.toggle("active");
  document.body.classList.toggle("sidebar-active"); // body gets class that moves content
}
