import {BlogHeader} from './blog_heading'
import { BlogBody } from './blog_body'
import  { BlogFooter } from './blog_footer'

export default function Blog(){
    return (
        <main>
            <BlogHeader/>
            <BlogBody />
            <BlogFooter/>
        </main>
    );
}