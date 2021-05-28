import * as React from 'react'
import {
    front,
    back,
    text,
    buttonVisit
} from '../styles/what.module.scss'

const PortfolioItem = ({ name, url, children }) => {
    return (
        <div>
            <div className={ front }>
                <div className={ text }>
                    <h3>{ name }</h3>
                </div>
            </div>

            <div className={ back }>
                <div className={ text }>
                    <p>{ children }</p>
                    <a href={ url } target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627 225.3" className={ buttonVisit}>
                            <path className="st0" d="M122.7 153.4c-7.3 0-9.9-4.7-12.4-10.7l-9.5-22.9c-1.7-4.1-2.4-8.5-2.4-14.6V72.4h5v32.8c0 4.9 0.9 9.1 2.3 12.6l9.6 23c2 5.1 3.3 7.6 7.3 7.6h12.7c4 0 5.2-2.5 7.2-7.5l9.6-23.1c1.4-3.5 2.3-7.7 2.3-12.6V72.4h5v32.8c0 6.1-0.6 10.6-2.3 14.7l-9.4 22.8c-2.4 6-5 10.7-12.3 10.7H122.7z" />
                            <polygon className="st0" points="200.4 153.4 200.4 148.4 222.4 148.4 222.4 77.4 200.4 77.4 200.4 72.4 249.4 72.4 249.4 77.4 227.4 77.4 227.4 148.4 249.4 148.4 249.4 153.4 " />
                            <path className="st0" d="M286.4 153.4v-5h38.3c7.6 0 12.7-4.4 12.7-11.1V129c0-8.5-3.2-9.8-7.3-10.7l-30.5-6.2c-5-1-10.2-3.3-10.2-13V87.2c0-8.9 7-14.8 16.9-14.8h34.1v5h-34.1c-6.7 0-10.9 4-10.9 9.8V99c0 5.6 1.7 7 5.5 7.7l30.2 6.2c5.4 1.1 11.3 3.9 11.3 16.1v8.4c0 9.7-7.1 16.1-17.7 16.1H286.4z" />
                            <polygon className="st0" points="380.4 153.4 380.4 148.4 403.4 148.4 403.4 77.4 380.4 77.4 380.4 72.4 430.4 72.4 430.4 77.4 408.4 77.4 408.4 148.4 430.4 148.4 430.4 153.4 " />
                            <polygon className="st0" points="493.4 153.4 493.4 77.4 464.4 77.4 464.4 72.4 528.4 72.4 528.4 77.4 499.4 77.4 499.4 153.4 " />
                            <path className="st0" d="M627 225.3H0V0h627V225.3zM4 221.3h619V4H4V221.3z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
