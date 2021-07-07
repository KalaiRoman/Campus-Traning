var usercheck = [{
        username: "kalai",
        password: "kalai"

    },
    {
        username: "thala",
        password: "thala"
    },
    {
        username: "roman",
        password: "roman"
    },
    {
        username: "nazriya",
        password: "nazriya"

    }
];

var userdetails = [{
        username: "kalaisurya",
        conatct: 8778377119,
        work: "fresher",
        place: "chennai"
    },
    {
        username: "thala",
        conatct: 89763543452,
        work: "actor",
        place: "chennai"
    },
    {
        username: "roman",
        conatct: 9874335261,
        work: "wwe match hero",
        place: "Landon"
    },
    {
        username: "nazriya",
        conatct: 678990876565,
        work: "actors",
        place: "kerla"
    }
];

var username = prompt("Enter the username:");
var password = prompt("Enter the password:");

function loginuser(user, pass) {
    if (user === usercheck[0].username && pass === usercheck[0].password) {
        console.log(userdetails[0]);
    } else if (user === usercheck[1].username && pass === usercheck[1].password) {
        console.log(userdetails[1]);
    } else if (user === usercheck[2].username && pass === usercheck[2].password) {
        console.log(userdetails[2]);
    } else if (user === usercheck[3].username && pass == usercheck[3].password) {
        console.log(userdetails[3]);
    } else {
        alert("Sorry wrong Username and password!!!!!!")
    }
}
loginuser(username, password);