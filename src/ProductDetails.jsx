
// import React from 'react';

// const ProductDetails = ({ product }) => {
//   return (
//     <div className="product-details">
//       <img src={product.thumbnail} alt={product.category} />
//       <h2>{product.title}</h2>
//       <p>${product.price}</p>
//       {/* Add other details here */}
//     </div>
//   );
// };

// export default ProductDetails;
// ProductDetails.js

// ProductDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams for v6

const ProductDetails = () => {
  const { id } = useParams(); // Use useParams for v6
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the productId
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className='product' style={{alignItems:'center',textAlign:'center',marginTop:'100px'}}>
      <img src={product.thumbnail} alt={product.category} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductDetails;
