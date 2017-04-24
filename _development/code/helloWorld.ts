class Greeter {
    constructor(public greeting: string) {console.log(this.greeting); }
    greet() {
        console.log(this.greeting);
    }
};

var greeter = new Greeter("The TypeScript has compiled");
    