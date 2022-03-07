export const tipsToHTML = (tipsObj) => {
    return `<article class="tips-card">
        <h3 class="tips-name">${tipsObj.title}</h3>
        <p>${tipsObj.content}</p>
        </article>`
}