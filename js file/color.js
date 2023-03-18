let black = document.querySelector(".black");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let colorPage = document.querySelector(".colorPage");
let radio = document.querySelector(".radio");
colorPage.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("black")) {
      document.body.style.backgroundColor = "black";
      radio.style.backgroundColor = "black";
      localStorage.setItem("colorPage", "black");
    } else if (e.target.classList.contains("red")) {
      document.body.style.backgroundColor = "rgb(128, 14, 14)";
      radio.style.backgroundColor = "rgb(128, 14, 14)";
      localStorage.setItem("colorPage", "rgb(128, 14, 14)");
    } else if (e.target.classList.contains("green")) {
      document.body.style.backgroundColor = "rgb(12, 117, 12)";
      radio.style.backgroundColor = "rgb(12, 117, 12)";
      localStorage.setItem("colorPage", "rgb(12, 117, 12)");
    } else if (e.target.classList.contains("blue")) {
      document.body.style.backgroundColor = "rgb(18, 18, 151)";
      radio.style.backgroundColor = "rgb(18, 18, 151)";
      localStorage.setItem("colorPage", "rgb(18, 18, 151)");
    }
  },
  false
);
if (localStorage.getItem("colorPage") !== null) {
  document.body.style.backgroundColor = localStorage.getItem("colorPage");
  radio.style.backgroundColor = localStorage.getItem("colorPage");
}
