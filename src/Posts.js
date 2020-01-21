import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[]
         }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts?userId='+this.props.match.params.userId)
        .then(res=>this.setState({
            posts: res.data
        }))
    }

    render() { 
        return ( <div>
            <div className="posts">His Posts</div>
            {this.state.posts.map(el=>{
                return(<div className="postsbody">
                    
                    <div className="title">Title: {el.title}</div>
                    <div className="body">{el.body}</div>
                    <div>
                        
                        <Link to={`/Comments/${el.id}`}><button type="button" class="btn btn-warning">Comments</button></Link>
                        
                    </div>
                </div>)})
            }
        </div> );
    }
}
 
export default Posts;
