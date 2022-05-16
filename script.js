function addNewSKILLField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let skillOb=document.getElementById("skill");
    let skillAddButton=document.getElementById("skillAddButton");
    skillOb.insertBefore(newNode,skillAddButton);
}
function addNewAQField() {
    let newNode=document.createElement('textarea');
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter Here");

    let aqOb=document.getElementById("aq");
    let aqAddButton=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode,aqAddButton);
}

function generateCV() {
    console.log("generating CV");
    let nameField = document.getElementById("nameField").value;
    let nameT1= document.getElementById("nameT1");
    nameT1.innerHTML = nameField
    document.getElementById("nameT2").innerHTML=nameField

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("webT").innerHTML=document.getElementById("webField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    
    let skills=document.getElementsByClassName("skillField");

    let str="";

    for(let e of skills) {
        str= str + `<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML=str;

    
    let aqs=document.getElementsByClassName("aqField");

    let str1="";

    for(let e of aqs) {
        str1+=`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    document.getElementById("cv-form").style.display="none"
    document.getElementById("cv-template").style.display="block"
}
function printCV() {
    window.print();

}