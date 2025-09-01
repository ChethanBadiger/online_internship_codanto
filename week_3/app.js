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
                            <td class="lg:p-3 p-1.5"><img class="rounded-md w-36" src="${drink.strDrinkThumb}" /></td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strDrink}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strCategory}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strAlcoholic}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strGlass}</td>
                        </tr>`;
            drink_table.innerHTML += row;
        });
        
    } catch (error) {
        console.error("bro there is a error in loading the table: ",error);
        
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
                            <td class="lg:p-3 p-1.5"><img class="rounded-md w-36" src="${drink.strDrinkThumb}" /></td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strDrink}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strCategory}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strAlcoholic}</td>
                            <td class="lg:p-3 p-1.5 text-center lg:text-lg text-sm">${drink.strGlass}</td>
                        </tr>`;
            drink_table.innerHTML = row;
        });
    } catch (error) {
        console.log("bro there is a error in random drink:", error)
    }
}

async function filter(category) {
    try {
        let rows = document.querySelectorAll('#drinks_table tbody tr');
        let count = 0;

        rows.forEach(row => {
            let row_category = row.cells[2].textContent;

            if(category === row_category){
                row.style.display = '';
                count += 1;
            }
            else{
                 row.style.display = 'none';
            }
        });
        
        let lenghtOfDrinks = count;
        document.getElementById('noOfData').textContent = `Showing ${lenghtOfDrinks} results`;
    } catch (error) {

        console.error("Bro there is a error in filtering:", error);
    }
}