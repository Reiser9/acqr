import React from 'react';

import './App.css';

const App = () => {
    return(
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__inner'>
                        <a href="/" className='header__logo'>
                            <img src='./assets/img/logo.svg' alt='logo' className='img' />
                        </a>

                        <div className='header__wrapper'>
                            <a href="https://discord.com/invite/gEFgd9at6C" target="_blanc" className='header__link'>
                                <img src='./assets/img/discord.svg' alt='discord' className='header__link--icon' />

                                Discord
                            </a>

                            <a href="https://twitter.com/acqr_co" target="_blanc" className='header__link'>
                                <img src='./assets/img/twitter.svg' alt='twitter' className='header__link--icon' />

                                Twitter
                            </a>

                            <a href="https://luxurious-truffle-c41.notion.site/ACQR-Acquire-af9a137a7fd846feb082219762853334" target="_blanc" className='header__link'>
                                <img src='./assets/img/file.svg' alt='docs' className='header__link--icon' />

                                Docs
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <section className='main'>
                <div className='container'>
                    <div className='main__inner'>
                        <div className='main__content'>
                            <h2 className='main__title'>
                                <img src='./assets/img/main-text.svg' alt='img' className='main__decor' />

                                Get rewarded for acquiring new skills in <span className='gradient3'>Web3</span>
                            </h2>

                            <p className='main__text'>
                                ACQR helps you &lsquo;acquire&rsquo; new skills from different web3 protocols and rewards you for completing specific on and off-chain tasks.
                            </p>

                            <a href="https://luxurious-truffle-c41.notion.site/ACQR-Acquire-af9a137a7fd846feb082219762853334" target="_blanc" className='button main__button'>
                                Learn more
                            </a>
                        </div>

                        <div className='main__img--inner'>
                            <img src='./assets/img/main-img.svg' alt='img' className='img' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='mission'>
                <div className='container'>
                    <div className='mission__inner'>
                        <h2 className='mission__title'>
                            <img src='./assets/img/missions.svg' alt='img' className='mission__title--img' />

                            Our Mission
                        </h2>

                        <p className='mission__subtitle purple'>
                            Onboarding the next 1 billion web3 users.
                        </p>

                        <p className='mission__text'>
                            At ACQR, we&rsquo;re building an on-chain platform with tools to onboard the next generation of web3 users while allowing protocols to bootstrap their community - from discovery to onboarding at scale.
                        </p>
                    </div>
                </div>
            </section>

            <section className='block'>
                <div className='container'>
                    <div className='block__inner'>
                        <h2 className='block__title'>
                            Here&rsquo;s the thing…
                        </h2>

                        <p className='block__text'>
                            Most <span className='gradient2'>web3 protocols</span> are left in the dust because they fail to acquire new users. That&rsquo;s because web3 needs web3 marketing and user acquisition strategies. 
                        </p>

                        <div className='block__item'>
                            <div className='block__item--img--inner'>
                                <img src='./assets/img/img1.png' alt='img' className='img' />
                            </div>

                            <div className='block__item--text--inner'>
                                <h3 className='block__item--title'>
                                    Participants &gt; Speculators
                                </h3>

                                <p className='block__item--text'>
                                    Web3 is often tough to navigate and difficult to comprehend for new users. Instead of spectators and speculators, we should reward users who participate and use the many web3 protocols available today whether that&rsquo;s in DeFi, NFTs, or the next big thing. 
                                </p>
                            </div>
                        </div>

                        <div className='block__item'>
                            <div className='block__item--text--inner'>
                                <h3 className='block__item--title'>
                                    ACQR More Skills in Web3
                                </h3>

                                <p className='block__item--text'>
                                    Both new and experienced web3 users can acquire new skills in the evolving web3 space. Best of all, you will be rewarded for taking action.
                                </p>
                            </div>

                            <div className='block__item--img--inner'>
                                <img src='./assets/img/img2.png' alt='img' className='img' />
                            </div>
                        </div>

                        <div className='block__item'>
                            <div className='block__item--img--inner'>
                                <img src='./assets/img/img3.png' alt='img' className='img' />
                            </div>

                            <div className='block__item--text--inner'>
                                <h3 className='block__item--title'>
                                    On-Chain Credentials and Rewards
                                </h3>

                                <p className='block__item--text'>
                                    ACQR utilizes an on-chain infrastructure to build effective and powerful campaigns to ensure direct usage of protocols and track on-chain results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='faq'>
                <div className='container'>
                    <div className='faq__inner'>
                        <div className='faq__item'>
                            <img src='./assets/img/circles.svg' alt='img' className='faq__item--img1' />

                            <h3 className='faq__item--title'>
                                Are you a web3 user?
                            </h3>

                            <p className='faq__item--text'>
                                Acquire a <span className='bold ttu'>mission</span> and get rewarded for completing on-chain tasks from different protocols!
                            </p>

                            <button className='button faq__item--button coming__soon'>
                                Coming soon
                            </button>
                        </div>

                        <div className='faq__item'>
                            <img src='./assets/img/donut.svg' alt='img' className='faq__item--img2' />

                            <h3 className='faq__item--title'>
                                Are you  a web3 project?
                            </h3>

                            <p className='faq__item--text'>
                                Let&rsquo;s get you set up on a campaign to grow your community and acquire more users!
                            </p>

                            <a href="https://luxurious-truffle-c41.notion.site/ACQR-Acquire-af9a137a7fd846feb082219762853334" className='button faq__item--button' target="_blanc">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='discord'>
                <div className='container'>
                    <div className='discord__inner'>
                        <img src='./assets/img/stars1.svg' alt='stars' className='discord__stars discord__stars1' />
                        <img src='./assets/img/stars2.svg' alt='stars' className='discord__stars discord__stars2' />

                        <div className='discord__img--inner'>
                            <img src='./assets/img/discord-footer.png' alt='discord' className='discord__img' />
                        </div>

                        <h2 className='discord__title'>
                            Join the <span className='gradient'>ACQR</span> community on Discord
                        </h2>

                        <a href="https://discord.com/invite/gEFgd9at6C" target="_blanc" className='button discord__button'>
                            Join
                        </a>
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <div className='container'>
                    <div className='footer__inner'>
                        <a href="/" className='footer__logo'>
                            <img src='./assets/img/logo.svg' alt='logo' className='img' />
                        </a>

                        <p className='footer__copy'>
                            All Rights Reserved - Copyright 2022 - ACQR Labs
                        </p>

                        <div className='header__wrapper'>
                            <a href="https://discord.com/invite/gEFgd9at6C" target="_blanc" className='header__link'>
                                <img src='./assets/img/discord.svg' alt='discord' className='header__link--icon' />

                                Discord
                            </a>

                            <a href="https://twitter.com/acqr_co" target="_blanc" className='header__link'>
                                <img src='./assets/img/twitter.svg' alt='twitter' className='header__link--icon' />

                                Twitter
                            </a>

                            <a href="https://luxurious-truffle-c41.notion.site/ACQR-Acquire-af9a137a7fd846feb082219762853334" target="_blanc" className='header__link'>
                                <img src='./assets/img/file.svg' alt='docs' className='header__link--icon' />

                                Docs
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;