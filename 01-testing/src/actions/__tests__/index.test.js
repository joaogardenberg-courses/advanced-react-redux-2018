import { saveComment }  from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const value  = 'new comment';
    const action = saveComment(value);
    expect(action.payload).toEqual(value)
  });
});