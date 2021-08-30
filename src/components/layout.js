import React from 'react'
import Header from './header'
import Footer from './footer'
import '../assets/styles/cyborg.min.css'

import * as layoutStyle from '../assets/styles/layout.module.scss'

export const layout = (props) => {
    return (
        <>
            <div className={layoutStyle.__container}>
                <Header />
                {props.children}
            </div>
            <Footer /> 
       </>
    )
}


export default layout
