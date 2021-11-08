let title = document.querySelector(
  ".header__assessments-disciplines-text-title"
);
const icon1 = document.querySelector(".header__assessments-disciplines-icon1");
const icon2 = document.querySelector(".header__assessments-disciplines-icon2");
const icon3 = document.querySelector(".header__assessments-disciplines-icon3");
const icon4 = document.querySelector(".header__assessments-disciplines-icon4");
const icon5 = document.querySelector(".header__assessments-disciplines-icon5");
const icons = [icon1, icon2, icon3, icon4, icon5];

// icons.forEach((items) =>
//   items.addEventListener("mouseover", changeTitle(items), false)
// );
icon1.addEventListener(
  "mouseover",
  function () {
    title.innerHTML = "Development";
  },
  false
);
icon2.addEventListener(
  "mouseover",
  function () {
    title.innerHTML = "Analysis";
  },
  false
);
icon3.addEventListener(
  "mouseover",
  function () {
    title.innerHTML = "Arhitecture";
  },
  false
);
icon4.addEventListener(
  "mouseover",
  function () {
    title.innerHTML = "Testing";
  },
  false
);
icon5.addEventListener(
  "mouseover",
  function () {
    title.innerHTML = "Project management";
  },
  false
);

// function changeTitle(item) {
//   switch (item) {
//     case icon1:
//       return (title.innerHTML = "ab");
//       break;
//     case icon2:
//       return (title.innerHTML = "abdfa");
//     case icon3:
//       return (title.innerHTML = "abasdf");
//     case icon4:
//       return (title.innerHTML = "abadsf");
//     case icon5:
//       return (title.innerHTML = "abdasf");
//     default:
//       return (title.innerHTML = "fdfsads");
//   }
// }
window.addEventListener("mousemove", function (e) {
  eyeball(e);
});

const img = document.querySelectorAll(".header__smilik");
function eyeball(evt) {
  let x = img[0].getBoundingClientRect().left + img[0].clientWidth / 2;
  let y = img[0].getBoundingClientRect().top + img[0].clientHeight / 2;
  let mouse_x = evt.pageX;
  let mouse_y = evt.pageY;
  let radians = Math.atan2(mouse_x - x, mouse_y - y);
  let degree = radians * (180 / Math.PI) * -1 + 90;
  img[0].style.transform = `rotate(${degree}deg)`;
}
