import React, { useState } from 'react';
import './Localtreasure.css';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const LocalTreasuresPage = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState('');
  const [storeName, setStoreName] = useState('');
  const [note, setNote] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [isRequestSubmitted, setRequestSubmitted] = useState(false);

  const handleAddBook = () => {
    setBooks([...books, { name: newBook, price: bookPrice }]);
    setNewBook('');
    setBookPrice('');
  };

  const handleRemoveBook = (book) => {
    
    const updatedBooks = books.filter((b) => b !== book);
    setBooks(updatedBooks);
    
  };

  const handleJoinRequest = (e) => {
    e.preventDefault();
    // Handle the join request submission (e.g., send to server, store in database)
    // Reset the form fields
    setStoreName('');
    setNote('');
    setPhoneNumber('');
    setLocation('');
    setBookPrice('');
    setRequestSubmitted(true);
  };

  return (
    <div>
      <div className="Heading7_l">
        <div className="heading_in7_l">
          <p className="heading17_l">
            <Link to="/localtreasure">LOCAL TREASURE</Link>{' '}
          </p>
          <div className="hidden_log7_l">
            <p className="heading27_l">
              <Link to="/">BOOKCOVE</Link>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="local_write">
        <p>
          <h2>WHAT IS <Link to='/launch_new'>LOCAL TREASURE?</Link></h2>
        </p>
        <p className='para_lt'>
          "Local Treasures" not only celebrates the hidden gems of Bookcove but also serves as a platform for supporting
          small authors and businesses in the literary world.
        </p>
        <p className='para_lt'>
          At Bookcove, we take pride in our unwavering support for small authors and businesses, no matter the age or how
          small a business is, or even if it is just a beginning. We wholeheartedly embrace collaboration and offer a
          nurturing environment for new authors to flourish. Whether you're a budding writer or a small shop seeking to
          collaborate, Bookcove welcomes you with open arms. Our platform provides an opportunity for new authors to
          publish their books, connecting them with readers and helping them grow as successful authors. Together, let's
          foster creativity, community, and a bright future for aspiring talents in the literary world.
        </p>
        <h2 className="h2_local">START YOUR JOURNEY TODAY!</h2>
      </div>
      <div className="whole_local">
        <div className="form-container">
          <input
            type="text"
            value={newBook}
            onChange={(e) => setNewBook(e.target.value)}
            className="input-field"
            placeholder="Enter book name"
          />

          <input
            type="text"
            value={bookPrice}
            onChange={(e) => setBookPrice(e.target.value)}
            className="input-field"
            placeholder="Enter book price"
          />
          <button onClick={handleAddBook} className='button_log_l'>
            Add Book
          </button>
        </div>
        <ul className="book-list">
          {books.map((book, index) => (
            <li key={index}>
              {book.name} - {book.price}
              <button className='button_log_l' onClick={() => handleRemoveBook(book)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="join-request-form">
          <form onSubmit={handleJoinRequest}>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="input_field_1"
              placeholder="Bookstore or Author Name"
              required
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="input_field_1"
              placeholder="A small note about your bookstore or yourself"
              required
            ></textarea>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input_field_1"
              placeholder="Location"
              required
            />
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input_field_1"
              placeholder="Enter phone number"
              required
            />
            <button type="submit" className='button_log_l' >
              Submit Request
            </button>
          </form>
          
        </div>
        
      </div>
      <div className='request'>
        {isRequestSubmitted && <p className="request-submitted-message">Request submitted successfully!</p>}
        </div>
    </div>
  );
};

export default LocalTreasuresPage;
