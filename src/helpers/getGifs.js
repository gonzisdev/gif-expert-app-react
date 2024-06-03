export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lHy2SRg7Qw2NBzD1h5Ws6MiIPoBHY6g2&q=${category}&limit=20`
    const res = await fetch(url)
    const { data } = await res.json()
    
    const gifs = data.map(img => ({ 
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}