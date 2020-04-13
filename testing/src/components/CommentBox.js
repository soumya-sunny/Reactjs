import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

// export default ()=>{
//     return (<p>Comment Box</p>)
// }

 class CommentBox extends React.Component {
    state={value:''}
    onChange = (e)=> {
        this.setState({value:e.target.value})
    }
    onSubmit =(event) => {
        event.preventDefault();
        this.setState({value:''});
        this.props.saveComment(this.state.value);
    }
    getComments=(event)=>{
        event.preventDefault();
        this.props.fetchComments();
    }
    render () {
        return(
            <form onSubmit={this.onSubmit}>
                <h4>Please add comment</h4>
                <textarea value={this.state.value} onChange={this.onChange}/>
                <div>
                    <button>Submit</button>
                </div>
                <button className="fetch-comments" onClick={this.getComments}>Fetch Comments</button>
               </form>
        )
    }
}
export default connect(null,actions)(CommentBox);