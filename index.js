// Retrieve the template data from the HTML.
var template = $('#handlebars').html();

// first letter uppercase
Handlebars.registerHelper('capitalize', function(str){
	// str is the argument passed to the helper when called
    str = str || '';
    return str.slice(0,1).toUpperCase() + str.slice(1);
});

// full sentence uppercase
Handlebars.registerHelper('uppercase', function(options) {

    // "this" is the context that existed when calling the helper.

    // The options object has a special function - fn. This is a
    // compiled version of the template that is contained between the opening and closing
    // blocks of this helper. To get a string, call fn with the context:

    return options.fn(this).toUpperCase();

  });

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = { 
		'name' : 'Arthas', 
		'title' : 'Lich King',
		"code": "up up down down left right left right b a select start",
		people: [ 
	      { firstName: 'Eric', lastName: 'Cartman' },
	      { firstName: 'Kenny', lastName: 'McCormick' },
	      { firstName: 'Illidan', lastName: 'Stormrage' }
	    ],
	    animals: [
	      {
	        name: "cow",
	        noise: "moooo"
	      },
	      {
	        name: "cat",
	        noise: "meow"
	      },
	      {
	        name: "fish",
	        noise: ""
	      },
	      {
	        name: "farmer",
	        noise: "Get off my property!"
	      }
	    ] 
	};

var html = templateScript(context);

// Insert the HTML code into the page
$(document.body).append(html);
