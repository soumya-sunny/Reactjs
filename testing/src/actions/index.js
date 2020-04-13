
import { SAVE_COMMENT,FETCH_COMMENTS } from "./types";
import axios from 'axios'

export const saveComment = (comment) => ({
        type: SAVE_COMMENT,
        payload: comment

});

export const fetchComments = () => {
        const data = axios.get("https://jsonplaceholder.typicode.com/comments");
        return {
                type: FETCH_COMMENTS,
                payload: data
        }
}