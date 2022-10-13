import axios from "axios";

// const instance = axios.create({
//     baseURL: "https://api.themoviedb.org",
//     params: {
//         api_key: "b15d31744669266d3597161d8c8799b4"
//     }
// })

// export const getPosts = async () => {
//     const  {data} = await instance.get("/trending/all/week")
//     console.log(data)
//     return data
// }

const URL = "https://api.themoviedb.org"
const api_key = "b15d31744669266d3597161d8c8799b4"

// https://api.themoviedb.org/3/trending/all/week

export const getPosts = async () => {
    const  {data} = await axios.get(`${URL}/3/movie/top_rated?api_key=${api_key}`)
    return data
}

export const getPostsById = async (id) => {
    const  {data} = await axios.get(`${URL}/3/movie/${id}?api_key=${api_key}`)
    return data
}

export const getCast = async (id) => {
    const  {data} = await axios.get(`${URL}/3/movie/${id}/credits?api_key=${api_key}`)
    // console.log("data", data)
    return data
}

export const getReviews = async (id) => {
    const  {data} = await axios.get(`${URL}/3/movie/${id}/reviews?api_key=${api_key}`)
    // console.log("data", data)
    return data
}

export const searchPosts = async (query) => {
    const  {data} = await axios.get(`${URL}/3/search/movie?api_key=${api_key}&query=${query}`)
    return data
}
// export const searchPosts = async (query) => {
//     const  data = await instance.get("/search/movie", {
//         params: {
//             query:"bat"
//         }
//     })
//     console.log(data)
//     return data
// }