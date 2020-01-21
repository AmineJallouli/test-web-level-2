import React, { Component } from 'react';
import axios from 'axios'
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cmnt: []
         }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments?postId='+this.props.match.params.postId)
        .then (res => {
            console.log(res)
            this.setState({
                cmnt: res.data
            })
    })
    }

    render() { 
        return ( <div>
            {this.state.cmnt.map(el=>{
                return(<div className="postsbody">
                    <div className="title">Name: {el.name}</div>
                    <div className="body">Comment: {el.body}</div>
                </div>)})
            }
        </div> );
    }
}
 
export default Comments;
