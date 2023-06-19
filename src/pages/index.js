import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../../components';
import {client} from '../../lib/client';


const Home = ({products, bannerData}) => (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Discover all new products</h2>
      <p>Sit in Style Discover the Ultimate Chair Collection for Comfort and Elegance</p>
    </div>

    <div className="products-container">
      {
        products?.map(
         (product)=>
         <Product key={product._id} product={product}/>
          )
      }
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
  </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }


export default Home;