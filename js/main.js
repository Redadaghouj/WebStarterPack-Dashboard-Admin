let navAvatar = document.querySelector(".navbar>div:last-of-type .avatar");
let notificationBtn = document.querySelector(
  ".navbar>div:last-of-type .notification"
);
let menuTogglerBtn = document.querySelector(".navbar .menu-toggler");

menuTogglerBtn.addEventListener("click", () => {
  let sidebar = document.querySelector(".content .sidebar");
  sidebar.classList.toggle("active");
});

function dropMenu(selector) {
  selector.addEventListener("click", () => {
    selector.lastElementChild.classList.toggle("active");
  });
}

dropMenu(navAvatar);
dropMenu(notificationBtn);
