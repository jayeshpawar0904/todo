import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {Container , Row, Col } from 'reactstrap';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";
import AddButton from "./components/addButton";
import Boards from './components/boards';
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import { FaPlusCircle} from "react-icons/fa";
import { IconContext} from "react-icons";
import DashBoard from './components/Dashboard';
import Label from "./components/labels";
import info from "./components/info";
import './App.css';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    
    <Router>
    <div  >
  <div className="sidenav">
  <DashBoard/>
  </div>
 

     
    <div className="main">
    <div className='fixed'>
      <FaPlusCircle  onClick={() => setModalShow(true)} color='purple-red' size='5rem' />
      <CreateTask
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    <Navbar />

    <br/>
   <div className="container">
<Route path ="/" exact component ={ExercisesList}/>
<Route path ="/edit/:id" component={EditExercise}/>
<Route path ="/create"  component={CreateTask}/>
<Route path ="/user" component={CreateUser}/>
<Route path ="/boards" component={Boards}/>
<Route path="/labels/:label" component={Label}/>
<Route path="/info" component={info}/>

</div>

</div>

<AddButton/>
</div>
 </Router>

  );
}

export default App;
