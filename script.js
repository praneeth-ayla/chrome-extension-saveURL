let myLeads = ["hello","hellod","helloa","hellos"];
let inputEl = document.querySelector("#input-el");




let saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", function() {
    let pushEL = inputEl.value
    myLeads.push(pushEL);
    console.log(myLeads)
})

let ulEl = document.querySelector("#ul-el");

for (let i =0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>"+myLeads[i] + "</li>";
}
