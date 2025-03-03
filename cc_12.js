//Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboardId = document.getElementById(`dashboard`); //id
const dashboardQuery = document.querySelector(`#dashboard`); //query selector
const revenueCard = document.createElement(`div`); //creating a div element
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
`; //populating card w/ "Revenue" and "$0"
dashboardId.appendChild(revenueCard);

//Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

//Your dashboard now includes multiple metric cards (e.g., Revenue, Profit, Expenses)
const profitCard = document.createElement(`div`);
profitCard.setAttribute("class", "metric-card");
profitCard.setAttribute("id", "profitCard");
profitCard.innerHTML = `
    <h3>Profit</h3>
    <p>$0</p>
`; //populating card w/ "Profit" and "$0"
dashboardId.appendChild(profitCard);

const expensesCard = document.createElement(`div`);
expensesCard.setAttribute("class", "metric-card");
expensesCard.setAttribute("id", "expensesCard");
expensesCard.innerHTML = `
    <h3>Expenses</h3>
    <p>$0</p>
`; //populating card w/ "Expenses" and "$0"
dashboardId.appendChild(expensesCard);

const metricCards = document.querySelectorAll(`.metric-card`); //selecting all metric cards
const metricCardsArray = Array.from(metricCards); //converting NodeList to an array
metricCardsArray.forEach((card) => {
    card.innerText += ` - Updated`; //"- Updated"
    card.style.backgroundColor = `lightblue`; //changing background color
});

//Task 3: Dynamic Inventory Management – Adding and Removing Items
function addInventoryItem(productName) {
    const inventoryList = document.getElementById(`inventoryList`);
    const newProductItem = document.createElement(`li`);
    newProductItem.setAttribute("class", "product-item");
    newProductItem.setAttribute("data-product", productName);
    newProductItem.innerText = productName;
    newProductItem.addEventListener(`click`, () => {
        removeProductItem(newProductItem); //adding a click event and removing upon clicking
    });
    inventoryList.appendChild(newProductItem); //adding clicked item
};
function removeProductItem(productItem) {
    const inventoryList = document.getElementById(`inventoryList`);
    inventoryList.removeChild(productItem);
}; //removing clicked item
