let title = document.querySelector(
  ".header__assessments-disciplines-text-title"
);
const icon1 = document.querySelector(
  ".header__assessments-disciplines-icon1"
);
const icon2 = document.querySelector(
  ".header__assessments-disciplines-icon2"
);
const icon3 = document.querySelector(
  ".header__assessments-disciplines-icon3"
);
const icon4 = document.querySelector(
  ".header__assessments-disciplines-icon4"
);
const icon5 = document.querySelector(
  ".header__assessments-disciplines-icon5"
);
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

const img = document.querySelectorAll(
  ".header__smilik-group"
);
function eyeball(evt) {
  let x =
    img[0].getBoundingClientRect().left +
    img[0].clientWidth / 1.9;
  let y =
    img[0].getBoundingClientRect().top +
    img[0].clientHeight / 1.9;
  let mouse_x = evt.pageX;
  let mouse_y = evt.pageY;
  let radians = Math.atan2(mouse_x - x, mouse_y - y);
  // let degree = radians * (180 / Math.PI) * -1 + 90;
  let degree = radians * (180 / Math.PI) * -1;
  img[0].style.transform = `rotate(${degree}deg)`;
}

window.addEventListener("scroll", function () {
  const parallax1 = document.querySelector(".table__score");
  const parallax2 = document.querySelector(
    ".table__developer-quiz"
  );
  const parallax3 = document.querySelector(
    ".table__hiring"
  );
  const parallax4 = document.querySelector(
    ".table__question"
  );
  const parallax5 = document.querySelector(".header__btn");
  const parallax6 = document.querySelector(
    ".header__assessments-disciplines"
  );
  const parallax7 = document.querySelector(
    ".header__assessments"
  );
  let scrollPosition = window.pageYOffset;
  // console.log(parallax);
  parallax1.style.transform =
    "translateY(" + scrollPosition * -0.3 + "px)";
  parallax2.style.transform =
    "translateY(" + scrollPosition * -0.3 + "px)";
  parallax3.style.transform =
    "translateY(" + scrollPosition * -0.3 + "px)";
  parallax4.style.transform =
    "translateY(" + scrollPosition * -0.3 + "px)";
  if (parallax6.getBoundingClientRect().top < 26) {
    parallax5.style.position = "fixed";
    parallax5.style.top = "25px";
    parallax7.style.marginLeft = "255px";
  } else if (
    parallax5.getBoundingClientRect().top ==
    parallax6.getBoundingClientRect().top
  ) {
    parallax5.style.position = "static";
    parallax7.style.marginLeft = "0px";
  } else {
    parallax5.style.position = "static";
    parallax5.style.top = "25px";
    parallax7.style.marginLeft = "0px";
  }
});

window.addEventListener("resize", function () {
  _width = window.innerWidth;
  if (_width < 770) {
    renderer.setSize(200, 200);
    console.log(_width);
  } else {
    renderer.setSize(400, 400);
    console.log(_width);
  }
});

const email = document.querySelector(
  ".footer__second__email"
);
const copy = document.querySelector(".copy");
const copied = document.querySelector(".copied");
email.addEventListener(
  "mouseover",
  function () {
    copy.style.opacity = "1";
  },
  false
);
email.addEventListener(
  "mouseout",
  function () {
    copy.style.opacity = "0";
    copied.style.opacity = "0";
  },
  false
);
email.addEventListener(
  "onclick",
  function () {
    copied.style.opacity = "1";
  },
  false
);

let today = new Date();
let time2 = today.getHours() + ":" + today.getMinutes();
let time = document.querySelector(".page__header-time");
time.innerHTML = time2;
