import showSidebar from "./component/sidebar.js";
import nava from "./component/nava.js";

let navbar = document.querySelector("#navbar");
navbar.innerHTML = nava();

// showSidebar();

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
    } else if (btn == "My Credits") {
      window.location = "credits.html";
    } else if (btn == "Invite A Friend") {
      window.location = "invite.html";
    }
  });
});

// active class

let urlPath = window.location.pathname;

// console.log(urlPath);
if (urlPath.includes("/credits.html")) {
  document
    .querySelector("#sidebar > ul > li:nth-child(2) > a")
    .classList.add("active");
} else if (urlPath.includes("/orders.html")) {
  document
    .querySelector("#sidebar > ul > li:nth-child(1) > a")
    .classList.add("active");
} else if (urlPath.includes("/invite.html")) {
  document
    .querySelector("#sidebar > ul > li:nth-child(3) > a")
    .classList.add("active");
} else if (urlPath.includes("/help.html")) {
  document
    .querySelector("#sidebar > ul > li:nth-child(4) > a")
    .classList.add("active");
}

let logout = document.querySelector("#sidebar > ul > li:nth-child(5) > a");
logout.addEventListener("click", () => {
  localStorage.clear();
  window.location = "./mobileOtp/otp.html";
});
