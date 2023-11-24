import {CourseHeading} from './course_heading'
import {StartingCourse} from './starting_course'
import {BestCourse} from './best_course'
import {CourseFooter} from './course_footer'

export default function Course(){
    return (
        <main>
            <CourseHeading />
            <StartingCourse />
            <BestCourse />
            <CourseFooter />
        </main>
    );
}