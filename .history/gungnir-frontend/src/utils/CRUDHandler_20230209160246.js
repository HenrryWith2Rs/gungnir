export async function FindAll() {
    // let url = "https://94ksglie4g.execute-api.us-east-1.amazonaws.com/items";
    let url = "https://jsonplaceholder.typicode.com/posts";
    const data = await fetch(url)
                    .then(response => response.json())
    return data;
}

export async function FindById(id) {
    // let url = "https://94ksglie4g.execute-api.us-east-1.amazonaws.com/items";
    let url = "https://jsonplaceholder.typicode.com/posts/" + id;
    // console.log(url)
    const data = await fetch(url)
                    .then(response => response.json())
    // console.log(data)
    return data;
}