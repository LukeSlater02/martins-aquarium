/**
 *   FishList which renders individual fish objects as HTML
 */

 /** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to generated fish HTML representations
 4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 5. Finally set the dom equal to the variable containing the fish html representations
 **/


 import { getFish } from "./FishData.js"
 import { Fish } from "./fish.js"
 
 export const FishList = () => {
 
     // Get a reference to the location on the DOM you want to display the list of fish
     const contentElement = document.querySelector(".fishList")
     // Get the fish array
     const fishes = getFish()
     // Declare a variable to hold on to the fish HTML representation
     let fishHTMLRepresentation = "";
     // Loop over the array of fish
     for (const oneThingFromTheSea of fishes) {
         fishHTMLRepresentation += Fish(oneThingFromTheSea);
     }
     // Set the dom equal to the variable containing the fish html representations
     contentElement.innerHTML += `
         ${fishHTMLRepresentation}
     `
 }