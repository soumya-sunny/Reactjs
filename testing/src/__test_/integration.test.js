import React from 'react';
import { mount } from 'enzyme';
import Root from 'components/root'
// import CommentList from 'components/CommentList';
import moxios from 'moxios';
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typcode.com/comments", { status: 200, respnse: ["comment1", "comment2"] })
  
})

afterEach(() => {

    moxios.uninstall();
    // wrapped.unmount();
})


it('shows list of  comments', () => {
    wrapped = mount(<Root><CommentBox/></Root>);
    wrapped.find('.fetch-comments').simulate('click');
   
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    })
})