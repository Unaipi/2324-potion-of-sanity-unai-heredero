import {
    getData
} from "./service/service.js";
import {
    Ingredients
} from "./classes/ingredients.js";
import {
    Cauldron
} from "./classes/cauldron.js"

const execute = async () => {
    try {
        const data = await getData();

        //creamos ingredientes

        const ingredients = Ingredients.load(data);

        showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);

        const potion1 = cauldron.createPotion("Bear Claws", "Bee",);
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");        
        showPotion(potion4);


    } catch (error) {
        //ERRORRRRRR
        console.log(error.message)
    }
}

execute();

const showIngredients = (ingredients) => {
    const ingredientes = ingredients.ingredients;

    ingredientes.forEach(element => {
        console.log(element.name);
        console.log(element.effects);
        console.log("-----------------------------------------------------------")

    });

}

const showPotion = (potion) => {
    console.log("------------------------------------")
    console.log(potion)
}