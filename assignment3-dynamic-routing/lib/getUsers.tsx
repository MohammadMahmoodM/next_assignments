export default async function GetUsers() {
    let users = await fetch(`https://jsonplaceholder.typicode.com/users`) // getting users from here
    return users.json()           // converting fetched to json, so read able
}
