export const setTextFilter = text => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortBy = sort => ({
  type: 'SORT_BY',
  sort
});
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})

export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})