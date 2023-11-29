export default async function getPosts(userId) {
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return post.json()
}
