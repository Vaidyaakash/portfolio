import React from 'react'

const Block = (props) => {
    const { img, discription, project, html, css, url, js, react } = props;

    return (
        <div className='block'>
            <img src={img} />
            <div className='project'>{project}</div>
            <div className="discription">{discription}</div>
            <div className='technology'>TECHNOLOGY USED</div>
            <ul>
                <li className='html'>{html}</li>
                <li className='css'>{css}</li>
                <li className='js'>{js}</li>
                <li className='react'>{react}</li>
            </ul>
            <a href={url} target="_blank">
                <button>Visit Now</button>
            </a>
        </div>
    )
}

export default Block;

{/* <i class="fa-brands fa-html5"></i>
<i class="fa-brands fa-css3-alt"></i>
<i class="fa-brands fa-js-square"></i>
<i class="fa-brands fa-react"></i> */}