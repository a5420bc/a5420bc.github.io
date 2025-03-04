import "./main.scss";
import loadHome from "./js/home";
import loadMemu from "./js/menu";
function init() {
  loadHome();
  loadMemu();
  const btns = document.querySelectorAll("nav button");
  const tabs = document.querySelectorAll(".tab");
  console.log(btns, tabs);
  btns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      tabs.forEach((tab) => {
        tab.classList.add("hidden");
      });
      tabs[idx].classList.remove("hidden");
    });
  });
}
init();
