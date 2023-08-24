let myLeads = [];
let inputEl = document.querySelector("#input-el");
let saveBtn = document.querySelector("#save-btn");

let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromStorage)

saveBtn.addEventListener("click", function() {

    if (inputEl.value.length >0) {
    let pushEL = inputEl.value
    myLeads.push(pushEL);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    // console.log(localStorage.getItem("myLeads"));
    renderLeads();
}})

function renderLeads() {
let ulEl = document.querySelector("#ul-el");
let listItems = ""
for (let i =0; i < myLeads.length; i++) {
        listItems +=
        `
        <li>
            <a href = "${myLeads[i]}">${myLeads[i]}</a>
        </li>
        `
}
ulEl.innerHTML = listItems; 
}

