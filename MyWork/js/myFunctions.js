function JSONDropDown() {
    document.getElementById("JSONSelection").style.display = "block";
    console.log("JSON dropdown hovered");
}

function formDropDown() {
    document.getElementById("formSelection").style.display = "block";
    console.log("form dropdown hovered");
}

function closeAll() {
    document.getElementById("JSONSelection").style.display = "none";
    document.getElementById("formSelection").style.display = "none";
    console.log("close all");
}

function hoverOver1(a) {
    document.getElementById(a).style.backgroundColor = "red";
    var asterix = document.createElement("span");
    var node = document.createTextNode("*");
    asterix.appendChild(node);
    document.getElementById(a).appendChild(asterix);
}

function stopHover(b) {
    var spans = document.getElementsByTagName("span");
    document.getElementById(b).style.backgroundColor = "white";
    document.getElementById(b).removeChild(spans[0]);
}

function searchName() {
    deleteOld();
    var trainers = data.members;
    for(i=0 ; i < trainers.length ; i++) {
        if (trainers[i].name == document.getElementById("name").value) {
            createTrainerTable(trainers[i]);
        }
    }
}

function searchSkill() {
    deleteOld();
    var trainers = data.members;
    for(i=0 ; i < trainers.length ; i++) {
        var s = trainers[i].skills;
        for (j=0 ; j < s.length ; j++) {
            if (s[j] == document.getElementById("skill").value) {
                createTrainerTable(trainers[i]);
            }
        }
    }
}

function createTrainerTable(trainer) {
    var newPar = document.createElement("p");
    var text = document.createTextNode("Name: " + trainer.name + "Age: " + trainer.age + "Secret Identity: " + trainer.secretIdentity + "Skill 1: " + trainer.skills[0] + "Skill 2: " + trainer.skills[1] + "Skill 3: " + trainer.skills[2]);
    newPar.classname = "results";

    newPar.appendChild(text);

    var element = document.getElementById("resultBox");
    element.appendChild(newPar);
}

function deleteOld() {
    var element = document.getElementsByTagName("p");
    console.log(element);
    while (element.length>2){
        document.getElementById("resultBox").removeChild(element[2]);
    }
}

function validateForm() {
    var allGood = true;
    if (!checkName()) {
        allGood = false;
    }
    if (!checkDate()) {
        allGood = false;
    }
    if (!checkAddress()) {
        allGood = false;
    }
    if (!checkPostCode()) {
        allGood = false;
    }
    if (!checkEmail()) {
        allGood = false;
    }
    if (allGood) {
        save();
        window.alert("Data Saved");
    }
}

function checkName() {
    console.log("IM HERE")
    var name = document.getElementById('name').value; 
    var checkName = /^[a-zA-Z]+$/;
    if(name == "") {
        console.log("A Field Is Empty");
        window.alert("The Name Is Empty");
        return false; 
    }
    if(!(name.match(checkName))) {
        console.log("Invalid Input");
        window.alert("Invalid Input on name");
        return false; 
    }
    console.log("All is cool");
    return true;
}

function checkDate() {
    var name = document.getElementById('DoB').value; 
    var checkName = /^(\d{1,2}\/\d{1,2}\/\d{4})+$/;
    if(name == "") {
        console.log("A Field Is Empty");
        window.alert("The Date Is Empty");
        return false; 
    }
    if(!(name.match(checkName))) {
       console.log("Invalid Input");
       window.alert("Invalid Input on date");
       return false; 
    }
    console.log("All is cool");
    return true;
}

function checkAddress() {
    var name = document.getElementById('address').value; 
    var checkName = /^([a-zA-Z0-9])+$/;
    if(name == "") {
        console.log("A Field Is Empty");
        window.alert("The address Is Empty");
        return false; 
    }
    if(!(name.match(checkName))) {
        console.log("Invalid Input");
        window.alert("Invalid Input on address");
        return false; 
    }
    console.log("All is cool");
    return true;
}

function checkPostCode() {
    var name = document.getElementById('postCode').value; 
    var checkName = /^([a-zA-Z0-9].{0,10})+$/;
    if(name == "") {
        console.log("A Field Is Empty");
        window.alert("The Post Code Is Empty");
        return false; 
    }
    if(!(name.match(checkName))) {
        console.log("Invalid Input");
        window.alert("Invalid Input on Post Code");
        return false; 
    }
    console.log("All is cool");
    return true;
}

function checkEmail() {
    var name = document.getElementById('email').value; 
    var checkName = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})+$/;
    if(name == "") {
        console.log("A Field Is Empty");
        window.alert("The Email Is Empty");
        return false; 
    }
    if(!(name.match(checkName))) {
        console.log("Invalid Input");
        window.alert("Invalid Input on Email");
        return false; 
    }
    console.log("All is cool");
    return true;
}

function save() {
    localStorage.setItem("name",document.getElementById('name').value);
    localStorage.setItem("DoB",document.getElementById('DoB').value);
    localStorage.setItem("address",document.getElementById('address').value);
    localStorage.setItem("postCode",document.getElementById('postCode').value);
    localStorage.setItem("email",document.getElementById('email').value);
}

function loading() {
    document.getElementById("nameOut").value = localStorage.getItem("name");
    document.getElementById("DoBOut").value = localStorage.getItem("DoB");
    document.getElementById("addressOut").value = localStorage.getItem("address");
    document.getElementById("postcodeOut").value = localStorage.getItem("postCode");
    document.getElementById("emailOut").value = localStorage.getItem("email");
}