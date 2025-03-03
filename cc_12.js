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


