import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import FlipMove from 'react-flip-move';
import {Container , Row, Col } from 'reactstrap';
import LoadingSpinner from './loadingSpinner';
import LabelUi from '../cards/labelCard';
export default class CreateUser extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
this.LabelList=this.LabelList.bind(this);
this.deleteUser = this.deleteUser.bind(this);
        this.state={
            username : '',
            labels:[],
            loading:false
        }
    }


    componentDidMount() {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            this.setState({ labels: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/'+id)
          .then(response => { console.log(response.data)  });
          window.location="";
          
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
  
        const user ={
            username:this.state.username            
        }
        

        axios.post('http://localhost:5000/users/add', user)
        .then(window.location="/user").catch(err=>console.log(err)) ;

        this.setState({
            username:''
        })

      
 }

    LabelList(){
      
        return(this.state.labels.map(currentLabel =>{
            return <LabelUi exercise={currentLabel} deleteUser={this.deleteUser} key={currentLabel._id}/>
        }))
    }
 
    
    render(){
        return(
            <div >
            <h3 style={{color: "red"}}>Add New Label</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Add" className="btn btn-success" />
              </div>
            </form>
             <h3 style={{color: "red"}}>existing label</h3>
             {this.state.loading? <LoadingSpinner/> :(
             <div >
                    <FlipMove duration={300} easing="ease-in-out">
                        <Container fluid>
                            <Col>
                    <Row fnoGutters={true}> 
                    {this.LabelList() }
                 
                    </Row>
                    </Col>
                    </Container>
                    </FlipMove>
          </div>  )}
            
         </div> 
        )
    }}
        
    