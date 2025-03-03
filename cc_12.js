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
const metricCards = document.querySelectorAll(`.metric-card`); //selecting all metric cards
const metricCardsArray = Array.from(metricCards); //converting NodeList to an array
metricCardsArray.forEach((card) => {
    card.innerText += ` - Updated`; //"- Updated"
    card.style.backgroundColor = `lightblue`; //changing background color
});