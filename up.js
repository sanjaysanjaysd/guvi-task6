class up {
    constructor(
      name = "Customer",
      distance = 1,
      price = 30,
      driver = "ubercabdriname",
      vehicleno = "TN09M098"
    ) {
      this.name = name;
      this.distance = distance;
      this.price = price * distance;
      this.driver = driver;
      this.vehicleno = vehicleno;
    }
  }
  const up1 = new up();
  console.log(up1);