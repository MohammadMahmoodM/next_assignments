import React from 'react'

export default function MyButton(props: any) {
    return (
        <div>
            <button onClick={props.nextFunction}>
               Button for {props.buttonTitle}
            </button>
        </div>
    )
}
