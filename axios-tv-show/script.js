const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    document.querySelectorAll('img').forEach((img) => img.remove())

    const keyword = form.querySelector('input').value;  // Perbaiki di sini
    const config = {
        params: { q: keyword }
    };


    try {
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
        // console.log(res.data);
        getImages(res.data);
        form.elements.query.value = '';
    } catch (error) {
        console.log(error);  // Menangani error jika terjadi
    }
});


const getImages = (show) => {
    for(let result of show) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}