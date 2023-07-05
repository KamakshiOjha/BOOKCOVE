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
            name: 'J.K. Rowling',
            Genre: "Fantasy",
            Influences:"J.R.R. Tolkien, Jane Austen, Roald Dahl",
            description: 'J.K. Rowling is best known for creating the Harry Potter series, which became a worldwide phenomenon. Her books combine elements of fantasy, adventure, and coming-of-age narratives, and have captivated readers of all ages.'
        },
        {
            id: 5,
            name: 'Stephen King',
            Genre: "Horror, Thriller",
            Influences:"H.P. Lovecraft, Edgar Allan Poe, Shirley Jackson",
            description: 'Stephen King is a master of horror and suspense. His novels and short stories often delve into the darker aspects of human nature, blending supernatural elements with psychological realism. Many of his works have been adapted into successful films and television series.'
 
        },
          {
            id: 6,
            name: 'Agatha Christie',
            Genre: "Mystery, Crime",
            Influences:"Arthur Conan Doyle, Dorothy L. Sayers, Edgar Allan Poe",
            description: 'Agatha Christie is often referred to as the "Queen of Crime." Her novels and short stories featuring detectives such as Hercule Poirot and Miss Marple have become classics of the mystery genre. Christies intricate plots and skillful characterizations have made her one of the best-selling authors of all time.',
 
        },
          {
            id: 7,
            name: 'George R.R. Martin',
            Genre: "Fantasy",
            Influences:"J.R.R. Tolkien, Robert E. Howard, Jack Vance",
            description: 'George R.R. Martin is known for his epic fantasy series, "A Song of Ice and Fire," which was adapted into the popular TV series "Game of Thrones." His books are characterized by intricate world-building, complex characters, and unpredictable plot twists.',

        },
          {
            id: 8,
            name: 'Haruki Murakami',
            Genre: "Magical Realism, Literary Fiction",
            Influences:"Franz Kafka, Fyodor Dostoevsky, Raymond Chandler",
            description: 'Haruki Murakami is a Japanese author known for his unique blend of surrealism, melancholy, and philosophical musings. His novels often feature ordinary characters caught up in extraordinary and dreamlike situations. Murakamis works have gained international acclaim and have a dedicated following.',
 
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
            name: 'Toni Morrison',
            Genre: "Literary Fiction",
            Influences:"William Faulkner, Gabriel García Márquez, Zora Neale Hurston",
            description: ' Toni Morrison was a renowned American author and Nobel laureate. Her novels explore themes of race, identity, and the African American experience. Morrisons powerful storytelling and poetic prose have made her a significant voice in contemporary literature.',

          },
          {
            id: 11,
            name: 'Arundhati Roy',
            Genre: "Literary Fiction, Non-fiction",
            Influences:"Gabriel García Márquez, Toni Morrison, Mahasweta Devi",
            description: ': Arundhati Roy gained international recognition with her debut novel, "The God of Small Things," which won the Booker Prize. Her writing often explores social and political issues in India, including caste, gender, and environmental activism. Roy powerful prose and thought-provoking narratives have made her a prominent voice in Indian literature.',

          },
          {
            id: 12,
            name: 'R.K. Narayan',
            Genre: "Literary Fiction",
            Influences:"Mulk Raj Anand, E.M. Forster, Leo Tolstoy",
            description: 'R.K. Narayan is regarded as one of Indias greatest English-language writers. His novels, such as "Swami and Friends" and "The Guide," capture the essence of everyday life in South India. Narayans humorous and insightful storytelling, combined with his vivid portrayal of characters and settings, have made him an enduring figure in Indian literature.',

          },
          {
            id: 13,
            name: 'Amitav Ghosh',
            Genre: "Historical Fiction, Literary Fiction",
            Influences:"Gabriel García Márquez, Italo Calvino, V.S. Naipaul.",
            description: 'Amitav Ghosh is known for his sweeping historical novels that explore themes of culture, identity, and colonialism. His acclaimed works include "The Shadow Lines" and the "Ibis Trilogy," which includes "Sea of Poppies," "River of Smoke," and "Flood of Fire." Ghoshs writing combines meticulous research with captivating storytelling, offering rich insights into Indias past.',

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
