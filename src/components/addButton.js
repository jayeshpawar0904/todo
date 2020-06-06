import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from'axios'
import { FaPlusCircle} from "react-icons/fa";
import Modal from './modal';
import CreateTask from "./create-task.component";
import '../App.css'
function AddButton() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
    <div className='fixed'>
    <FaPlusCircle  onClick={() => setModalShow(true)} color='purple-red' size='5rem' />
    <CreateTask
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </div>)}

export default AddButton