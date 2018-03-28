import types from './types';

const sort = (column, order) => ({
  type: types.SORT,
  column: column,
  order: order,
});

const filter = id => ({
  type: types.FILTER,
  id: id,
});

export default {
  sort,
  filter,
};
