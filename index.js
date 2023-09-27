// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, strings) {
  const match = drivers.filter(
    (item) => item.toLowerCase() === strings.toLowerCase()
  );

  return match ? match : undefined;
}

function fuzzyMatch(drivers, strings) {
  const match = drivers.filter((item) => item.startsWith(strings));

  return match;
}

const driverss = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(drivers, strings) {
  const match = drivers.filter((item) => item.name === strings);

  return match;
}
