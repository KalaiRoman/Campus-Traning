var logusers = [{
        username: "kalai",
        password: "kalai"
    },
    {
        username: "company",
        password: "company"
    },
    {
        username: "thala",
        password: "thala"
    },
    {
        username: "surya",
        password: "surya"
    },
    {
        username: "thalapathy",
        password: "thalapathy"
    }
];
var loguserdetails = [{
        name: "kalai",
        age: 24,
        place: "chennai",
        contact: 546372898

    },
    {
        name: "company",
        age: 24,
        place: "chennai",
        contact: 67728865456
    },
    {
        name: "thala",
        age: 32,
        place: "chennai",
        contact: 76859474657
    },
    {
        name: "surya",
        age: 30,
        place: "chennai",
        contact: 76654534536
    },
    {
        name: "thalapathy",
        age: 32,
        place: "chennai",
        contact: 5463778958
    }

];

var username = prompt("Enter the username:");
var password = prompt("Enter the password:");


function signin(user, pass) {
    for (var i = 0; i < logusers.length; i++) {
        if (user === logusers[i].username && pass === logusers[i].password) {
            return true;

        }

    }
    return false;
}

function checklogin(user, pass) {
    if (signin(user, pass)) {
        console.log(loguserdetails);
    } else {
        alert("Wrong username and password!!!!")
    }

}
checklogin(username, password);