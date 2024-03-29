import React from 'react'
import Block from './Block'
import galary from "../img/galary.png"
import amazon from "../img/amazon-clone.png"
import digiClock from "../img/digiClock.png"
import reactBlog from "../img/reactBlog.png"

const Projects = () => {
    return (
        <div className='projects' id='project'>
            <h1>My Recent Works</h1>
            <div className='blog_data'>
                <Block
                    img={amazon}
                    project="Amazon Clone"
                    discription="In this project mainly i used react hooks like useContext, useReducer, useState, etc. This is dummy of amazon clone in this clone i use some functionality like slider, carousel, add to cart, etc"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    react={<i className="fa-brands fa-react"></i>}
                    url="https://amazon-clone-i.netlify.app/"
                />
                <Block
                    img={galary}
                    project="Photo Galary"
                    discription="This is project includes html, css and javascript only, Here i tried to make gallary type website with help of static API and here i used pexels references for making this website"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    url="https://vaidyaakash.github.io/galaxy/"
                    />
                <Block
                    img={digiClock}
                    project="Digital Clock"
                    discription="Digital Clock created by using JavaScript, HTML and CSS, we look closely at the JavaScript code behind a clock. It includes multiple functions and created a clock and make it response on a particular time for taking tasks"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    url="https://vaidyaakash.github.io/clock-fontpage/"
                    />
                <Block
                    img={reactBlog}
                    project="React Blog"
                    discription="It includes capabilities React.JS and React Router mainly. While developing this project I understand that how I can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables by using HTML, CSS, JavaScript , React.JS"
                    html={<i className="fa-brands fa-html5"></i>}
                    css={<i className="fa-brands fa-css3-alt"></i>}
                    js={<i className="fa-brands fa-js-square"></i>}
                    react={<i className="fa-brands fa-react"></i>}
                    url="https://react-blog-pro.netlify.app/"
                />

            </div>
        </div>
    )
}

export default Projects

