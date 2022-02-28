import React from 'react'

export default function Information() {
    return (
        <div className="information">
            <h1 className="information--name">Rajat Talesra</h1>
            <p className="information--designation">Mobile App Developer</p>
            <button className="information--email" onClick={() => openEmail()}><i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
            <h2 className="information--subheading">About</h2>
            <p className="information--subtext">I am an android appplication developer working at Forem currently. I have been developing apps for 7 years now. In my free time I contribute to open-source projects.</p>
            <h2 className="information--subheading">Interests</h2>
            <p className="information--subtext">Road trip, food, chess, movies, series, travel, tea, etc.</p>
        </div>
    )
}

const openEmail = () => {
    window.open('mailto:rajattalesra4914@gmail.com?')
}