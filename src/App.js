import './App.css';
import AddEmployee from './Component/AddEmployee';
import EmployeeList from './Component/EmployeeList';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/employee' element={<EmployeeList/>}/>
          <Route path='/add-employee' element={<AddEmployee/>}/>
          <Route path='/add-employee/:id' element={<AddEmployee/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
