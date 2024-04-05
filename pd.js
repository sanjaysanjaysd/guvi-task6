class details {
    constructor(
      name = "Sanjay T",
      age = 22,
      address = "4/96, indranagar, kappalur, thirumangalam, madurai - 625008",
      degree = "B.E CSE",
      Skills = "C,HTML,CSS,JavaScript",
      hobby = "Drawing,playing games,learning new Technology",
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.degree = degree;
      this.Skills = Skills;
      this.hobby = hobby;
    }
  }
  const details1 = new details();
  console.log(details1);