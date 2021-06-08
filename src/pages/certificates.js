import React, { Suspense } from 'react'

const CertificatesComp = React.lazy(() => import('../components/certificatesComp'));

const loadingMarkup = (
    <div style={{ 
        textAlign: "center",
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundImage: "linear-gradient(180deg, #0F2027, #203A43, #2C5364)"
    }}>
        <h2 style={{ 
            margin: "auto",
            color: "white"
        }}>Loading...</h2>
    </div>
);

const Certificates = () => {
    return (
        <Suspense fallback={ loadingMarkup }>
            <CertificatesComp />
        </Suspense>
    )
}

export default Certificates
