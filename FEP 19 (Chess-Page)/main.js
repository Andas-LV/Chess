const containerTabs = document.querySelector(".tabs-container");
const ad = document.querySelector(".ad");
const tabsBtn = document.querySelectorAll(".burger");
const tabsItems = document.querySelectorAll(".nav-block");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });
    } else {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
});

const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownMenu2 = document.getElementById("dropdown-menu-2");

function toggleDropdown() {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
    dropdownMenu2.style.display = "none";
  }
}

function toggleDropdown2() {
  if (dropdownMenu2.style.display === "block") {
    dropdownMenu2.style.display = "none";
  } else {
    dropdownMenu2.style.display = "block";
    dropdownMenu.style.display = "none";
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    dropdownMenu.style.display = "none";
    dropdownMenu2.style.display = "none";
  }
};

const ads = [
  "./img/Ads/ad-1.jpg",
  "./img/Ads/ad-2.jpg",
  "./img/Ads/ad-3.jpg",
  "./img/Ads/ad-4.jpg",
];
const prevImg = document.querySelector(".arrow-left");
const nextImg = document.querySelector(".arrow-right");
let imageIndex = 0;

setInterval(changeImage, 5000);

function changeImage() {
  imageIndex++;
  if (imageIndex == ads.length) {
    imageIndex = 0;
  }
  document.querySelector(".ad-img").src = ads[imageIndex];
}

function prevImage() {
  imageIndex--;
  if (imageIndex == 0) {
    imageIndex = ads.length - 1;
  }
}

prevImg.addEventListener("click", prevImage);

function nextImage() {
  imageIndex++;
  if (imageIndex == ads.length) {
    imageIndex = 0;
  }
}

nextImg.addEventListener("click", nextImage);

const blockTabs = document.querySelectorAll(".block-tabs");
const blockItems = document.querySelectorAll(".block");

blockTabs.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    blockTabs.forEach(function (item) {
      item.classList.remove("active");
    });

    blockItems.forEach(function (item) {
      item.classList.remove("active");
    });

    currentBtn.classList.add("active");
    currentTab.classList.add("active");

    if (
      (currentBtn.classList.contains("active"),
      currentTab.classList.contains("active"))
    ) {
      ad.style.display = "none";
      containerTabs.style.display = "block";
    } else {
      ad.style.display = "block";
      containerTabs.style.display = "none";
    }
  });
});

const themeBtn = document.querySelector(".theme");
const switchMode = document.getElementById("switchMode");


themeBtn.onclick = function() {
  let theme = document.getElementById("theme");

  if(theme.getAttribute("href") == "./css-light/main-light.css"){
      theme.href = "./css/main.css";
  }else {
      theme.href = "./css-light/main-light.css";
  }
}