let myLeads = [];
let inputEl = document.querySelector("#input-el");




let saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", function() {
    if (inputEl.value.length >0) {
    let pushEL = inputEl.value
    myLeads.push(pushEL);
    inputEl.value = "";
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
    console.log(listItems)
}
ulEl.innerHTML = listItems; 
}


