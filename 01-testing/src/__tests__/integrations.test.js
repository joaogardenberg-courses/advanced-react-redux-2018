import React     from 'react';
import { mount } from 'enzyme';
import moxios    from 'moxios';

import Redux from 'providers/Redux';
import App   from 'components/App';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Redux>
      <App />
    </Redux>
  );

  moxios.install();

  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'fetched comment 1' },
      { name: 'fetched comment 2' },
      { name: 'fetched comment 3' },
      { name: 'fetched comment 4' },
      { name: 'fetched comment 5' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it('can fetch a list of comments and display them', (done) => {
  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(5);
    done();
  });
});