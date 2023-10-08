package com.Hindol.Employee.Service;

import com.Hindol.Employee.Model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeeById(Integer id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(Integer id,Employee employee);
    void deleteEmployee(Integer id);
}
