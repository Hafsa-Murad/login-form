// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';

// const Home = () => {
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const [products, setProducts] = useState('');
//   const navigate = useNavigate();
//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem('loggedInUser'))
//   }, [])
//   const handleLogOut = (e) => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User LoggedOut');
//     setTimeout(() =>{
//       navigate('/login'); 
//     },1000);

//     const fetchProduct = async () => {
//     try{
//       const url = "http://localhost:8000/products";
//       const header = {
//         header: {
//           "Authorization": localStorage.getItem('token')
//         }
//       }
//       const response = await fetch(url, headers);
//       const result = await response.json();
//       console.log(result);
//       setProducts(result);
//     }
//     catch(err){
//       handleError(err);
//     }
//     }
//   }
  
//   return (
//     <div>
//       <h1>{loggedInUser}</h1>
//       <button onClick={handleLogOut}>LogOut</button>
//       <div>
//         {
//           products && products?.map((item, index) => (
//             <ul key={index}>
//               <span>{item.name} : {item.price}</span>
//             </ul>
//           ))
//         }
//       </div>
//       <ToastContainer />
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));

    const fetchProducts = async () => {
      try {
        const url = "http://localhost:8000/products";
        const headers = {
          headers: {
            "Authorization": localStorage.getItem('token')
          }
        };
        const response = await fetch(url, headers);
        const result = await response.json();
        console.log(result);
        setProducts(result);
      } catch (err) {
        handleError(err);
      }
    };

    fetchProducts();
  }, []);

  const handleLogOut = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User LoggedOut');
    setTimeout(() => {
      navigate('/login'); 
    }, 1000);
  };

  return (
    <div>
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogOut}>LogOut</button>
      <div>
        {products && products.map((item, index) => (
          <ul key={index}>
            <span>{item.name} : {item.price}</span>
          </ul>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;

