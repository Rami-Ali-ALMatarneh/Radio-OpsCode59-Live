class volume {
  constructor() {
    var Volume = document.getElementById("Volume");
    Volume.addEventListener("change", function (e) {
      document.getElementById("sound").volume = Volume.value / 100;
    });
  }
}
onload = new volume();
