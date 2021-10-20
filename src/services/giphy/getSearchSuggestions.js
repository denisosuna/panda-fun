import { API_KEY, API_URL } from "./settings";

export async function getGifs({ limit = 20, keyword = "morty",page = 0} = {}) {
  let apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&z=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=es`;
  return await fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;

      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;

          return { title, id, url };
        });
        localStorage.Gifs = JSON.stringify(gifs);
        return gifs;
      }
    });
}
