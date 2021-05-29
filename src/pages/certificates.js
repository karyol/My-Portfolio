import * as React from 'react'
import Certificate from '../components/certificate'
import {
    certificatesSection,
    certContent,
    certTitleBox,
    certSecContent
} from '../styles/certificates.module.scss'
import ico from '../images/certificate.jpg'
import image from '../images/swirl.png'

const Certificates = () => {
    return (
        <main>
            <title>Baron Certificates</title>
            <section className={ certificatesSection }>
                <div className={ certSecContent }>
                    <div className={ certTitleBox }>
                        <h1>My certificates</h1>
                    </div>

                    <div className={ certContent }>
                        <Certificate image={ ico } title='tytuł'>
                            Opisdaskhudsahjdsfakhjgbgsdfkjhgfbdhjshbjgkfdfbhdjskhbjksfddfhbsjkhjbksdfhjgfshjfshgjfshjgfdshgjfshgjbfsghjfhjfhdjbsgkdfshjfdshjgbdhsfjgdsfhjgdfhjsghjgfdshjgdfshgbjfdshjbgfdshjdfhjsdfhjgfdshjgfdshgjfdshgjfdshgjfdsghjkfdsghjkfdgshjghjghjdfsghjfdsghjfdsgjhfdsgjhfds
                        </Certificate>

                        <Certificate image={ image } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ image } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>

                        <Certificate image={ ico } title='tytuł'>
                            Opis
                        </Certificate>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Certificates
