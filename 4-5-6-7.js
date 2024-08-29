// 4

const cinemaTicket = {
  filmTitle: "Blade Runner 2049",
  date: "08 - 30 - 2024",
  time: "9pm",
  seat: 35,
  hall: 9,
  cinemaName: "SmartCinema",
  isVip: true,
};
// 5
const project = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    lastName: "Zuckerberg",
    address: {
      country: "USA",
      city: "Los Angeles",
    },
  },
};
// 6
const projectCopy = JSON.parse(JSON.stringify(project));

projectCopy.ceo.firstName = "Alex";
console.log(project.ceo.firstName);
console.log(projectCopy.ceo.firstName);
// 7
function checkValue(obj, prop) {
  return prop in obj;
}

console.log(checkValue(project, "name"));
console.log(checkValue(project, "ceo"));
console.log(checkValue(project, "age"));
