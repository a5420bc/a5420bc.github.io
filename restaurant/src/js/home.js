function laodHome() {
  const content = document.createElement("div");
  content.classList.add("home");
  content.classList.add("tab");
  const homeWrap = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "我是一些非常正常的正文哦";

  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "点我";

  homeWrap.appendChild(h1);
  homeWrap.appendChild(btn);
  content.appendChild(homeWrap);

  document.getElementById("content").appendChild(content);
}
export default laodHome;
