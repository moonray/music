import rootReducer from "./reducers";
import actions from "./actions";

describe('rootReducer', () => {
  it('sorts', () => {
    const action = actions.sort('length', 'desc');
    const initialState = { column: 'name', order: 'asc', };

    const result = rootReducer(action, initialState);
    expect(result).toEqual({ column: action.column, order: action.order });
  });

  it('filters', () => {
    const action = actions.filter(9);
    const initialState = 1;

    const result = rootReducer(action, initialState);
    expect(result).toEqual(9);
  });
});
