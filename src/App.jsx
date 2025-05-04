import NavBar from './Components/navbar/Navbar';
import LoginComponent from './Components/LogInComponent/LoginComponet';
import LogoutComponent from './Components/LogInComponent/LogoutComponent';
import StdListComponents from './Components/Student Components/StdListComponents';
import ClassDashboard from './Components/Class_Dashboard_Component/ClassDashboard';
import Header from './Components/Header/Header';
// import Layout from './layout';

import { useState } from 'react';

// import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';

function App() {

  // const [contacts, setContacts] = useState([])

  return (
    <>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter > */}

      {/* <div className='col-span-5'> */}
      < Header />
      {/*<div className='container grid grid-cols-5 grid-rows-6 h-screen'> */}
      {/* </div> */}
      {/* <div className='row-span-4 col-span-1 row-start-2'>
          <NavBar />
        </div> */}
      {/* <LoginComponent /> */}
      {/* <LogoutComponent/> */}
      {/* <div className=' col-span-4 row-span-4 col-start-2 row-start-2'>
          <StdListComponents />

        </div>
        <div className="col-span-5 row-start-6">Footer</div>
      </div> */}

      <Outlet />
      {/* <div className='grid sm:grid-cols-12  gap-1'> */}
        {/* <div className='col-span-2'> <NavBar /></div> */}
        {/* <div className='col-span-10'><StdListComponents /></div> */}
        {/* <div className='col-span-10'><ClassDashboard /></div> */}
        {/* <ClassDashboard /> */}
      {/* </div> */}


      <div className='col-span-12'><Footer /></div>
    </>
  )
}

export default App
