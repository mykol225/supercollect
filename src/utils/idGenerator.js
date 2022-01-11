export const genId = (prefix = '', suffix ='') => {
  const now = Date.now()
  return `${prefix}${now}${suffix}`
}