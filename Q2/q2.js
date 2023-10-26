const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

setInterval(() => {
  const body = document.getElementById("body");
  const color_no = Math.floor(Math.random() * 7 + 1);
  body.style.backgroundColor = colors[color_no];
}, 5000);
