
let userdata = []    



function store(){

    var per=document.getElementById("per").value;
    var age=document.getElementById("age").value;
    var email=document.getElementById("email").value;
    console.log(per.value)
    console.log(age.value)

    var Gender = document.querySelector('input[name="gender"]:checked').value;
    console.log( Gender);
    var course=document.getElementById("select").value
    console.log(course)
    console.log(email.value)

    const user = {per,age,Gender,select,email}
    userdata.push(user)

    const tableBody=document.getElementById("user-data")
    const row=document.createElement("tr")
    row.innerHTML = `
    <td>${per}</td>
    <td>${age}</td>
    <td>${Gender}</td>
    <td>${course}</td>
    <td>${email}</td>
    <td><button onclick="deleteUser(this)">Delete</button></td>
`;
tableBody.appendChild(row);

document.getElementById("per").value = "";
document.getElementById("age").value = "";
document.getElementById("male").checked = false;
document.getElementById("female").checked = false;
document.getElementById("select").value = "";
document.getElementById("email").value = "";

   
}

function deleteUser(btn)
{
    const row=btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    const index= userdata.findIndex((user) => user.name === row.cells[0].textContent);
    userdata.slice(index, 1);

}
