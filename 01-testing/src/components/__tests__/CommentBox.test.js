import React     from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Redux      from 'providers/Redux';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Redux>
      <CommentBox />
    </Redux>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  const value = 'new comment';

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value }
    });

    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(value);
  });

  it('empties textarea when form submits', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});