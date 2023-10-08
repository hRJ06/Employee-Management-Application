import { apiConnector } from "../apiConnector";

const ALL_EMPLOYEE = 'http://localhost:4000/api/v1/employee/getEmployee'
const SAVE_EMPLOYEE = 'http://localhost:4000/api/v1/employee/save'
const DELETE_EMPLOYEE = 'http://localhost:4000/api/v1/employee'
const GET_EMPLOYEE = 'http://localhost:4000/api/v1/employee'
const UPDATE_EMPLOYEE = 'http://localhost:4000/api/v1/employee'

export async function getAllEmployees() {
    let result = null;
    try {
        const response = await apiConnector('GET',ALL_EMPLOYEE);
        result = response;
    }
    catch (err) {
        console.error(err);
    }
    return result;
}

export async function addEmployee(employee) {
    let result = null;
    try {
        const response = await apiConnector('POST',SAVE_EMPLOYEE,employee);
        result = response;
    }
    catch (err) {
        console.error(err);
    }
    return result;
}

export async function deleteEmployee(employeeId) {
    let result = null;
    try {
        const response = await apiConnector('DELETE',DELETE_EMPLOYEE + `/${employeeId}`);
        result = response;
    }
    catch (err) {
        console.error(err);
    }
    return result;
}

export async function getEmployeeById(employeeId) {
    let result = null;
    try {
        const response = await apiConnector('GET',GET_EMPLOYEE + `/${employeeId}`);
        result = response;
    }
    catch (err) {
        console.error(err);
    }
    return result;
}

export async function updateEmployeeById(employeeId, employee) {
    let result = null;
    try {
        const response = await apiConnector('PUT',UPDATE_EMPLOYEE + `/${employeeId}`,employee);
        result = response;
    }
    catch (err) {
        console.error(err);
    }
    return result;
}