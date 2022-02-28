import React from 'react'
import github from '../images/github-icon.svg'
import instagram from '../images/instagram-icon.svg'
import linkedin from '../images/linkedin-icon.svg'
import twitter from '../images/twitter-icon.svg'

const GITHUB_LINK="https://github.com/rt4914"
const INSTAGRAM_LINK="https://www.instagram.com/rajattalesra"
const LINKEDIN_LINK="https://www.linkedin.com/in/rajat-talesra-59068582"
const TWITTER_LINK="https://twitter.com/rt4914"

export default function SocialLinks() {
    return (
        <footer>
            <img className="img--social-icon" src={github} onClick={() => openInNewTab(GITHUB_LINK)} />
            <img className="img--social-icon" src={instagram} onClick={() => openInNewTab(INSTAGRAM_LINK)} />
            <img className="img--social-icon" src={linkedin} onClick={() => openInNewTab(LINKEDIN_LINK)} />
            <img className="img--social-icon" src={twitter} onClick={() => openInNewTab(TWITTER_LINK)} />
        </footer>
    )
}

const openInNewTab = (url) =>{
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}