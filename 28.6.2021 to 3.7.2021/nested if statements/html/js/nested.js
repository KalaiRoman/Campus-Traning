// nested if statements


husbandage = prompt("Enter the husbandage:")
wifeage = prompt("Enter the wifeage:")
husbandsalary = prompt("Enter the husbandsalary:")
wifesalary = prompt("Enter the wifesalary:")

if (husbandage > 35) {
    if (wifeage > 35) {
        if (husbandsalary > 50000) {
            if (wifesalary > 45000) {
                alert("loan acess success in this bank")
            } else {
                alert("not acess loan this bank")
            }
            alert("husbandsalary is matching")
        } else {
            alert("husbandsalary not matching")
        }
        alert("wifeage is matching")
    } else {
        alert("not maching wife age")
    }
    alert("husbandeage is matching")
} else {
    alert("not maching husband age")
}