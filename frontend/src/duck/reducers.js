import { combineReducers } from "redux";
import types from './types';

const initialState = {
  ui: {
    sort: {
      column: 'name',
      order: 'asc',
    },
    filter: -1,
  },
  data: {
    albums: [],
    genres: [],
    images: [],
    songs: [],
  }
};

const sortUiReducer = (state = initialState.ui.sort, action) => {
  switch (action.type) {
    case types.SORT:
      return {
        column: action.column,
        order: action.order,
      };

    default:
      return state;
  }
};

const filterUiReducer = (state = initialState.ui.filter, action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;

    default:
      return state;
  }
};

const uiReducer = combineReducers({
  sort: sortUiReducer,
  filter: filterUiReducer,
});

const dataReducer = (state = initialState.data, action) => {
  return state;
};

const rootReducer = combineReducers({
  ui: uiReducer,
  data: dataReducer,
});

export default rootReducer;
