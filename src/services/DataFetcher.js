import data from './data_melp.json'

export default async itemsNumber => {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000))
  if (!itemsNumber) {
    return data
  }
  return data.slice(0, itemsNumber)
}
