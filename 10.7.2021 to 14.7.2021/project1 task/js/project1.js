let a = [];

// click addbutton

$("#buttons").on("click", () => {
    let value = $("#inputs").val();

    if (value != "") {
        a.push(value);
        $("#inputs").val("");
    }
    setData();
});


// keypress 

$("#inputs").on("keypress", (event) => {
    // console.log(event);
    if (event.keyCode === 13) {
        let value = $("#inputs").val();

        if (value != "") {
            a.push(value);
            $("#inputs").val("");
        }
        setData();
    }
});


function setData() {

    var store = document.getElementById("topbar-content");
    let listname = "";
    a.forEach((v, i) => {
        // console.log(v, i);

        // var listname = document.createElement("div");
        // listname.style = "border: 1px solid lightgray;padding:15px;margin:10px;margin-top:10px;";
        listname += `
        <div class="d-flex flex-row justify-content-between align-items-center" style="border: 1px solid lightgray;padding:15px;margin:10px;margin-top:10px;">
           
        <span>${i+1}. ${v}</span>
        <button class="btn btn-danger"  onclick="removed(${i})"><span">X</span></button>  
   
            
            </div>`;
        // oldchild = store.childNodes[0];
        // store.replaceChild(listname, oldchild);

    });
    store.innerHTML = listname

}


// remove all datasin array

$("#closeicon").on("click", () => {
    a = [];
    setData();
});



// remove one by one array list

function removed(i) {

    a.splice(i, 1);
    setData();

}


var body = document.getElementById("colorschoice");
var colorsed = document.querySelector("#colorsid");
colorsed.addEventListener("input", () => {
    body.style.background = colorsed.value;
});



$(document).ready(function() {

    $("#show").click(() => {
        $("#colorsid").show(2000);
    })

});

$(document).ready(function() {

    $("#hide").click(() => {
        $("#colorsid").hide(2000);
    })

});


$(document).ready(function() {

    $("#show1").click(() => {
        $(".container").show(2000);
    })

});

$(document).ready(function() {

    $("#hide1").click(() => {
        $(".container").hide(2000);
    })

});