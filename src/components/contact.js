import * as React from 'react'
import {
    conCer,
    certificates,
    certificatesContent,
    buttonVisit,
    crtr1,
    crtr2,
    contact,
    contactContent,
    contactPnlRight,
    contactPnlLeft,
    slideInTop,
    slideInRight,
    list1,
    contactImage,
    contactImg
} from '../styles/contact.module.scss'

const Contact = () => {
    return (
        <section className={ conCer } id="contact">
            <section className={ certificates }>
                <div className={ certificatesContent }>
                    <h4 id="crtr1" className={ crtr1 }>My Certificates</h4>
                    <h6 id="crtr2" className={ crtr2 }>Trainings are important to me. If you have a moment please have a look on my certificates gallery.</h6>
                    <a href="/certificates" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-373.2 285.4 904.7 225.3" className={ buttonVisit } id="button-gallery">
                            <polygon points="-253.4 438.6 -253.4 400.7 -304.4 400.7 -304.4 438.6 -309.9 438.6 -309.9 357.3 -304.4 357.3 -304.4 395.2 -253.4 395.2 -253.4 357.3 -248 357.3 -248 438.6 " />
                            <path d="M-174.9 438.6V414h-51.9v24.6h-5.4v-32.5c0-5.4 0.8-10 2.6-14.6l9.2-23.5c2.1-5.3 4.3-10.7 12.3-10.7h14c7.7 0 9.9 5.3 12.2 10.8l9.9 23.3c1.8 4.7 2.6 9.3 2.6 14.7v32.5H-174.9zM-174.9 408.6v-2.4c0-4.6-0.7-8.7-2.2-12.6l-9.9-23.3c-2.2-5.2-3.4-7.5-7.2-7.5h-14c-4.1 0-5.3 2.1-7.3 7.3l-9.2 23.5c-1.4 3.9-2.2 8-2.2 12.6v2.4H-174.9z" />
                            <path d="M-132.5 438.6c-7.3 0-9.9-4.9-12.3-10.8l-9.5-22.9c-1.7-4.1-2.4-8.6-2.4-14.7v-32.9h5.4v32.9c0 4.9 0.7 9 2.1 12.6l9.5 22.9c2 5.1 3.2 7.5 7.2 7.5h12.6c4 0 5.1-2.4 7.2-7.5l9.5-22.9c1.4-3.5 2.1-7.6 2.1-12.6v-32.9h5.4v32.9c0 6.1-0.8 10.6-2.4 14.7l-9.5 22.9c-2.4 5.9-5 10.8-12.3 10.8H-132.5z" />
                            <polygon points="-79.3 438.6 -79.3 357.3 -27 357.3 -27 362.7 -73.8 362.7 -73.8 394.7 -38.6 394.7 -38.6 400.1 -73.8 400.1 -73.8 433.2 -27 433.2 -27 438.6 " />
                            <path d="M100.7 438.6V414H48.8v24.6h-5.4v-32.5c0-5.4 0.8-10 2.6-14.6l9.2-23.5c2.1-5.3 4.3-10.7 12.3-10.7h14c7.7 0 9.9 5.3 12.2 10.8l9.9 23.3c1.8 4.7 2.6 9.3 2.6 14.7v32.5H100.7zM100.7 408.6v-2.4c0-4.6-0.7-8.7-2.2-12.6l-9.9-23.3c-2.2-5.2-3.4-7.5-7.2-7.5h-14c-4.1 0-5.3 2.1-7.3 7.3l-9.2 23.5c-1.4 3.9-2.2 8-2.2 12.6v2.4H100.7z" />
                            <polygon points="182 438.6 182 357.3 187.5 357.3 187.5 433.2 233.3 433.2 233.3 405 238.7 405 238.7 438.6 " />
                            <path d="M282 440.5c-21 0-30.8-6.8-30.8-21.3v-42.3c0-14.6 9.8-21.3 30.8-21.3 21.2 0 31.1 6.8 31.1 21.3v42.3C313.1 433.7 303.2 440.5 282 440.5zM282 361c-22.3 0-25.4 8-25.4 15.9v42.3c0 7.9 3 15.9 25.4 15.9 22.6 0 25.6-8 25.6-15.9v-42.3C307.6 362.9 294.7 361 282 361z" />
                            <path d="M358.9 440.5c-21 0-30.8-6.8-30.8-21.3v-42.3c0-14.6 9.8-21.3 30.8-21.3 21.2 0 31.1 6.8 31.1 21.3v42.3C390 433.7 380.1 440.5 358.9 440.5zM358.9 361c-22.3 0-25.4 8-25.4 15.9v42.3c0 7.9 3 15.9 25.4 15.9 22.6 0 25.6-8 25.6-15.9v-42.3C384.6 362.9 371.6 361 358.9 361z" />
                            <path d="M462.6 438.6v-27.2c0-6.4-2.4-10.6-13.9-10.6h-36.5v37.8h-5.4v-81.4h5.4v38.1H440l16.5-38.1h5.9l-16.5 38.1h2.8c8.3 0 19.3 1.7 19.3 16v27.2H462.6z" />
                            <path d="M531.4 510.7h-904.7V285.4h904.7V510.7zM-367.5 506.7h893.1V289.4h-893.1V506.7z" />
                        </svg>
                    </a>
                </div>
            </section>

            <section className={ contact }>
                <div className={ contactContent }>
                    <div className={ contactPnlRight }>
                        <div className={ slideInTop }>
                            <h3 id="ctr1">If you need a developer for your project you can drop me an email.</h3>

                            <a href="mailto:karyol@o2.pl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-445.2 288.7 865.4 225.3" className={ buttonVisit }>
                                    <path d="M-340.5 441.1c-18.2 0-24.4-5.1-24.4-20.1v-39.2c0-15.2 6.2-20.3 24.4-20.3h25.4v5.4h-25.4c-16.4 0-19 4.4-19 14.9V421c0 12.4 5 14.7 19 14.7h25.4v5.4H-340.5z" />
                                    <path d="M-268.6 442.9c-20.6 0-30.1-6.6-30.1-20.9v-41.3c0-14.3 9.6-20.9 30.1-20.9 20.8 0 30.4 6.6 30.4 20.9V422C-238.1 436.3-247.8 442.9-268.6 442.9zM-268.6 365.2c-21.8 0-24.7 7.8-24.7 15.5V422c0 7.7 2.9 15.5 24.7 15.5 22 0 25-7.8 25-15.5v-41.3C-243.5 367-256.2 365.2-268.6 365.2z" />
                                    <path d="M-160.1 441.1v-15.7l-49.9-56v71.6h-5.4V365c0-2.1 1.6-3.7 3.7-3.7 1.7 0 2.4 0.8 3.5 1.8l0.1 0.1 48 54v-55.8h5.4v79.6H-160.1z" />
                                    <polygon points="-110.1 441.1 -110.1 366.9 -138.8 366.9 -138.8 361.5 -76 361.5 -76 366.9 -104.7 366.9 -104.7 441.1 " />
                                    <path d="M-11.7 441.1V417h-50.6v24.1h-5.4v-31.8c0-5.2 0.8-9.8 2.5-14.3l9-23c2.1-5.2 4.3-10.5 12.1-10.5h13.7c7.6 0 9.7 5.2 11.9 10.6l9.7 22.8c1.7 4.5 2.5 9.2 2.5 14.4v31.8H-11.7zM-11.7 411.6v-2.3c0-4.4-0.7-8.5-2.1-12.3l-9.6-22.7c-2.2-5.1-3.3-7.3-7-7.3h-13.7c-4 0-5.1 2-7.1 7.1l-9 23c-1.4 3.8-2.1 7.8-2.1 12.3v2.3H-11.7z" />
                                    <path d="M38.7 441.1c-18.2 0-24.4-5.1-24.4-20.1v-39.2c0-15.2 6.2-20.3 24.4-20.3h25.4v5.4H38.7c-16.4 0-19 4.4-19 14.9V421c0 12.4 5 14.7 19 14.7h25.4v5.4H38.7z" />
                                    <polygon points="103.2 441.1 103.2 366.9 74.5 366.9 74.5 361.5 137.3 361.5 137.3 366.9 108.6 366.9 108.6 441.1 " />
                                    <path d="M257.9 441.1v-73.3c0-0.6-0.1-0.8-0.1-0.9 0 0 0 0 0 0 0 0-0.1 0-0.2 0h-2.1c-0.8 0-0.9 0-1.5 1l-17.5 26.5c-3.1 4.7-4.5 6.8-9.5 6.8 -5 0-6.4-2.1-9.5-6.8l-17.5-26.4c-0.7-1.1-0.9-1.1-1.7-1.1h-2.1c-0.1 0-0.1 0-0.2 0 0 0.1-0.1 0.4-0.1 0.9v73.3h-5.4v-73.3c0-5.2 3.1-6.3 5.6-6.3h2.4c2.5 0 4.6 1.2 5.9 3.3l17.3 26.3c3 4.6 3.1 4.6 5.2 4.6s2.2 0 5.2-4.6l17.3-26.4c1.3-2.2 3.3-3.3 5.7-3.3h2.4c2.6 0 5.8 1.1 5.8 6.3v73.3H257.9z" />
                                    <polygon points="288.7 441.1 288.7 361.5 339.9 361.5 339.9 366.9 294.1 366.9 294.1 398 328.6 398 328.6 403.4 294.1 403.4 294.1 435.7 339.9 435.7 339.9 441.1 " />
                                    <path d="M420.2 514h-865.4V288.7h865.4V514zM-439.7 510h854.4V292.7h-854.4V510z" />
                                </svg>
                            </a>
                        </div>

                        <div className={ slideInRight }>
                            <div>
                                <ul className={ list1 }>
                                    <li>karyol@o2.pl</li>
                                    <li>+48 731 679 751</li>
                                    <li>Sędziszów Małoposki</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={ contactPnlLeft }>
                        <div className={ contactImage }>
                            <div className={ contactImg }></div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contact
