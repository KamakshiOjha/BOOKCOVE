import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';

export default function About(props) {
  return (
    <>
     <div className="Heading7">
        <div className="heading_in7">
            <p className="heading17"><Link to="">ABOUT US</Link> </p>
            <div className="hidden_log7">
                <p className="heading27"><Link to="">BOOKCOVE</Link> </p>
            </div>
        </div>
    </div>
    <div className="middle17">
        <div className="image17">

        </div>
    </div>
    <div className="container">
        <div className="circle">
          {/* <!-- <h1 className="name">John Doe</h1> --> */}
        </div>
        <div className="content1">
            <h2 className="h2_tag03">ABOUT <Link to="/">BOOKCOVE</Link></h2>
            <p className="para03">Welcome to <Link to="/">BOOKCOVE</Link>, your go-to destination for all books!</p>
            <p className="para13">At <Link to="/">BOOKCOVE</Link>, we believe that every book deserves a captivating cover. We are a passionate team of designers and book enthusiasts dedicated to helping authors and publishers create visually stunning and engaging book covers that captivate readers and reflect the essence of their stories.</p>
           
        </div>
        
      </div>
      <div className="container">
        <div className="content1">
            <h2 className="h2_tag03">OUR MISSION</h2>
            <p className="para03">At Book Cove, our mission is to inspire and connect book lovers from all around the world. We believe in the power of books to educate, entertain, and transform lives. Whether you're an avid reader, a casual bookworm, or just starting your reading journey, we're here to help you discover new books, share recommendations, and foster a vibrant reading community.</p>

        </div>
        <div className="circle1">
            {/* <!-- <h1 className="name">John Doe</h1> --> */}
          </div>
        
      </div>
      <div className="container">
        <div className="circle2">
            {/* <!-- <h1 className="name">John Doe</h1> --> */}
          </div>
        <div className="content1">
            <h2 className="h2_tag03">WHAT WE OFFER</h2>
            <p className="para03">Book Cove offers a wide range of services and features to enhance your reading experience:</p>
            <ul className="list">
                <li >Explore an extensive collection of books across various genres, from bestsellers to hidden gems.</li>
                <li>Read detailed book reviews and ratings from fellow book enthusiasts.</li>
                <li>Create your personal bookshelf to keep track of your reading progress and favorite books.</li>
                <li>Join book clubs and engage in lively discussions with like-minded readers.</li>
                <li>Discover author interviews, literary events, and the latest book news.</li>
                <li>Shop for books, e-books, and book-related merchandise through our online store.</li>
              </ul>
        </div>
      </div>

      <div className="container">
        <div className="content1">
            <h2 className="h2_tag03">GET INVOLVED</h2>
            <p className="para03">We encourage you to be an active part of the Book Cove community:</p>
            <ul className="list">
                <li>Sign up for a free account to unlock additional features and personalize your Book Cove experience.</li>
                <li>Share your book reviews and recommendations to help others discover great reads.</li>
                <li>Connect with fellow readers, join book clubs, and participate in engaging discussions.</li>
                <li>Follow us on social media for updates, literary quotes, and exclusive content.</li>
              </ul>
              
        </div>
        <div className="circle3">
            {/* <!-- <h1 className="name">John Doe</h1> --> */}
          </div>
      </div>
 
      <h2 className="h2_tag02">Thank you for choosing Book Cove as your literary companion. Start exploring, immerse yourself in captivating stories, and let the magic of books transport you to new worlds!</h2>
      
      <div className="Heading7_a">
        <div className="heading_in7_a">
        <h3 className='h3_tag_a'>Tell us about your experience</h3>
        <Link to='/review' className='review-button'>Add review</Link>
        </div>
    </div>
      

    </>
  )
}
