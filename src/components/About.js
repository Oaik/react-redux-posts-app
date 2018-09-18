import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia recusandae eaque ipsa voluptatibus debitis aliquid quos, adipisci dolores enim soluta rerum similique accusantium unde sint minus veniam, vitae ipsum!</p>
        </div>
    )
}

export default Rainbow(About)