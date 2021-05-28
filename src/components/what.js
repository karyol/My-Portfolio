import * as React from 'react'
import styled from 'styled-components';
import PortfolioItem from './portfolioItem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    scrollSvg
} from '../styles/index.module.scss'
import { 
    what,
    whatContent,
    port
} from '../styles/what.module.scss'

const CustomLeftArrow = styled.i`
    position: absolute !important;
    left: 7px;
    top: 46%;
    z-index: 1;
    border: 1px solid #242b3b;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 10px;
    box-shadow: 1px 1px #ffd500;
    opacity: 0.8;
    cursor: pointer;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
`;

const CustomRightArrow = styled.i`
    position: absolute !important;
    right: 7px;
    top: 46%;
    z-index: 1;
    border: 1px solid #242b3b;
    border-width: 4px 0 0 4px;
    display: inline-block;
    padding: 10px;
    box-shadow: -1px -1px #ffd500;
    opacity: 0.8;
    cursor: pointer;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
`;

const What = () => {
    return (
        <section id="what" className={ what }>
            <div className={ whatContent }>
                <div>
                    <h2>
                        <span id="wtr1">I hand craft Web Applications</span>
                        <br />
                        <span id="wtr11">and Desktop Applications</span>
                    </h2>
                </div>

                <div>
                    <p id="wtr2">I can prepare a design for your application then turn it into working application.</p>
                </div>

                <div>
                    <h3 id="wtr3">My portfolio</h3>
                    <Carousel 
                        additionalTransfrom={ 0 }
                        arrows
                        autoPlaySpeed={ 3000 }
                        centerMode={ false }
                        className={ port }
                        containerClass=""
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        dotListClass=""
                        draggable
                        focusOnSelect={ false }
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={ 80 }
                        renderButtonGroupOutside={ false }
                        renderDotsOutside={ false }
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1314
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 870,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1314,
                                    min: 870
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={ false }
                        sliderClass=""
                        slidesToSlide={ 1 }
                        swipeable
                    >
                        <PortfolioItem name="Template" url="#home">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </PortfolioItem>

                        <PortfolioItem name="Template" url="#home">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </PortfolioItem>

                        <PortfolioItem name="Template" url="#home">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </PortfolioItem>

                        <PortfolioItem name="Template" url="#home">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </PortfolioItem>
                    </Carousel>
                </div>

                <div>
                    <a href="#about" title="About me" id="scroll-about">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 81" className={ scrollSvg }>
                            <path d="M40.5 81C18.2 81 0 62.8 0 40.5S18.2 0 40.5 0C62.8 0 81 18.2 81 40.5S62.8 81 40.5 81zM40.5 1C18.7 1 1 18.7 1 40.5S18.7 80 40.5 80 80 62.3 80 40.5 62.3 1 40.5 1z" />
                            <path d="M48.7 48h-8.3V23h-1v25h-7.1c-0.6 0-1 0.3-0.7 0.7l8.2 8.7c0.3 0.3 1.1 0.3 1.4 0l8.2-8.7C49.7 48.3 49.3 48 48.7 48z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default What
