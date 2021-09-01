



export const getGifts = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=GxfOLRvaB0uyzjveZp9TxwS4yxtOtmoA`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((imp) => {
      return {
        id: imp.id,
        title: imp.title,
        url: imp.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    return gifs
  };


