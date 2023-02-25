let navAvatar = document.querySelector(".navbar>div:last-of-type .avatar");
let notificationBtn = document.querySelector(
  ".navbar>div:last-of-type .notification"
);

let menuTogglerBtn = document.querySelector(".navbar .menu-toggler");

navAvatar.addEventListener("click", () => {
  navAvatar.lastElementChild.classList.toggle("active");
});

notificationBtn.addEventListener("click", () => {
  notificationBtn.lastElementChild.classList.toggle("active");
});

menuTogglerBtn.addEventListener("click", () => {
  let sidebar = document.querySelector(".content .sidebar");
  sidebar.classList.toggle("active");
});
