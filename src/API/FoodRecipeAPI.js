import { SAMPLE_DATA } from '../constants';

// DEVELOPERS NOTE:
// THIS IS WHERE OUR SIMULATED DATA WILL BE LIVING FOR THE API CALLS.
// WHEN WE WRITE THE API-BACKEND WE WILL REMOVE THIS CODE.
let foodRecipesData = SAMPLE_DATA;


export function getFoodRecipes(search=null, filter={}, okCallback, badCallback) {
    okCallback(foodRecipesData);
}
