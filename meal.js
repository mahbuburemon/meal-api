document.getElementById('error-message').style.display = 'none'

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none'

    if (searchText == '') {
        //    please write something to display

    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText} `
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchresult(data.meals))
            .catch(error => displayError(error))
        // console.log(url)
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block'

}

const displaySearchresult = mealss => {
    const searchResult = document.getElementById('search-result')
    // searchResult.innerHTML = '';
    searchResult.textContent = '';

    if (mealss.length == 0) {
        // home work

    }



    mealss.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onClick = "loadMealDetails(${meal.idMeal}  )" class="card">
                <img src="${meal.strMealThumb}  " class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal} </h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div)

    });

}
const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals))
}
const displayDetails = meal => {
    console.log(meal[0])
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal[0].strMealThumb} " class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal[0].strMeal}</h5>
        <p class="card-text">${meal[0].strInstructions.slice(0, 200)}</p>
        <a href="${meal[0].strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}