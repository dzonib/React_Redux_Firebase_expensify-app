export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter( expense => {
    const startDateCheck = typeof startDate === 'undefined' || startDate <= expense.createdAt;
    const endDateCheck = typeof endDate === 'undefined'|| endDate >= expense.createdAt;
    const textCheck = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateCheck && endDateCheck && textCheck
  }).sort( (a, b) => {
      if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? -1 : 1
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1
    }
  })
}