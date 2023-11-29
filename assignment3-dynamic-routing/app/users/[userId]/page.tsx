import singleUser from '../../../lib/singleUser'
import getPosts from '../../../lib/getPosts'


interface Params {
    params: {
        userId: string
    }
}

export default async function UserPage({params}: Params) {       //  writing params is cumpalsary here. no other words

    let user = await singleUser(params.userId)
    let posts = await getPosts(params.userId)
    return (
        <div>
           <div className="bg-orange-500">
                {user.name}
           </div>

            <br />

            {posts.map((post)=>{
                return (
                    <>
                    <p>{post.body}</p>
                    </>
                )
            }  )}
        </div>
    )
}