const hrHand = document.querySelector(".hrs");
const minHand = document.querySelector(".mins");
const secHand = document.querySelector(".secs");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hr = currentDate.getHours();
  const min = currentDate.getMinutes();
  const sec = currentDate.getSeconds();
  console.log(hr, min, sec);
  //   convert hands to degrees
  const hrDeg = (hr / 12) * 360;
  const minDeg = (min / 60) * 360;
  const secDeg = (sec / 60) * 360;
  hrHand.style.transform = `rotate(${hrDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  secHand.style.transform = `rotate(${secDeg}deg)`;
}

updateClock();
// or
// setInterval(updateClock, 1000)
// but comment out line 21(updateClock()) and 7(setTimeout(updateClock, 1000))

// end 19oct2023thur 16:20 54:25/-5:44:24
