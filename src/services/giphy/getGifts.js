import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.fixed_height
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export async function getGifs({rating="g", limit = 20, keyword = "morty",page = 0} = {}) {
  let apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=es`;
  return await fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
