// type stirng
var foo = "ceci est une string";

// type number
var bar = 5;

// type boolean
var bool = true;
var boolF = false;

// type undefined
var nomdemavariable;

// type null
var variable = null;

// type array
var tableau1 =["red","orange","blue"]

// type object
var objet = {
    "Nom" : "SPIEGEL",
    "Prénom" : "SPIEGEL",
    "Age" : "22",
}

// type fonction
var variabledetypefonction = function(){
    return('string retournée');
}

var header = document.getElementsByTagName ("header");

var selectionparclasse = document.getElementById ("main_contact");

// console.log(selectionparclasse);

var test = document.createElement("div");
document.body.appendChild(test);
test.classList.add('foo', 'bar');
