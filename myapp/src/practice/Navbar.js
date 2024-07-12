import React from 'react'


const Navbar = ({ link }) => {
    return (
        <nav>
            <ul>
                {link.map((val) => {
                    return (
                        <>
                            <li key={val.id}>
                                <a href={val.url}>{val.name}</a>
                            </li>
                        </>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar