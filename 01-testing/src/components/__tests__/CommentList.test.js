import React     from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Redux       from 'providers/Redux';

let wrapped;

const INITIAL_STATE = {
  comments: [
    'new comment 1',
    'new comment 2',
    'new comment 3',
    'new comment 4',
    'new comment 5'
  ]
};

beforeEach(() => {
  wrapped = mount(
    <Redux initialState={ INITIAL_STATE }>
      <CommentList />
    </Redux>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one <li> per comment', () => {
  expect(wrapped.find('li').length).toEqual(INITIAL_STATE.comments.length);
});

it('shows the text for each comment', () => {
  wrapped.find('li').forEach((li, index) => {
    expect(li.render().text()).toEqual(INITIAL_STATE.comments[index]);
  });
});