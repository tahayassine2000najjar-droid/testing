const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${PORT} mode on port ${PORT}`);
});
