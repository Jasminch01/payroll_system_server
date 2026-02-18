import app from "./app";

async function main() {
  try {
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (error) {}
}

main();
