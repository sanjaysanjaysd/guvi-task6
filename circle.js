class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
    getRadius() {
      console.log(`Radius  : ${this.radius}`);
    }
    setRadius(r) {
      if (typeof r === "number") {
        console.log(`radius: ${(this.radius = r)}`);
      }
    }
    get colour() {
      console.log(`color: ${this.color}`);
    }
    set colour(clr) {
      if (typeof clr === "string") {
        console.log(`color: ${(this.color = clr)}`);
      }
    }
    toString() {
      console.log(`Circle [Radius = ${this.radius} , Color = ${this.color}] `);
    }
    get getArea() {
      let r = this.radius;
      return ` Area of a circle is : ${Number(Math.PI * r * r)}`;
    }
    get getCircumference() {
      let r = this.radius;
      return `Circumference of a circle is : ${Number(2 * Math.PI * r)}`;
    }
  }
  
  const circle1 = new Circle(3.2, "white");
  console.log(circle1);
  circle1.getRadius();
  circle1.setRadius(10);
  circle1.getRadius();
  
  circle1.colour;
  circle1.colour = "black";
  circle1.colour;
  circle1.toString();
  
  let area = circle1.getArea;
  console.log(area);
  
  let cirumference = circle1.getCircumference;
  console.log(cirumference);