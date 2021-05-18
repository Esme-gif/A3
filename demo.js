// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

//container widget is created first as the main group
// two parameters are returned and they are used on the rest of the widets
var Menu = new MyToolkit.Container;



// Implement a MyToolkit TextBox
//making a textBox use the Contanier parameters as arguments
/**
 * @param  {} Menu[0]
 * @param  {} Menu[1]
 */
var tBox = new MyToolkit.TextBox(Menu[0], Menu[1]);
//move the textnox wherever you want
/**
 * @param  {} 90
 * @param  {} 10
 */
tBox.move(90,10);
//shows event when new text is being added (add function parameter)
/**
 * @param  {} function(e
 */
tBox.onTextChange(function(e){
	console.log(e);
})
//add a function as a parameter in order to print the state
/**
 * @param  {} function(event
 */
tBox.stateChanged(function(event){
	console.log(event)
})


// Implement a MyToolkit CheckBox
/**
 * @param  {} Menu[0]
 * @param  {} Menu[1]
 */
var CHBox = new MyToolkit.Checkbox(Menu[0], Menu[1]);
//add a custom text to go with the checkBox
/**
 * @param  {} "Human?"
 */
CHBox.customText("Human?");
//move the checkbox wherever you want
/**
 * @param  {} 100
 * @param  {} 60
 */
CHBox.move(100,60);
//shows event when checked (add function parameter)
/**
 * @param  {} function(e
 */
CHBox.onchecked(function(e){
	console.log(e)
})
//add a function as a parameter in order to print the state
/**
 * @param  {} function(event
 */
CHBox.stateChanged(function(event){
	console.log(event)
})


// Implement a MyToolkit Button
//making a button use the Contanier parameters as arguments
/**
 * @param  {} Menu[0]
 * @param  {} Menu[1]
 */
var btn = new MyToolkit.Button(Menu[0], Menu[1]);
//customize text that you want to go on the button
/**
 * @param  {} "Press"
 */
btn.customText("Press");
//move the button wherever you want
/**
 * @param  {} 100
 * @param  {} 100
 */
btn.move(100,100);
//onclick shows the button is clicked event (add function parameter)
/**
 * @param  {} function(e
 */
btn.onclick(function(e){
	console.log(e);
})
//add a function in order to print the state
/**
 * @param  {} function(event
 */
btn.stateChanged(function(event){
	console.log(event)
})


//implementing progress bar
//making a progress bar use the Contanier parameters as arguments
/**
 * @param  {} Menu[0]
 * @param  {} Menu[1]
 */
var PBar = new MyToolkit.ProgressBar(Menu[0], Menu[1]);
//set width of progress bar here
/**
 * @param  {} 300
 */
PBar.widthSet(300);
//set the increment 0-100
/**
 * @param  {} 75
 */
PBar.setIncrement(75);
//set this function as true and you can see in the console the increment
//whenever you increase it or decrease it
/**
 * @param  {} true
 */
PBar.getValue(true);
//move the progress bar wherever (even outside the container)
/**
 * @param  {} 40
 * @param  {} 160
 */
PBar.move(40,160);
//event handler that shows when the increase or decrease of the increment value happen
/**
 * @param  {} function(e
 */
PBar.onIncrement(function(e){
	console.log(e)
})
//add a function as a parameter in order to print the state
/**
 * @param  {} function(event
 */
PBar.stateChanged(function(event){
	console.log(event)
})


//Implement a MyToolkit Scroll Bar
//making a scroll bar use the Contanier parameters as arguments
/**
 * @param  {} Menu[0]
 * @param  {} Menu[1]
 */
var SBar = new MyToolkit.ScrollBar(Menu[0], Menu[1]);
//set height
/**
 * @param  {} 250
 */
SBar.heightSet(250);
//get the position of bar
/**
 * @param  {} true
 */
SBar.getPosition(true);
//position your scroll bar
/**
 * @param  {} 420
 * @param  {} 30
 */
SBar.move(420,30);
//event handler that shows movement and direction
/**
 * @param  {} function(e
 */
SBar.onMovement(function(e){
	console.log(e)
})
//add a function as a parameter in order to print the state
/**
 * @param  {} function(event
 */
SBar.stateChanged(function(event){
	console.log(event)
})




// Implement a MyToolkit Radio Button
var RButton = new MyToolkit.RadioB(Menu[0], Menu[1], [["dog",true],["cat",false]]);
RButton.move(100,155);




