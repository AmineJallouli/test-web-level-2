import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userlist: [],
         }
    }

    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res => {
            console.log(res)
            this.setState({
                userlist: res.data
            })
    })
}


    render() { 
        return ( <div>
            {this.state.userlist.map(el=> 
            <div className="users">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"/>
                <div className="name">{el.name}</div> 
                <div className="follow"><Link to={`/Posts/${el.id}`}><button type="button" class="btn btn-success">Follow</button></Link></div>
            </div>)}
        </div> );
    }
}
 
export default Users;
