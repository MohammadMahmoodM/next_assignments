export default async function singleUser(userId:string) {
    let single_user  = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return single_user.json()
}
