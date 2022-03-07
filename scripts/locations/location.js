export const locationToHTML = (locationsObj) => {
    return `<article class="location-card">
        <h3>${locationsObj.name}</h3>
        <p>${locationsObj.locationInfo}</p>
        <p>${locationsObj.caughtFish}</p>
        </article>`
}