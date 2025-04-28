import NavBar from './Components/Navbar';
import LoginComponent from './Components/LogInComponent/LoginComponet';
import LogoutComponent from './Components/LogInComponent/LogoutComponent';
import StdListComponents from './Components/Student Components/StdListComponents';
import ClassDashboard from './Components/Class_Dashboard_Component/ClassDashboard';
import Header from './Components/Header';

import { useState } from 'react';
import './App.css';

function App() {

  // const [contacts, setContacts] = useState([])

  return (
    <>

      {/* <div className='col-span-5'> */}
      <Header />
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

      <div className='grid sm:grid-cols-12  gap-1'>
        <div className='col-span-2'> <NavBar /></div>
        {/* <div className='col-span-10'><StdListComponents /></div> */}
        <div className='col-span-10'><ClassDashboard /></div>
        {/* <ClassDashboard /> */}
        <div className='col-span-12'>Footer</div>
      </div>
    </>
  )
}

export default App
