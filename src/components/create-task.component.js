import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from'axios'
import { FaPlusCircle} from "react-icons/fa";
import Modal from './modal';
import './modal.css'
export class CreateExercises extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            description:'',
            date:new Date(),
            label:'',
            status:"new",
            users:[],
            isShowing:false
       
             
        }

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeLabel=this.onChangeLabel.bind(this);
    
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            console.log(response);
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
      openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }
    closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
    
    }


     



    onChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeLabel(e){
      this.setState({
        label:e.target.value
      })
  }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date:date
        })
    }

    onSubmit(){
        const task={
            title:this.state.title,
            description:this.state.description,
            date:this.state.date,
            label:this.state.label,
            status:this.state.status
        }
        this.setState({
          isShowing:false
        });

        axios.post('http://localhost:5000/exercises/add',task)
          .then(res => console.log(res.data));

          window.location='/';
    }
 
    render(){
 return (
      <div>        
        <div>
    { this.state.isShowing ? <div onClick={this.props.onHide} className="back-drop"></div> : null }

    
<Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
 className="modal" show={this.props.show}
    close={this.props.onHide} submit={this.onSubmit}>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Title: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group"> 
                <label>label: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.label}
                    
                    
                    onChange={this.onChangeLabel}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div>
              
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
        <button className="btn btn-success" type="submit">Submit</button>
           
            </form>
        



</Modal>
</div>
     
   </div>
        )
    }
}

export default CreateExercises