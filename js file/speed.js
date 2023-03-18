class speed {
  constructor() {
    this.Speed = document.getElementById("Speed");
    this.Speed.addEventListener("change", function (e) {
      document.getElementById("sound").playbackRate = Speed.value / 100;
    });
  }
}
onload = new speed();
