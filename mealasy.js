const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data
    if (searchText == '') {
        //    please write something to display

    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText} `

        try {
            const res = await fetch(url);
            const data = await res.json();
            displaySearchresult(data.meals)
        }

        catch (eror) {
            console.log(error);

        }


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchresult(data.meals))
        // console.log(url)


    }

    searchField.value = '';
    // load data


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
const loadMealDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayDetails(data.meals))
}
const displayDetails = meal => {
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    mealDetails.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb} " class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}