import React, { Suspense } from 'react'

const TradeAwayComp = React.lazy(() => import('../components/tradeAwayComp'));

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

const TradeAway = () => {
    const isSSR = typeof window === "undefined";

    return (
        <>
            {!isSSR && (
                <Suspense fallback={ loadingMarkup }>
                    <TradeAwayComp />
                </Suspense>
            )}
        </>
    )
};

export default TradeAway
