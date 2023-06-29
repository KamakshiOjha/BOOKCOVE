import React from 'react'
import { Link } from 'react-router-dom'
import './Author.css';

export default function Author() {
    const authors = [
        {
            id: 1,
            name: 'Colleen Hoover',
            // Websitehttps:"//colleenhoover.com",
            // Twitter: "colleenhoover",
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Peter Attia is a Canadian-American physician known for his medical practice that focuses on the science of longevity. He is also the first person to make the round-trip swim from Maui and Lanai.',
        },
          {
            id: 2,
            name: 'Peter Attia',
            Genre: "Health",
            Influences:"aging",
            description: 'Embark on mind-bending adventures into the future and beyond. Explore futuristic concepts, discuss advanced technologies, and connect with fellow sci-fi aficionados.',
        },
          {
            id: 3,
            name: 'James Clear',
            Genre: "",
            Influences:"",
            description: 'James Clear is an expert on habits and decision making. He made his name as the author of one of the fastest-growing email newsletters in history, which grew from zero to 100,000 subscribers in under two years. In addition to writing, He is regular speaker at Fortune 500 companies. Previous clients include Capital One, Cisco, General Electric, Honda, Intel, LinkedIn, Lululemon, McKinsey & Company, Merrill Lynch and many more',
 
        },
          {
            id: 4,
            name: 'Romance Book Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Indulge in tales of love, passion, and heartwarming connections. Explore diverse romance subgenres, share favorite romantic moments, and connect with fellow hopeless romantics.',
        },
        {
            id: 5,
            name: 'Literary Gems Book Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'A vibrant book club for literature enthusiasts. Explore classic and contemporary literary works while engaging in thoughtful discussions.',
 
        },
          {
            id: 6,
            name: 'Thriller Seekers Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Dive into the thrilling world of suspense and mystery novels. Unravel gripping plots and join fellow readers in analyzing the twists and turns.',
 
        },
          {
            id: 7,
            name: 'Young Adult Adventures Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Embark on exciting journeys through the realm of young adult fiction. Discover captivating stories, share favorite characters, and connect with fellow young adult literature enthusiasts.',

        },
          {
            id: 8,
            name: 'Sci-Fi Explorers Society',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Delve into the vast universe of science fiction. Discuss mind-bending concepts, futuristic technologies, and epic space sagas with fellow sci-fi fans.',
 
        },
          {
            id: 9,
            name: 'Contemporary Reads Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Immerse yourself in the latest works of contemporary fiction. Explore diverse perspectives, thought-provoking themes, and engage in lively discussions.',

        },
        {
            id: 10,
            name: 'Crime Solvers Book Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Dive into the thrilling world of crime and detective novels. Analyze clues, discuss gripping investigations, and connect with fellow crime fiction aficionados.',

          },
          {
            id: 11,
            name: 'Historical Fiction Book Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Explore captivating tales set in different historical periods. Dive into the past, discuss significant events, and connect with fellow history enthusiasts.',

          },
          {
            id: 12,
            name: 'Poetry Circle',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Immerse yourself in the beauty of poetic expressions. Discuss famous poems, share original works, and connect with fellow poetry lovers.',

          },
          {
            id: 13,
            name: 'Non-Fiction Explorers Club',
            Genre: "Fiction, Romance, Thriller",
            Influences:"Positive people. Good music. Author Tiffanie DeBartolo.",
            description: 'Embark on a journey through the realm of non-fiction literature. Discuss thought-provoking topics, learn from informative books, and connect with fellow non-fiction enthusiasts.',

          },
      ];
  return (
    <>
    <div className="Heading2_au">
        <div className="heading_in2_au">
            <p className="heading12_au"><Link to="/launch_auew">WORDSMITHS</Link> </p>
        </div>
    </div>
    {/* <div className='author'>
        <div className='author_in'>
            <div className='author_1'>

            </div>
            <div className='author_2'>

            </div>
            <div cla>

            </div>
        </div>
    </div> */}
     <div className="author-page">
    <div className="author-list">
        {authors.map(author => (
          <div key={author.id} className="author-item">
            <h3 className='h3_author'>{author.name}</h3>
            <p className='p_author_w'>{author.Genre}</p>
            <p className='p_author_w'>{author.Influences}</p>
            <p className='p_author'>{author.description}</p>
            <button className='button_author'>Discover</button>
            
          </div>
        ))}
      </div>
      </div>
    
    
    </>
  )
}
