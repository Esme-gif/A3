// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

//container widget is created first as the main group
// two parameters are returned and they are used on the rest of the widets
var Menu = new MyToolkit.Container;

/*
// Implement a MyToolkit Button
//making a button use the Contanier parameters as arguments
var btn = new MyToolkit.Button(Menu[0], Menu[1]);
//customize text that you want to go on the button
btn.customText("Press");
//move the button wherever you want
btn.move(100,100);
//onclick shows the button is clicked event (add function parameter)
btn.onclick(function(e){
	console.log(e);
})
//add a function in order to print the state
btn.stateChanged(function(event){
	console.log(event)
})



// Implement a MyToolkit TextBox
//making a textBox use the Contanier parameters as arguments
var tBox = new MyToolkit.TextBox(Menu[0], Menu[1]);
//move the textnox wherever you want
tBox.move(90,10);
//shows event when new text is being added (add function parameter)
tBox.onTextChange(function(e){
	console.log(e);
})
//add a function as a parameter in order to print the state
tBox.stateChanged(function(event){
	console.log(event)
})


// Implement a MyToolkit CheckBox
var CHBox = new MyToolkit.Checkbox(Menu[0], Menu[1]);
//add a custom text to go with the checkBox
CHBox.customText("Human?");
//move the checkbox wherever you want
CHBox.move(100,60);
//shows event when checked (add function parameter)
CHBox.onchecked(function(e){
	console.log(e)
})
//add a function as a parameter in order to print the state
CHBox.stateChanged(function(event){
	console.log(event)
})


//implementing progress bar
//making a progress bar use the Contanier parameters as arguments
var PBar = new MyToolkit.ProgressBar(Menu[0], Menu[1]);
//set width of progress bar here
PBar.widthSet(300);
//set the increment 0-100
PBar.setIncrement(75);
//set this function as true and you can see in the console the increment
//whenever you increase it or decrease it
PBar.getValue(true);
//move the progress bar wherever (even outside the container)
PBar.move(50,50);
//event handler that shows when the increase or decrease of the increment value happen
PBar.onIncrement(function(e){
	console.log(e)
})
//add a function as a parameter in order to print the state
PBar.stateChanged(function(event){
	console.log(event)
})


*/

// Implement a MyToolkit Radio Button
var RButton = new MyToolkit.RadioB(Menu[0], Menu[1], [["dog",true],["cat",false]]);
RButton.move(100,155);


//Implement a MyToolkit Scroll Bar
//making a scroll bar use the Contanier parameters as arguments
var SBar = new MyToolkit.ScrollBar(Menu[0], Menu[1]);
//set height
SBar.heightSet(250);
//get the position of bar
SBar.getPosition(true);
//position your scroll bar
SBar.move(300,30);
//event handler that shows movement and direction
SBar.onMovement(function(e){
	console.log(e)
})
//add a function as a parameter in order to print the state
SBar.stateChanged(function(event){
	console.log(event)
})


