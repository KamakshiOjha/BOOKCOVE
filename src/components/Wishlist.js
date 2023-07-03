import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Wishlist.css';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item, price) => {
    setWishlist([...wishlist, { item, price }]);
    console.log(`Added ${item} to the wishlist.`);
    alert(`Added ${item} to the wishlist.`);
  };

  const removeFromWishlist = (item) => {
    const updatedWishlist = wishlist.filter((wish) => wish.item !== item);
    setWishlist(updatedWishlist);
    console.log(`Removed ${item} from the wishlist.`);
  };

  const calculateTotalBill = () => {
    const subTotal = wishlist.reduce((total, { price }) => total + price, 0);
    const discountPercentage = 10; // Assuming a 10% discount
    const discount = (subTotal * discountPercentage) / 100;
    const totalBill = subTotal - discount;
    return totalBill.toFixed(2);
  };

  return (
    <div>
      <div className="heading7_w">
          <div className="heading_in7_w">
          <p className="heading17_w">
            <Link to="/cart">WISHLIST</Link>
            </p>
          {/* <div className="hidden_log7_c">
             <p className="heading27_c">
                <Link to="/">BOOKCOVE</Link>
             </p>
         </div> */}
        </div>
     </div>
      <div className='para_w'>
        {wishlist.length === 0 ? (
          <p >Your wishlist is empty.</p>
        ) : (
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>
                {item.item} - ${item.price}
                <button className='button_author_w' onClick={() => removeFromWishlist(item.item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='div_main_w'>
        <div className='div_w_1'>
          <img className='image_w' src={require("./Category_book/bibliogrphy.jpg")} alt="Book Cover" />
          <button className='button_author_w' onClick={() => addToWishlist('Book 1', 19.99)}>Add to Wishlist</button>
        </div>
        <div className='div_w_2'>
          <img className='image_w' src={require("./Category_book/bibliogrphy.jpg")} alt="Book Cover" />
          <button className='button_author_w' onClick={() => addToWishlist('Book 2', 24.99)}>Add to Wishlist</button>
        </div>
        <div className='div_w_1'>
          <img className='image_w' src={require("./Category_book/bibliogrphy.jpg")} alt="Book Cover" />
          <button className='button_author_w' onClick={() => addToWishlist('Book 3', 19.99)}>Add to Wishlist</button>
        </div>
        <div className='div_w_2'>
          <img className='image_w' src={require("./Category_book/bibliogrphy.jpg")} alt="Book Cover" />
          <button className='button_author_w' onClick={() => addToWishlist('Book 4', 24.99)}>Add to Wishlist</button>
        </div>
      </div>
      {wishlist.length > 0 && (
        <div className='bill_w'>
          <p>Total Bill: ${calculateTotalBill()}</p>
        </div>
      )}
      {wishlist.length > 0 && (
        <div className='checkout_w'>
          <Link className='button_author_wc' href="/cart">Go to Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Wishlist;



// import React, { useState } from 'react';
// import './Wishlist.css';
// import { Link } from 'react-router-dom';

// function Wishlist() {
//   // Initialize an empty wishlist array
//   const [wishlist, setWishlist] = useState([]);

//   // Function to add an item to the wishlist
//   const addToWishlist = (item, price) => {
//     setWishlist([...wishlist, { item, price }]);
//     console.log(`Added ${item} to the wishlist.`);
//     alert(`Added ${item} to the wishlist.`);
//   };

//   // Function to remove an item from the wishlist
//   const removeFromWishlist = (item) => {
//     const updatedWishlist = wishlist.filter((wish) => wish.item !== item);
//     setWishlist(updatedWishlist);
//     console.log(`Removed ${item} from the wishlist.`);
//   };

//   // Calculate the total bill with discount
//   const calculateTotalBill = () => {
//     const subTotal = wishlist.reduce((total, { price }) => total + price, 0);
//     const discountPercentage = 10; // Assuming a 10% discount
//     const discount = (subTotal * discountPercentage) / 100;
//     const totalBill = subTotal - discount;
//     return totalBill.toFixed(2);
//   };

//   return (
//     <div>
//       <div className="Heading7_w">
//          <div className="heading_in7_w">
//           <p className="heading17_w">
//             <Link to="/cart">WISHLIST</Link>
//            </p>
//           {/* <div className="hidden_log7_c">
//             <p className="heading27_c">
//                <Link to="/">BOOKCOVE</Link>
//              </p>
//          </div> */}
//         </div>
//       </div>
//       <div className="wishlist-items">
//         {wishlist.length === 0 ? (
//           <p>Your wishlist is empty.</p>
//         ) : (
//           <ul>
//             {wishlist.map((item, index) => (
//               <li key={index}>
//                 {item.item} - ${item.price}
//                 <button onClick={() => removeFromWishlist(item.item)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className="book-covers">
//         {/* Render book covers and "Add to Wishlist" button */}
//         <div className="book-cover">
//           {/* Replace with actual book cover */}
//           <img src="book-cover1.jpg" alt="Book Cover" />
//           <button onClick={() => addToWishlist('Book 1', 19.99)}>Add to Wishlist</button>
//         </div>
//         <div className="book-cover">
//           {/* Replace with actual book cover */}
//           <img src="book-cover2.jpg" alt="Book Cover" />
//           <button onClick={() => addToWishlist('Book 2', 24.99)}>Add to Wishlist</button>
//         </div>
//         {/* Add more book covers and buttons as needed */}
//       </div>
//       {wishlist.length > 0 && (
//         <div className="total-bill">
//           <p>Total Bill: ${calculateTotalBill()}</p>
//         </div>
//       )}
//       {wishlist.length > 0 && (
//         <div className='flex_in hide2'>
//           <Link to='/cart' className="discover2">Go to Checkout</Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Wishlist;
