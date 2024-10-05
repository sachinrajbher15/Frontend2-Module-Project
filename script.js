let employees = [];
let idCounter = 1;

document.getElementById("addEmployeeBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    const messageDiv = document.getElementById("message");

    if (name === "" || profession === "" || age === "") {
        messageDiv.textContent = "Error: Please make sure all the fields are filled before adding an employee!";
        messageDiv.className = "error";
    } else {
        const employee = {
            id: idCounter++,
            name: name,
            profession: profession,
            age: parseInt(age)
        };
        employees.push(employee);
        displayEmployees();
        messageDiv.textContent = "Success: Employee added!";
        messageDiv.className = "success";
        clearForm();
    }
});

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = ""; // Clear previous list

    employees.forEach((employee, index) => {
        const row = document.createElement("tr"); // Create a new table row
        
        // Create table cells for each piece of data
        row.innerHTML = `
            <td>${index + 1}.</td>
            <td>Name: ${employee.name}</td>
            <td>Profession: ${employee.profession}</td>
            <td>Age: ${employee.age}</td>
            <td><button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete User</button></td>
        `;
        
        employeeList.appendChild(row); // Append the row to the table body
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
}