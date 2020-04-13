import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props)=> {
    // console.log(props);
    const getComments = (comments) => {
        return comments.map((com, id) => {
            return (<li key={id}>{com}</li>)
        })
    }
    return (
        <>
            <p>Comment List Component</p>
            <ul>
                {getComments(props.comments)}
            </ul>
        </>)
}

const mapStatetoProps = (store) => {
    return { ... store }
}
export default connect(mapStatetoProps)(CommentList);