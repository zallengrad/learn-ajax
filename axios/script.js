// axios.get('https://swapi.dev/api/people/1/').then((res) => {
//     console.log(res.data)
// }).catch((err) => {
//     console.log(err)
//     alert(err.massage)
// })

const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`)
        console.log(res.data)
    } catch(error){
        console.log(error);
        console.log(error.massage);
        console.log(error.response.status);
        console.log(error.response.data);
    }
} ;