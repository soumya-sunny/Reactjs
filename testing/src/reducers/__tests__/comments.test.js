import commentsReducer from 'reducers/comment';
import {SAVE_COMMENT} from 'actions/types'

it('hanles action of type save comment', ()=>{
    const action={
        type:SAVE_COMMENT,
        payload:'New Comment'
    }
    const newState=commentsReducer([],action);
    expect(newState).toEqual(['New Comment']);
})

it('handles action of type unknown', ()=>{
    const action={
        type:'',
        payload:'New Comment'
    }
    const newState=commentsReducer([],action);
    expect(newState).toEqual([]);
})