export const NOT_FOUND = 'NOT_FOUND'

export const notFound = (message) => ({
  type: NOT_FOUND,
  payload: message,
})
