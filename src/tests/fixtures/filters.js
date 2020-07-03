import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  startDate: moment().add(3, 'days'),
  endDate: moment(0)
};

export {
  filters,
  altFilters
};