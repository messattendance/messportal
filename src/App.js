import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Updatemenu from './components/Updatemenu';
import Leavemeal from './components/Leavemeal';
import Attendance from './components/Attendance';
import AttendanceDetails from './components/AttendanceDetails';
import Feedback from './components/Feedback';
import Complaints from './components/Complaints';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard/>} />
          <Route path='/updatemenu' element={<Updatemenu/>}/>
          <Route path='/leavemeal' element={<Leavemeal/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/attendancedetails' element={<AttendanceDetails/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/complaints' element={<Complaints/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
