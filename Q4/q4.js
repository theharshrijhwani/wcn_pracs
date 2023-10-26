alert("enter something");

function cookieHandle() {
  const input = document.getElementById("input");
  document.cookie = input.value;

  document.write("cookie set to: ", input.value);
}
