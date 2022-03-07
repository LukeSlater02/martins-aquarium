import { locationToHTML } from "./location.js";
import { getLocation } from "./locationData.js";

export const locationList = () => {
    const contentElement = document.querySelector(".locationList")

    let location = getLocation()

    let locationHTMLRepresentation = "";
    // Loop over the array of tips
    for (const tip of location) {
        locationHTMLRepresentation += locationToHTML(tip);
    }
    // Set the dom equal to the variable containing the tips html representations
    contentElement.innerHTML += `
        ${locationHTMLRepresentation}
    `
}