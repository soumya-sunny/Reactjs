import React from 'react';
import { shallow, mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'components/root'

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root initialState={{comments:["comment1"]}}><CommentBox /></Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it('shows a text box and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);

})


describe('', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'new comment' } });
        wrapped.update();
    })
    it('shows a text box can be given input', () => {       
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        })
    it('shows that text box should cleared on form submit', () => {
            expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })
});