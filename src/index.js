import { recipes } from "../recipes.js";

let searchValues = {
    searchBarValue: "",
    ingredientTags: [],
};

const searchBarInput = document.getElementById("searchBarInput");
const searchButton = document.getElementById("searchButton");

searchBarInput.addEventListener("change", (e) => {
    searchValues.searchBarValue = e.target.value;
    console.log(searchValues);
});

// searchButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     // console.log(searchBarValue);
// });

const searchInArray = (recipes) => {};

// function to display recipes
const displayRecipes = (recipes) => {
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

        recipes[i].ingredients.forEach((ingredient) => {
            const recipeItem = document.createElement("p");
            recipeIngredients.append(recipeItem);
            recipeItem.innerText = `${ingredient.ingredient}${
                ingredient.quantity ? `: ${ingredient.quantity}` : ""
            }${ingredient?.unit ? ingredient.unit : ""}`;
        });
    }
};

displayRecipes(recipes);
