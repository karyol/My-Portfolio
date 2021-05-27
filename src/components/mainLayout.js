import * as React from 'react'
import { 
    container,
} from '../styles/mainLayout.module.scss'
import Navbar from '../components/navbar'

const MainLayout = ({ pageTitle, children }) => {
    return (
        <main className={ container }>
            <title>{ pageTitle }</title>
            <Navbar></Navbar>
            { children }
        </main>
    )
}

export default MainLayout
