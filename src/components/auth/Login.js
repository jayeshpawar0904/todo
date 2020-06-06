import React, {Component} from 'react';
import axios from 'axios';
export default class Registration extends Component{
    constructor(props){
        super(props);

        this.state={
            email="",
            password="",
            registrationErrors=""
        }
       this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value;
        })

        handleLogin(event){
            
           event.preventDefault();
        }
    }

render(){
    return(
<div>
<form onSubmit={this.handleSubmit}>

<input type="email" name="email" placeholder="Email here"
value={this.state.email} onChange={this.handleChange}
required
>

</input>
<input type="password" name="password" placeholder="Password here"
value={this.state.password} onChange={this.handleChange}
required
>

</input>


<button type="submit">Login</button>
</form>
</div>

    )
}
}