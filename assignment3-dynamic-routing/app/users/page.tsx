import GetUsers from '../../lib/getUsers'

export default async function UserPage() {
    let users = await GetUsers()

    return (
        <div>
            User Page

        {/* now will try to get all users one by one */}

            {users.map((user:any) => {
                return user.name
            } )}
        </div>
    )
}
