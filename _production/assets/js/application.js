// THIS IS THE JAVASCRIPT TEMPLATE

(function(window) {

    application = function(caller) {

        /**
         * Holds the instance of the class that called this 
         * 
         * @property currentSection
         * @type {class}
         */
        this.caller = caller;

        /**
         * Initialize the class 
         *
         * @private
         * @method init
         */

        this.init();

    }

    application.prototype.init = function() {

        //Get the hright of the window
        console.log("Class has been created: " + this.caller);

    };

})(window);
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
var greeter = new Greeter("The TypeScript has compiled inside");
