import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';
import { NavLink,useNavigate } from 'react-router-dom';
import Image from './Image';
import './Home.css';

import ProductDetails from './ProductDetails';
const Home = () => {
    const [datas, setDatas] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();
//   const { addToCart } = useCart();

    useEffect(() => {
        setisLoading(true);
      
        axios.get("https://dummyjson.com/products")
          .then(res => {
            const products = res.data?.products || [];
      
            setDatas(products);
            setisLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setDatas([]);
            setisLoading(false);
          });
      }, []);
      const handleViewDetails = (product) => {
        setSelectedProduct(product);
        navigate(`/products/${product.id}`);  // Use navigate instead of history.push
      };
    // const handleAddToCart = (product) => {
    //     addToCart(product);
    //     console.log(`Added product with ID ${product.id} to the cart`);
    //   };
  if (isLoading) {
    return <p>IsLoading...</p>;
  }

  return (
    <>
        <Image/>
    
    <div className="load shadow-lg bg-white rounded">
    <div className='heading' style={{ fontWeight: 'bold', textAlign: 'center',fontSize:'larger' }}>
  Products
</div>
    {datas.length > 0 ? (
      <div className="container">
        {datas.map((data) => (
          <div className='container1' key={data.id}>
            <div className="container2" style={{ width: '20rem' }}>
              <img src={data.thumbnail} className="card" height='250px' alt={data.category} />
              <div className="cards">
                <h5 className="title">{data.title.substring(0, 12)}</h5>
                <div>${data.price}</div>
                {/* <NavLink to={`/product/${data.id} `}className="details">View Details</NavLink> */}
                <button
                      onClick={() => handleViewDetails(data)}
                      className="details"
                    >
                      View Details
                    </button>
                <button  className="button">Add to Cart</button>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    ) : (
      <p>No products found.</p>
    )}
  </div>
  {selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}
  </>
  );
};

export default Home;