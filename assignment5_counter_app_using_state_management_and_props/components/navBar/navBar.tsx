import React from 'react'

export default function NavBar() {
    return (
        <div className="flex justify-around py-3" style={{border: "1px solid black"}}>
            <div>
                Home
            </div>

            <ul className="flex  space-x-4">
                <li>Facebook</li>
                <li>WhatsApp</li>
                <li>LinkedIn</li>
            </ul>

            <div>
                About
            </div>
        </div>
    )
}
