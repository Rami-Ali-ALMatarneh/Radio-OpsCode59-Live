let boxInfo = document.querySelector(".boxInfo");
let radioNameHTML = document.querySelector(".radioName");
let isPlayed = false;
var count = 0;
let radioName = "";
const audios = [
  "https://securestreams2.autopo.st:1243/live", //وتر fm
  "https://music.wfuv.org/music-hi",
  "https://ice5.securenetsystems.net/MAZAJFM?playSessionID=684EE1BA-C600-4BF9-B606DD704BEC73F6",
  "https://securestreams2.autopo.st:1242/live",
  "https://nashama.radioca.st/stream",
  "https://securestreams2.autopo.st:1241/live",
  "https://s2.voscast.com:10445/stream",
  "https://s3.voscast.com/cdn/?k=641595b6817aa&m=;stream1679136183320/1",
  "https://ice5.securenetsystems.net/MAZAJFM?playSessionID=DB6FBC0E-A1CB-49B0-97F23F13D39994CF",
  "https://ice1.securenetsystems.net/DEMOSTN?playSessionID=C5A94355-E983-40BB-AB5B5B38487017B7",
  "https://stream.zeno.fm/uzu059s00f8uv",
];

boxInfo.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("fa-play")) {
      playAudio(count);
    } else if (e.target.classList.contains("fa-pause")) {
      pauseAudio();
    } else if (e.target.classList.contains("fa-step-backward")) {
      backAudio();
    } else if (e.target.classList.contains("fa-step-forward")) {
      nextAudio();
    }
  },
  false
);
function playAudio() {
  isPlayed = true;
  document.getElementById("sound").src = audios[count];
  document.getElementById("sound").play();
  document.querySelector(".play").style.display = "none";
  document.querySelector(".pause").style.display = "block";
  switch (parseInt(count)) {
    case 0:
      radioName = "WATAR FM";
      break;
    case 1:
      radioName = "WFUV Music";
      break;
    case 2:
      radioName = "JBC FM";
      break;
    case 3:
      radioName = "Beat FM";
      break;
    case 4:
      radioName = "نشامى اف ام";
      break;
    case 5:
      radioName = "MOOD FM 91.5";
      break;
    case 6:
      radioName = "حسنى اف ام";
      break;
    case 7:
      radioName = "MELODY FM";
      break;
    case 8:
      radioName = "مزاج اف ام";
      break;
    case 9:
      radioName = "نجوم إف إم";
      break;
    case 10:
      radioName = "اذاعة يقين - عمان الاردن";
      break;
  }

  localStorage.setItem("radioName", radioName);
  localStorage.setItem("Count", count);
  radioNameHTML.innerHTML = radioName;
}
function pauseAudio() {
  isPlayed = false;
  document.getElementById("sound").pause();
  document.querySelector(".play").style.display = "block";
  document.querySelector(".pause").style.display = "none";
}
function backAudio() {
  count -= 1;
  console.log(count);
  if (count >= 0 && count <= audios.length - 1) {
    document.getElementById("sound").src = audios[count];
    playAudio();
  } else if (count < 0) {
    count = audios.length - 1;
    document.getElementById("sound").src = audios[count];
    playAudio();
  }
}
function nextAudio() {
  count += 1;
  if (count >= 0 && count <= audios.length - 1) {
    document.getElementById("sound").src = audios[count];
    playAudio();
  } else if (count > audios.length - 1) {
    count = 0;
    document.getElementById("sound").src = audios[count];
    playAudio();
  }
}

if (localStorage.getItem("Count") !== null) {
  count = localStorage.getItem("Count");
}
if (localStorage.getItem("radioName") !== null) {
  radioNameHTML.innerHTML = localStorage.getItem("radioName");
}
