import { SAMPLE_DATA } from '../constants';

// DEVELOPERS NOTE:
// THIS IS WHERE OUR SIMULATED DATA WILL BE LIVING FOR THE API CALLS.
// WHEN WE WRITE THE API-BACKEND WE WILL REMOVE THIS CODE.
let foodRecipesData = SAMPLE_DATA;


export function getFoodRecipes(search=null, filter={}, okCallback, badCallback) {
    // Add your searching of food recipes here...
    okCallback(foodRecipesData);
}


export function getFoodRecipeDetail(id, okCallback, badCallback) {
    for (let i = 0; i < foodRecipesData.length; i++) {
        let foodDetail = foodRecipesData[i];
        if (foodDetail.id === parseInt(id)) {
            okCallback(foodDetail);
            return;
        }
    }
    badCallback({});
}
