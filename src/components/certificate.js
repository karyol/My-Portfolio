import * as React from 'react'
import ModalImage from 'react-modal-image'
import {
    certBox,
    certImg,
    certDesc,
    certImgDiv
} from '../styles/certificates.module.scss'

const Certificate = ({ image, title, children }) => {
    return (
        <div className={ certBox }>
            <div className={ certImgDiv }>
                <ModalImage 
                    hideDownload
                    className={ certImg }
                    small={ image }
                    large={ image }
                    alt={ title }
                />
            </div>

            <div className={ certDesc }>
                <h4>{ title }</h4>
                <h6>{ children }</h6>
            </div>
        </div>
    )
}

export default Certificate
