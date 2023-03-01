const duck = {
    name: "Maurice",
    color: "white",
    greeting() {
      console.log(`Quaaaack! My name is ${this.name}`);
    },
  };
  
  Reflect.has(duck, "color");
  // true
  Reflect.has(duck, "haircut");
  // false  