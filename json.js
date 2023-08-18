fetch("./competitors.json")
  .then((res) => res.json())
  .then((competitor) => {
    // Loop through an array in the JSON data
    competitor.forEach((competitor) => {
      console.log(displayJSON(competitor));
      console.log(weightClass(competitor)); // Log each person in the array to the console
      const markup = `<li>${displayJSON(competitor)}</li>
                      <li>${weightClass(competitor)}</li>
                      <br>`;
      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function weightClass(competitor) {
  switch (competitor.weight) {
    default:
      return `${competitor.firstName} cannot fight.`;
    case "125":
      return `${competitor.firstName} will fight in the Flyweight class.`;
      break;
    case "135":
      return `${competitor.firstName} will fight in the Bantamweight class.`;
      break;
    case "145":
      return `${competitor.firstName} will fight in the Featherweight class.`;
      break;
    case "155":
      return `${competitor.firstName} will fight in the Lightweight class.`;
      break;
    case "170":
      return `${competitor.firstName} will fight in the Welterweight class.`;
      break;
    case "185":
      return `${competitor.firstName} will fight in the Middleweight class.`;
      break;
    case "205":
      return `${competitor.firstName} will fight in the Light Heavyweight class.`;
      break;
    case "265":
      return `${competitor.firstName} will fight in the Heavyweight class.`;
      break;
  }
}

function getFullName(competitor) {
  fullName = `${competitor.firstName} ${competitor.lastName}`;
  return fullName;
}

function getAge(competitor) {
  age = new Date().getFullYear() - new Date(competitor.birthdate).getFullYear();
  return age;
}

function getGender(competitor) {
  return competitor.gender;
}

function getReach(competitor) {
  return competitor.reach;
}

function getWeight(competitor) {
  return competitor.weight;
}

function displayJSON(competitor) {
  return `${getFullName(competitor)} is ${getAge(
    competitor
  )} years old, ${getWeight(competitor)}lbs and has a reach of ${getReach(
    competitor
  )}`;
}

html = `<h1>test</h1>
`;

fetch("./competitors.json")
  .then((res) => res.json())
  .then((competitor) => {
    document.body.innerHTML;
  });
