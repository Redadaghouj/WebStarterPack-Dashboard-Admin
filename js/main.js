let navAvatar = document.querySelector(".navbar>div:last-of-type .avatar");
let notificationBtn = document.querySelector(
  ".navbar>div:last-of-type .notification"
);

// Toggle Menu

let menuTogglerBtn = document.querySelector(".navbar .menu-toggler");

menuTogglerBtn.addEventListener("click", () => {
  let sidebar = document.querySelector(".content .sidebar");
  sidebar.classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
});

// Dropdown Menu

function dropMenu(selector) {
  selector.addEventListener("click", () => {
    selector.lastElementChild.classList.toggle("active");
  });
}

dropMenu(navAvatar);
dropMenu(notificationBtn);

// Chart

let Visitors = [800, 320, 190, 250, 400, 600],
  Hired = [502, 203, 70, 200, 350, 400],
  years = [2015, 2016, 2017, 2018, 2019, 2020];

var options = {
  chart: {
    type: "area",
    height: "100%",
    width: "100%",
  },
  series: [
    {
      type: "area",
      name: "Visitors",
      data: Visitors,
    },
    {
      type: "area",
      name: "Hired",
      data: Hired,
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  colors: ["#43a047", "#e65245", "#e43a15"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
