import { FishList } from "./fish/fishList.js";
import {tipsList} from "./tips/tipList.js"
import {locationList} from "./locations/locationList.js"
import {getMostHolyFish, getSoldierFish, getUnworthy}from "./fish/filter-by-length.js"

FishList()
tipsList()
locationList()

getMostHolyFish() + getSoldierFish() + getUnworthy()