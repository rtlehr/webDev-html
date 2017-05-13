var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
        console.log(this.greeting);
    }
    Greeter.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Greeter;
}());
;
var greeter = new Greeter("The TypeScript has compiled");
