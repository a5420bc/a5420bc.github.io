import buger from "../images/burger.png";
function loadMemu() {
  const menu = document.createElement("div");
  menu.className = "menu";
  menu.classList.add("tab");
  menu.classList.add("hidden");

  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";

  const menuItems = document.createElement("div");
  menuItems.className = "menu--items";

  let items = [
    {
      title: "burger",
      image: buger,
      text: "A delicious, juicy burger with a savory patty, fresh toppings, and a soft bun.",
    },
    {
      title: "pizza",
      image: require("../images/pizza.png"),
      text: "A delicious, juicy burger with a savory patty, fresh toppings, and a soft bun.",
    },
    {
      title: "biryani",
      image: require("../images/biryani.png"),
      text: "A delicious, juicy burger with a savory patty, fresh toppings, and a soft bun.",
    },
    {
      title: "toco",
      image: require("../images/taco.png"),
      text: "A delicious, juicy burger with a savory patty, fresh toppings, and a soft bun.",
    },
  ];
  for (const item of items) {
    const itemWrap = document.createElement("div");
    itemWrap.className = "item";

    const imageWrap = document.createElement("div");
    imageWrap.className = "item--image";
    const img = document.createElement("img");
    img.src = item.image;
    imageWrap.appendChild(img);

    const textWrap = document.createElement("div");
    textWrap.className = "item--text";
    const title = document.createElement("h2");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    const btn = document.createElement("button");
    btn.textContent = "Add";
    btn.className = "btn";

    textWrap.appendChild(title);
    textWrap.appendChild(text);
    textWrap.appendChild(btn);

    itemWrap.appendChild(imageWrap);
    itemWrap.appendChild(textWrap);
    menuItems.appendChild(itemWrap);
  }
  menu.appendChild(menuTitle);
  menu.appendChild(menuItems);
  document.getElementById("content").appendChild(menu);
}
export default loadMemu;