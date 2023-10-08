import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEmployee, getEmployeeById, updateEmployeeById } from '../Service/Operaion/EmployeeAPI';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveEmployee = async (e) => {
    e.preventDefault();
    const employeeData = { firstName, lastName, email };
    if (!employeeData.firstName || !employeeData.lastName || !employeeData.email) {
      toast.error('Please fill in all fields.');
      return;
    }
    let response = null;
    if (!id) {
      response = await addEmployee(employeeData);
    } else {
      response = await updateEmployeeById(id, employeeData);
    }

    if (response.status === 200) {
      toast.success(`Employee ${!id ? 'added' : 'updated'} successfully!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setFirstName('');
        setLastName('');
        setEmail('');
        navigate('/');
      }, 4000);
    } else {
      toast.error(`Failed to ${!id ? 'add' : 'update'} employee. Please try again later.`);
    }
  };

  useEffect(() => {
    if (id) {
      const getEmployee = async () => {
        const result = await getEmployeeById(id);
        setFirstName(result?.data?.firstName);
        setLastName(result?.data?.lastName);
        setEmail(result?.data?.email);
      };
      getEmployee();
    }
  }, [id]); 

  return (
    <div>
      <ToastContainer />
      <div className='container mt-5'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'>
              {!id ? 'Add Employee' : `Update Employee ${id}`}
            </h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <input
                    className='form-control'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder='Enter First Name'
                  />
                </div>
                <div className='form-group mb-2'>
                  <input
                    className='form-control'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder='Enter Last Name'
                  />
                </div>
                <div className='form-group mb-2'>
                  <input
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='Enter Email'
                  />
                </div>
                <button
                  className='btn btn-success'
                  onClick={(e) => saveEmployee(e)}
                >
                  {!id ? 'ADD' : 'UPDATE'}
                </button>{" "}
                <Link to={'/'} className='btn btn-danger'>CANCEL</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
