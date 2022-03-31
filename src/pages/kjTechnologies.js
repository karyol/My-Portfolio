import React, { Suspense } from 'react'

const KJTechComp = React.lazy(() => import('../components/kjTechComp'));

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

const KJTech = () => {
    const isSSR = typeof window === "undefined";

    return (
        <>
            {!isSSR && (
                <Suspense fallback={ loadingMarkup }>
                    <KJTechComp />
                </Suspense>
            )}
        </>
    )
};

export default KJTech
