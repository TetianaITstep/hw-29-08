// 8

function User(
  fullName,
  age,
  gender,
  email,
  country,
  salary,
  position,
  department
) {
  this.fullName = fullName;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.country = country;
  this.salary = salary;
  this.position = position;
  this.department = department;
}

const usersArray = [
  new User(
    "John Doe",
    25,
    "male",
    "johndoe@gmail.com",
    "USA",
    50000,
    "Developer",
    "IT"
  ),
  new User(
    "Jane Smith",
    29,
    "female",
    "janesmith@gmail.com",
    "Ukraine",
    55000,
    "Manager",
    "HR"
  ),
  new User(
    "Emily Davis",
    28,
    "female",
    "emilydavis@gmail.com",
    "Ukraine",
    60000,
    "Product Manager",
    "Product"
  ),
  new User(
    "David Brown",
    40,
    "male",
    "davidbrown@gmail.com",
    "Germany",
    65000,
    "Sales Manager",
    "Sales"
  ),
  new User(
    "James Taylor",
    32,
    "male",
    "jamestaylor@gmail.com",
    "Italy",
    55000,
    "Consultant",
    "Consulting"
  ),
  new User(
    "Liam Smith",
    31,
    "male",
    "liamsmith@ukr.net",
    "Ukraine",
    46000,
    "Software Engineer",
    "IT"
  ),
  new User(
    "Olga Petrenko",
    29,
    "female",
    "olgapetrenko@ukr.net",
    "Ukraine",
    47000,
    "UX Designer",
    "Creative"
  ),
  new User(
    "Viktor Ivanov",
    27,
    "male",
    "viktorivanov@ukr.net",
    "Ukraine",
    45000,
    "Business Development",
    "Business"
  ),
  new User(
    "Alexey Volkov",
    28,
    "male",
    "alexeyvolkov@ukr.net",
    "Ukraine",
    42000,
    "Product Designer",
    "Product"
  ),
  new User(
    "Sophia Martinez",
    29,
    "female",
    "sophiam@ukr.net",
    "Spain",
    53000,
    "HR Specialist",
    "HR"
  ),
];

const gmailUsers = [];
const youngWomen = [];

// 9
usersArray.forEach(function (user) {
  if (user.email.endsWith("@gmail.com")) {
    gmailUsers.push(user);
  }
});
// 10
usersArray.forEach(function (user) {
  if (user.country === "Ukraine" && user.age < 30 && user.gender === "female") {
    youngWomen.push(user);
  }
});

const emailAddresses = youngWomen.map(function (user) {
  return user.email;
});

// 11
const adultMenAges = usersArray
  .filter(function (user) {
    return user.gender === "male" && user.age >= 18;
  })
  .map(function (user) {
    return user.age;
  });

// 12
let oldestPerson = usersArray[0];

for (let i = 1; i < usersArray.length; i++) {
  if (usersArray[i].age > oldestPerson.age) {
    oldestPerson = usersArray[i];
  }
}

// console.log(oldestPerson);

// console.log(adultMenAges);

// console.log(gmailUsers);
// console.log(emailAddresses);
