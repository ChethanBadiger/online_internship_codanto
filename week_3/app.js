async function loadTable(){
    let filter = document.getElementById('filter').value;
    
    try {
        let url = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filter}`);
        let response = await url.json();
        
        let lenghtOfDrinks = response.drinks.length;
        document.getElementById('noOfData').textContent = `Showing ${lenghtOfDrinks} results`;

        let drink_table = document.querySelector('#drinks_table tbody');
        drink_table.innerHTML = '';
        response.drinks.forEach(drink => {
            let row = `<tr class="border-y-2 hover:scale-110 transition duration-200 ease-in-out">
                            <td class="lg:p-3 p-1.5"><img class="rounded-md lg:w-36 w-20" src="${drink.strDrinkThumb}" /></td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strDrink}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strCategory}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strAlcoholic}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strGlass}</td>
                        </tr>`;
            drink_table.innerHTML += row;
        });
        
    } catch (error) {
        console.error("bro there is a error: ",error);
        
    }
}

async function random_drink() {
    try {
        let url = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        let response = await url.json();

        let drink_table = document.querySelector('#drinks_table tbody');
        drink_table.innerHTML = '';
        response.drinks.forEach(drink => {
            let row = `<tr class="border-y-2 hover:scale-110 transition duration-200 ease-in-out">
                            <td class="p-3"><img class="rounded-md" src="${drink.strDrinkThumb}" width="150" /></td>
                            <td class="p-3 text-center text-lg">${drink.strDrink}</td>
                            <td class="p-3 text-center text-lg">${drink.strCategory}</td>
                            <td class="p-3 text-center text-lg">${drink.strAlcoholic}</td>
                            <td class="p-3 text-center text-lg">${drink.strGlass}</td>
                        </tr>`;
            drink_table.innerHTML = row;
        });
    } catch (error) {
        console.log("bro there is a error:", error)
    }
}