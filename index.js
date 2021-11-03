// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newerEmployee = Object.assign({}, employee);
    delete newerEmployee[key];
    return newerEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}