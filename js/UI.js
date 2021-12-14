class UI {
    // Display all the drink categories
    displayCategories() {
        const categoryList = cocktail.getCategories()
            .then(categories => {
                const catList = categories.categories.drinks;

                // Append a first option without value
                const firstOption = document.createElement('option');
                firstOption.textContent = '-- Select --';
                firstOption.value = '';
                document.querySelector('#search').appendChild(firstOption);

                // Append into the Select
                catList.forEach(category => {
                    const option = document.createElement('option');
                    option.textContent = category.strCategory;
                    option.value = category.strCategory.split(' ').join('_');
                    document.querySelector('#search').appendChild(option);
                })
            })
    }

             // Displays the cocktails wihout ingredient
        displayDrinks(drinks) {
            const resultsWrapper = document.querySelector('.results-wrapper');
            resultsWrapper.style.display = 'block';
    
             // Insert the results
             const resultsDiv = document.querySelector('#results');
    
             // Loop through drinks
             drinks.forEach(drink => {
                resultsDiv.innerHTML += `
                    <div class="col-md-4">
                        <div class="card my-3">
                            <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                            +
                            </button>
                            <img class="card-img-top" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                            <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                            <a data-target="#recipe" class="btn btn-success get-recipe" href="#" data-toggle="modal" data-id="${drink.idDrink}">Get Recipe</a>
                            </div>
                        </div>
                    </div>
                `;
             })
        }
            // Displays drinks with Ingredients
    displayDrinksWithIngredients(drinks) {
        
        // Show the Results
        const resultsWrapper = document.querySelector('.results-wrapper');
        resultsWrapper.style.display = 'block';

        // Insert the results
        const resultsDiv = document.querySelector('#results');

        drinks.forEach(drink => {
            resultsDiv.innerHTML += `
                <div class="col-md-6">
                    <div class="card my-3">
                        <button type="button" data-id="${drink.idDrink}" class="favorite-btn btn btn-outline-info">
                        +
                        </button>
                        <img class="card-img-top" src="${drink.strDrinkThumb}" alt="${drink.strDrink}">

                        <div class="card-body">
                            <h2 class="card-title text-center">${drink.strDrink}</h2>
                            <p class="card-text font-weight-bold">Instructions: </p>
                            <p class="card-text">
                            ${drink.strInstructions}
                            </p>
                            <p class="card-text">
                                <ul class="list-group">
                                    <li class="list-group-item alert alert-danger">Ingredients</li>
                                    ${this.displayIngredients(drink)}
                                </ul>
                            </p>
                            <p class="card-text font-weight-bold">Extra Information</p>
                            <p class="card-text">
                                <span class="badge badge-pill badge-success">
                                ${drink.strAlcoholic}
                                </span>
                                <span class="badge badge-pill badge-warning">
                                    Category: ${drink.strCategory}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                `;
        })
    }
}