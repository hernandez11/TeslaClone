import React from 'react';
import '../Styling/Home.css';
import { HomeHero, HomeHero_header, HomeHero_subtitle, HomeHero_button } from '../Components/HomeHero';

function Home() {
    return (
        <div className='home'>
            <HomeHero background='/ImageAssets/Home_hero_0.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Model S</HomeHero_header>
                <HomeHero_subtitle> Order Online for <a href='' className='homHero-subStyle'>Touchless Delivery</a></HomeHero_subtitle>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>CUSTOM ORDER</HomeHero_button>
                    <HomeHero_button className='gry-bg txt-color-blk'>EXISTING INVENTORY</HomeHero_button>
                </div>
            </HomeHero>
            <HomeHero background='/ImageAssets/Home_hero_1.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Model Y</HomeHero_header>
                <HomeHero_subtitle> Order Online for <a href='' className='homHero-subStyle'>Touchless Delivery</a></HomeHero_subtitle>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>CUSTOM ORDER</HomeHero_button>
                    <HomeHero_button className='gry-bg txt-color-blk'>EXISTING INVENTORY</HomeHero_button>
                </div>
            </HomeHero>
            <HomeHero background='/ImageAssets/Home_hero_2.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Model 3</HomeHero_header>
                <HomeHero_subtitle> Order Online for <a href='' className='homHero-subStyle'>Touchless Delivery</a></HomeHero_subtitle>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>CUSTOM ORDER</HomeHero_button>
                    <HomeHero_button className='gry-bg txt-color-blk'>EXISTING INVENTORY</HomeHero_button>
                </div>
            </HomeHero>
            <HomeHero background='/ImageAssets/Home_hero_3.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Model X</HomeHero_header>
                <HomeHero_subtitle> Order Online for <a href='' className='homHero-subStyle'>Touchless Delivery</a></HomeHero_subtitle>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>CUSTOM ORDER</HomeHero_button>
                    <HomeHero_button className='gry-bg txt-color-blk'>EXISTING INVENTORY</HomeHero_button>
                </div>
            </HomeHero>
            <HomeHero background='/ImageAssets/Home_hero_solarP.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Lowest Cost Solar Panels in America</HomeHero_header>
                <HomeHero_subtitle>Money-back Guarantee</HomeHero_subtitle>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>CUSTOM ORDER</HomeHero_button>
                    <HomeHero_button className='gry-bg txt-color-blk'>EXISTING INVENTORY</HomeHero_button>
                </div>
            </HomeHero>
            <HomeHero background='/ImageAssets/Home_hero_solarRoof.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Solar for New Roofs</HomeHero_header>
                <HomeHero_subtitle>Solar Roof Costs Less Than a New Roof Plus Solar Panels</HomeHero_subtitle>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>CUSTOM ORDER</HomeHero_button>
                    <HomeHero_button className='gry-bg txt-color-blk'>EXISTING INVENTORY</HomeHero_button>
                </div>
            </HomeHero>
            <HomeHero background='/ImageAssets/Home_hero_accessories.jpg'>
                <div className='homeHero_txtContainer'>
                <HomeHero_header>Accessories</HomeHero_header>
                </div>

                <div className='homeHero_butttonContainer'>
                    <HomeHero_button className='blk-bg txt-color-main'>SHOP NOW</HomeHero_button>
                </div>
            </HomeHero>
        </div>
    )
}

export default Home;