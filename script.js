// navbar scrolling 1
const alisNav = document.querySelector(".alis-navbar");
const header = document.querySelector("#my-header");

// menu 2
const hamMenu = document.querySelector(".ham-menu");
const listNavbar = document.querySelector(".list-navbar");
const hamLine = document.querySelectorAll(".ham-line");
const canvas = document.querySelector(".canvas");

// dropdowns 3
const clickLi2 = document.querySelector(".click-li2");
const clickLi = document.querySelectorAll(".click-s");
const dropdownLink = document.querySelectorAll(".dropdown-link");

// 1
document.addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 50) {
    alisNav.classList.add("scroll-nav");
    header.classList.add("center");
  } else {
    alisNav.classList.remove("scroll-nav");
    header.classList.remove("center");
  }

  if (document.documentElement.scrollTop > 800) {
    alisNav.style.opacity = '0'
    alisNav.classList.add('hide')
  } else {
    alisNav.style.opacity = '1'
    alisNav.classList.remove('hide')
  }
})

// 2
hamMenu.addEventListener("click", () => {
  hamLine[0].classList.toggle("line-rotate1");
  hamLine[1].classList.toggle("line-rotate3");
  canvas.classList.toggle("change");
});

//3
clickLi[0].addEventListener("click", () => {
  dropdownLink[0].classList.toggle("hidden");
  dropdownLink[1].classList.add("hidden");
});
clickLi[1].addEventListener("click", () => {
  dropdownLink[1].classList.toggle("hidden");
  dropdownLink[0].classList.add("hidden");
});
// برای تغییر وضعیت نمایش منو وقتی روش کلیک می‌کنیم
dropdownLink.forEach((toggle, index) => {
  toggle.addEventListener("click", (e) => {
    // e.stopPropagation();      // برای جلوگیری از بستن منو هنگام کلیک روی خودش
    dropdownLink[index].classList.toggle("hidden");
  });
});

// این فانکشن برای بستن هر منوی بازی استفاده میشه
document.addEventListener("click", (e) => {
  // توی این خط کد میگه که وقتی کاربر روی صفحه کلیک کرد
  clickLi.forEach((toggle, index) => {
    // برای هر کلیکی که کاربر روی صفحه انجام داده
    if (!toggle.contains(e.target) && !dropdownLink[index].contains(e.target)) {
      // اگر تارگت کلیک شده روی منو های باز شده نبود
      dropdownLink[index].classList.add("hidden");
    }
  });
});
