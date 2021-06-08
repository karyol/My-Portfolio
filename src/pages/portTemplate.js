import React, { Suspense } from 'react'

const PortTemplateComp = React.lazy(() => import('../components/portTemplateComp'));

const loadingMarkup = (
    <div style={{ 
        textAlign: "center",
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundImage: "linear-gradient(180deg, #e4815d, #fca959)"
    }}>
        <h2 style={{ 
            margin: "auto"
        }}>Loading...</h2>
    </div>
);

const PortTemplate = () => {
    return (
        <Suspense fallback={ loadingMarkup }>
            <PortTemplateComp />
        </Suspense>
    )
};

export default PortTemplate
