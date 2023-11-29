import GetUsers from '../../lib/getUsers'
import Link from 'next/link'

export default async function UserPage() {
    let users = await GetUsers()

    return (
        <div>
            User Page

        {/* now will try to get all users one by one */}
        

            {users.map((user:any) => {
                return (
                <p> 
                    <Link href={`/users/${user.id}`}>
                         {user.name} 
                    </Link>
                </p>  // purpose of using p tag is just to format asp take full line
                )
            } )}

        </div>
    )
}
