let API_URL = 'https://rickandmortyapi.com/api/character';

export async function getAll() {
  let response = await fetch(API_URL)
  let content = await response.json()
  return console.log(content.results)
}