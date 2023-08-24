let myLeads = [];
const inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#save-btn");
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");

function renderLeads(leads) {
    let listItems = ""

    for (let i =0; i < leads.length; i++) {
        listItems +=
            `
            <li>
                <a href = "${leads[i]}">${leads[i]}</a>
            </li>
            `
    }
    ulEl.innerHTML = listItems; 
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);

})

if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    renderLeads(myLeads);
}

saveBtn.addEventListener("click", function() {

    if (inputEl.value.length >0) {
    let pushEL = inputEl.value
    myLeads.push(pushEL);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    // console.log(localStorage.getItem("myLeads"));
    renderLeads(myLeads);
}})

