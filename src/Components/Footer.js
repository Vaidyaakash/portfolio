import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='footer' id='resume'>
                <h1>Akash Vaidya</h1>
                <div className='contact'>
                    <div>Mobile : 8788661469/8698418924</div>
                    <div><a href="mailto:https://www.akashvaidya132@gmail.com" target="_blank">Mail To : <div className='email'> akashvaidya@gmail.com</div> </a></div>
                </div>
                <div id='resume2'><button>Resume</button> <div></div></div>
                <div className='footer_icon'>
                    <a href='https://www.linkedin.com/in/akash-vaidya-baa43423a/' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a target="_blank" href='https://github.com/Vaidyaakash'><i className="fa-brands fa-github "></i></a>
                    <a target="_blank" href='https://www.instagram.com/akash_vaidya__/'><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer