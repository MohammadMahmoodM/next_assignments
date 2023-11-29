import singleUser from '../../../lib/singleUser'


interface Params {
    params: {
        userId: string
    }
}

export default async function UserPage({params}: Params) {       //  writing params is cumpalsary here. no other words

    let user = await singleUser(params.userId)
    return (
        <div>
            {user.name}
        </div>
    )
}