import { tipsToHTML } from "./tip.js"
import { getTips } from "./tipData.js"

export const tipsList = () => {
 
    // Get a reference to the location on the DOM you want to display the list of tips
    const contentElement = document.querySelector(".tipsList")
    // Get the tips array
    const tips = getTips()
    // Declare a variable to hold on to the tips HTML representation
    let tipsHTMLRepresentation = "";
    // Loop over the array of tips
    for (const tip of tips) {
        tipsHTMLRepresentation += tipsToHTML(tip);
    }
    // Set the dom equal to the variable containing the tips html representations
    contentElement.innerHTML += `
        ${tipsHTMLRepresentation}
    `
}