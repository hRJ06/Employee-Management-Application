import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEmployee, getAllEmployees } from '../Service/Operaion/EmployeeAPI';
import { ToastContainer, toast } from 'react-toastify';

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const getEmployee = async () => {
      const result = await getAllEmployees();
      setEmployee(result?.data);
    };
    getEmployee();
  }, []);

  const deleteHandler = async (e, employeeId) => {
    e.preventDefault();
    const result = await deleteEmployee(employeeId);
    console.log(result);
    if (result.status === 200) {
      toast.success('Employee deleted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        setEmployee((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      }, 4000);
    } else {
      toast.error('Failed to delete employee. Please try again later.');
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className='container'>
        <Link to='/add-employee' className='btn btn-primary mb-2 mt-3'>
          Add Employee
        </Link>
        <h2 className='text-center mb-4'>List Employee</h2>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>
                  <Link to = {`/add-employee/${e.id}`} className='btn btn-info'>UPDATE</Link> {' '}
                  <button
                    className='btn btn-danger'
                    onClick={(event) => deleteHandler(event, e.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
