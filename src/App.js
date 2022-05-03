import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Updatemenu from './components/Updatemenu';
import Leavemeal from './components/Leavemeal';
import Attendance from './components/Attendance';
import AttendanceDetails from './components/AttendanceDetails';
import Feedback from './components/Feedback';
import Complaints from './components/Complaints';
import Chart from './components/Chart';
import Signin from './components/Signin';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Signin/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/updatemenu' element={<Updatemenu/>}/>
          <Route path='/leavemeal' element={<Leavemeal/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/attendancedetails/:date/:type' element={<AttendanceDetails/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/complaints' element={<Complaints/>}/>
          
          <Route path='/charts' element={<Chart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
