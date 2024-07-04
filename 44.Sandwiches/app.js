function make_sandwhich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Making a sandwhich with:${items.join(', ')}.');
}
make_sandwhich("ham", "cheese");
make_sandwhich("turkey", "lettuce", "tomato", "Ketchup");
make_sandwhich("avocado", "sprouts", "mustard", "mayo");
