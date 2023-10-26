const currentTime = () => {
  const date = new Date();

  const clock = document.getElementById("clock");

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let session = "AM";

  if (h > 12) {
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  clock.innerText = h + " : " + m + " : " + s + " " + session;

  setTimeout(() => {
    currentTime();
  }, 1000);
};

currentTime();
