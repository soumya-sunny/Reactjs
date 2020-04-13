import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/root'
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root initialState={{comments:["comment1"]}}><CommentList /></Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it('shows a comment', () => {
    expect(wrapped.find('li').length).toEqual(1); 
})
it('shows text of a comment',()=>{
    expect(wrapped.render().text()).toContain('comment1');
})
