const express = require("express");
const app = express();
app.use(express.json());

console.log(Date.now()); //Unix Epoch Time seconds since Jan 1st 1970
console.log(new Date()); // UTC

//dårlig langsom version
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

app.get("/month", (req, res) => {
  let currentMonth = months[new Date().getMonth()];

  res.send({ data: currentMonth });
});

//bedre version
app.get("/month/v1", (req, res) => {
  const currentMonth = new Date().toLocaleDateString("en-uk", {
    month: "long",
  });
  res.send({ data: currentMonth });
});

app.get("/day/v2", (req, res) => {
  const currentDay = new Date().toLocaleDateString("en-uk", {
    weekday: "long",
  });
  res.send({ data: currentDay });
});

//amerikanere starter ugen om søndagen?
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
app.get("/day/v1", (req, res) => {
  let currentDay = days[new Date().getDay()];

  res.send({ data: currentDay });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`, PORT);
});
