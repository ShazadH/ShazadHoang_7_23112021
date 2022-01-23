import { recipes } from "../recipes.js";

// console.log(recipes);
// console.log("hello");

// const recipesList = recipes;
// console.log(recipes);
// console.log("recipes");

// const recipesContainer = document.getElementById("recipes");
// const recipeCard = document.createElement("div");
// const recipeImage = document.createElement("div");
// const recipeinfos = document.createElement("div");
// const recipeTitleDiv = document.createElement("div");
// const recipeTitle = document.createElement("h1");
// const logoTime = document.createElement("i");
// const textTime = document.createElement("span");
// const recipeBody = document.createElement("div");
// const recipeIngredients = document.createElement("p");
// const recipeDescription = document.createElement("p");

// recipeCard.className = "recipes__card";
// recipeImage.className = "recipes__card__image";
// recipeinfos.className = "recipes__card__infos";
// recipeTitleDiv.className = "card__infos__titleDiv";
// recipeTitle.className = "titleDiv__title";
// logoTime.className = "titleDiv__logo";
// textTime.className = "titleDiv__text";
// recipeBody.className = "recipeBody";
// recipeIngredients.className = "recipeIngredients";
// recipeDescription.className = "recipeDescription";

// recipesContainer.appendChild(recipeCard);
// recipeCard.appendChild(recipeImage);
// recipeCard.appendChild(recipeinfos);
// recipeinfos.append(recipeTitleDiv);
// recipeTitleDiv.append(recipeTitle);
// recipeTitleDiv.append(logoTime);
// recipeTitleDiv.append(textTime);
// recipeinfos.append(recipeBody);
// recipeBody.append(recipeIngredients);
// recipeBody.append(recipeDescription);

// recipeTitle.innerText = recipes[0].name;
// textTime.innerText = recipes[0].time;

for (let i = 0; i < recipes.length; i++) {
    const recipesContainer = document.getElementById("recipes");
    const recipeCard = document.createElement("div");
    const recipeImage = document.createElement("div");
    const recipeinfos = document.createElement("div");
    const recipeTitleDiv = document.createElement("div");
    const recipeTitle = document.createElement("span");
    const logoTime = document.createElement("i");
    const textTime = document.createElement("span");
    const recipeBody = document.createElement("div");
    const recipeIngredients = document.createElement("div");
    const recipeDescription = document.createElement("div");

    recipeCard.className = "recipes__card";
    recipeImage.className = "recipes__card__image";
    recipeinfos.className = "recipes__card__infos";
    recipeTitleDiv.className = "card__infos__titleDiv";
    recipeTitle.className = "titleDiv__title";
    logoTime.className = "titleDiv__logo far fa-clock";
    textTime.className = "titleDiv__text";
    recipeBody.className = "recipeBody";
    recipeIngredients.className = "recipeIngredients";
    recipeDescription.className = "recipeDescription";

    recipesContainer.appendChild(recipeCard);
    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeinfos);
    recipeinfos.append(recipeTitleDiv);
    recipeTitleDiv.append(recipeTitle);
    recipeTitleDiv.append(logoTime);
    recipeTitleDiv.append(textTime);
    recipeinfos.append(recipeBody);
    recipeBody.append(recipeIngredients);
    recipeBody.append(recipeDescription);

    recipeTitle.innerText = recipes[i].name;
    textTime.innerText = `${recipes[i].time} min`;
    recipeDescription.innerText = recipes[i].description;

    console.log(recipes[i].ingredients.forEach((x) => console.log("hello")));
    recipes[i].ingredients.forEach((ingredient) => {
        const unit = (unit) => {
            switch (unit) {
                case "cuillères à soupe":
                    return " cuillères";
                    break;
                case "grammes":
                    return "g";
                    break;
                default:
                    return unit;
            }
        };
        // console.log(ingredient);
        const recipeItem = document.createElement("p");
        recipeIngredients.append(recipeItem);
        recipeItem.innerText = `${ingredient.ingredient}${
            ingredient.quantity ? `: ${ingredient.quantity}` : ""
        }${ingredient?.unit ? unit(ingredient.unit) : ""}`;
    });

    // console.log(recipes[0].ingredients.ingredient);
}

// const displayAllRecipe = () => {};

// console.log(recipesList);
