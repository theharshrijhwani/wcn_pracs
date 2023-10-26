async function wait() {
  console.log("starting");
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  console.log("ending after 5 seconds");
}

wait();

console.log("not affected by blocking func");
