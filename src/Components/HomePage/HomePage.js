import React from 'react';
import './HomePage.css';
import Product from './Product';

function HomePage() {
    return (
        <div className='home'>
            <img className='home__img' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            <div className='home__row'>
                <Product
                    id="1726812"
                    title="NZXT H510 Compact Mid-Tower ATX Computer Cabinet"
                    price={59.9}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg" />
                <Product
                    id="1726812"
                    title="NZXT H510 Compact Mid-Tower ATX Computer Cabinet"
                    price={59.9}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg" />
            </div>

            <div className="home__row">
                <Product
                    id="1726812"
                    title="NZXT H510 Compact Mid-Tower ATX Computer Cabinet"
                    price={59.9}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg" />
                <Product
                    id="1726812"
                    title="NZXT H510 Compact Mid-Tower ATX Computer Cabinet"
                    price={59.9}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg" />
                <Product
                    id="1726812"
                    title="NZXT H510 Compact Mid-Tower ATX Computer Cabinet"
                    price={59.9}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg" />
            </div>
            <div className='home__row'>
                <Product
                    id="1726812"
                    title="NZXT H510 Compact Mid-Tower ATX Computer Cabinet"
                    price={59.9}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/510cWHKXlrL._AC_UL320_SR320,320_.jpg" />
            </div>

        </div>


    );
}

export default HomePage;