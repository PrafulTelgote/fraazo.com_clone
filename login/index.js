import showSidebar from "./component/sidebar.js";

showSidebar();

let sidebar = document.querySelector("#sidebar");
sidebar.innerHTML = showSidebar();
// console.log("hi");

let menus = document.querySelectorAll("#sidebar li");

menus.forEach((menu) => {
  //   console.log(menu);
  menu.addEventListener("click", (event) => {
    // console.log(event.target.innerText);
    const btn = event.target.innerText;
    // console.log(btn);
    if (btn == "My Orders") {
      //   console.log(btn);
      window.location = "orders.html";
    } else if (btn == "Help & Support") {
      window.location = "help.html";
    }
  });
});
