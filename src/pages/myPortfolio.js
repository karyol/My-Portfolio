import React, { Suspense } from 'react'

const MyPortfolioComp = React.lazy(() => import('../components/myPortfolioComp'));

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

const MyPortfolio = () => {
    return (
        <Suspense fallback={ loadingMarkup }>
            <MyPortfolioComp />
        </Suspense>
    )
};

export default MyPortfolio
