import {fishCollection} from "./fishData.js"
import { getFish } from "./fishData.js"

export const getMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishArray = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0){
           holyFishArray.push(fish)
        }
    }
    // return console.log(holyFishArray); 
}


export const getSoldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFishArray = []
    for (const fish of fishCollection){
        if (fish.length % 5 === 0){
            soldierFishArray.push(fish)
        }
    }
    // return console.log(soldierFishArray); 
}



export const getUnworthy = () => {
    // Any fish not a multiple of 3 or 5
    let unworthyArrayThree = []
    let unworthyArray = []

    for (const fish of fishCollection){ 
        if (fish.length % 3 != 0 ) {
            unworthyArrayThree.push(fish)    
        }
    }
    
    for (const fish of unworthyArrayThree) {
        if (fish.length % 5 != 0){
            unworthyArray.push(fish)
        }
    }
    // return console.log(unworthyArray);
}

// for (const fish of fishCollection){
//     if (fish.length % 3 != 0 || % 5 != 0){

//     }
// }

// const soldiersArray = fishCollection.filter(fish => fish.length % 5 === 0)
// console.log(soldiersArray);

// const unworthyArray = fishCollection.filter(fish => {
//     return fish.length % 5 != 0 || fish.length % 3 != 0
// })


const result = getFish().filter(fish => fish.length % 3 != 0 && fish.length % 5 != 0)
console.log(result);




