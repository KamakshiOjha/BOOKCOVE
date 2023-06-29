import React, { useState } from 'react';
import './Joinclub.css';
import { Link } from 'react-router-dom';

function JoinClubPage() {
  const [joinedClub, setJoinedClub] = useState(null);

  const groups = [
    {
        id: 1,
        name: 'Fantasy Book Club',
        description: 'Immerse yourself in the enchanting realms of fantasy literature. Journey through magical worlds and discuss epic quests with fellow fantasy enthusiasts.',
        location: 'Dragons Lair Bookstore, 789 Castle Avenue',
        achievements: 'Hosted a successful Tolkien-themed event and organized a fantasy book exchange.',
        membersJoined: 15,
    spotsAvailable: 5,
    },
      {
        id: 2,
        name: 'Sci-Fi Book Club',
        description: 'Embark on mind-bending adventures into the future and beyond. Explore futuristic concepts, discuss advanced technologies, and connect with fellow sci-fi aficionados.',
        location: 'Stellar Science Center, 123 Galaxy Boulevard',
        achievements: 'Organized a sci-fi movie marathon and collaborated with renowned sci-fi authors for exclusive book signings.',
        membersJoined: 12,
        spotsAvailable: 8,
    },
      {
        id: 3,
        name: 'Mystery Book Club',
        description: 'Unravel gripping mysteries and delve into the world of suspense. Analyze clues, discuss thrilling plot twists, and engage in captivating conversations with fellow mystery lovers.',
        location: 'Secrets & Clues Library, 456 Enigma Street',
        achievements: 'Hosted a successful murder mystery party and organized a book donation drive for local detective novels.',
        membersJoined: 20,
        spotsAvailable: 4,  
    },
      {
        id: 4,
        name: 'Romance Book Club',
        description: 'Indulge in tales of love, passion, and heartwarming connections. Explore diverse romance subgenres, share favorite romantic moments, and connect with fellow hopeless romantics.',
        location: 'Sweet Serenade Café, 789 Love Lane',
        achievements: 'Hosted a romance author panel discussion and initiated a book lending program for romantic classics.',
        membersJoined: 8,
        spotsAvailable: 12,  
    },
    {
        id: 5,
        name: 'Literary Gems Book Club',
        description: 'A vibrant book club for literature enthusiasts. Explore classic and contemporary literary works while engaging in thoughtful discussions.',
        location: 'City Library, 123 Main Street',
        achievements: 'Winner of the Best Book Club Award 2022',
        membersJoined: 18,
        spotsAvailable: 2,  
    },
      {
        id: 6,
        name: 'Thriller Seekers Club',
        description: 'Dive into the thrilling world of suspense and mystery novels. Unravel gripping plots and join fellow readers in analyzing the twists and turns.',
        location: 'Thriller Seekers Bookstore, 456 Elm Avenue',
        achievements: 'Hosted successful author meet-ups and organized local crime fiction events',
        membersJoined: 10,
        spotsAvailable: 10,  
    },
      {
        id: 7,
        name: 'Young Adult Adventures Club',
        description: 'Embark on exciting journeys through the realm of young adult fiction. Discover captivating stories, share favorite characters, and connect with fellow young adult literature enthusiasts.',
        location: 'YA Adventures Community Center, 789 Oak Street',
        achievements: 'Organized a successful Harry Potter-themed event and initiated a book donation drive for underprivileged schools',
        membersJoined: 6,
        spotsAvailable: 14,  
    },
      {
        id: 8,
        name: 'Sci-Fi Explorers Society',
        description: 'Delve into the vast universe of science fiction. Discuss mind-bending concepts, futuristic technologies, and epic space sagas with fellow sci-fi fans.',
        location: 'Sci-Fi Headquarters, 321 Galaxy Boulevard',
        achievements: 'Featured in a popular sci-fi podcast and collaborated with local sci-fi conventions',
        membersJoined: 25,
        spotsAvailable: 0,  
    },
      {
        id: 9,
        name: 'Contemporary Reads Club',
        description: 'Immerse yourself in the latest works of contemporary fiction. Explore diverse perspectives, thought-provoking themes, and engage in lively discussions.',
        location: 'Modern Reads Café, 987 Cedar Street',
        achievements: 'Hosted successful author Q&A sessions and organized a community book drive for local schools',
        membersJoined: 30,
        spotsAvailable: 0,  
    },
    {
        id: 10,
        name: 'Crime Solvers Book Club',
        description: 'Dive into the thrilling world of crime and detective novels. Analyze clues, discuss gripping investigations, and connect with fellow crime fiction aficionados.',
        location: 'Mystery Mansion, 123 Sleuth Street',
        achievements: 'Organized a murder mystery dinner and collaborated with renowned crime authors for exclusive book signings.',
        membersJoined: 20,
        spotsAvailable: 10,
      },
      {
        id: 11,
        name: 'Historical Fiction Book Club',
        description: 'Explore captivating tales set in different historical periods. Dive into the past, discuss significant events, and connect with fellow history enthusiasts.',
        location: 'Time Travel Library, 456 Heritage Avenue',
        achievements: 'Hosted a historical reenactment event and organized a book donation drive for historical fiction novels.',
        membersJoined: 25,
        spotsAvailable: 5,
      },
      {
        id: 12,
        name: 'Poetry Circle',
        description: 'Immerse yourself in the beauty of poetic expressions. Discuss famous poems, share original works, and connect with fellow poetry lovers.',
        location: 'Serene Sonnets Café, 789 Verse Lane',
        achievements: 'Hosted an open mic poetry night and collaborated with local poets for poetry workshops.',
        membersJoined: 10,
        spotsAvailable: 15,
      },
      {
        id: 13,
        name: 'Non-Fiction Explorers Club',
        description: 'Embark on a journey through the realm of non-fiction literature. Discuss thought-provoking topics, learn from informative books, and connect with fellow non-fiction enthusiasts.',
        location: 'Knowledge Hub, 123 Learning Street',
        achievements: 'Organized a TED Talk viewing session and initiated a book club podcast discussing non-fiction bestsellers.',
        membersJoined: 18,
        spotsAvailable: 7,
      },
  ];

  const joinClub = (groupId) => {
    const selectedClub = groups.find(group => group.id === groupId);
    setJoinedClub(selectedClub);
    
  };

  return (
    <>
      <div className="Heading16">
        <div className="heading_in16">
            <p className="heading16"><Link to="/joinclub">JOIN CLUB</Link> </p>
        </div>
    </div>
    <div className="middle16">
        <div className="image6">

        </div>
    </div>
    <div className="join-club-page">
      <h1>Join the club</h1>
      <p>Where Reading Comes to Life: Join the <Link to='/'>BOOKCOVE</Link> Club and Experience the Power of Connection, Expression, and Exploration!</p>
      <p >Are you ready to take your reading journey to the next level? Look no further than <Link to='/'>BOOKCOVE</Link>'s Exclusive Club—a vibrant community that celebrates the joy of books and the thrill of connecting with fellow literary enthusiasts.
</p>
<p>By joining the BOOKCOVE Club, you open the doors to a world of possibilities. One of the greatest benefits is the opportunity to meet new people who share your passion for literature. Connect with fellow book lovers from around the globe, exchange ideas, and forge meaningful friendships that transcend the pages of books.</p>
      <p>Choose a club from the list below and click "Join" to become a member.</p>

      <div className="group-list">
        {groups.map(group => (
          <div key={group.id} className="group-item">
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            {!joinedClub && <button onClick={() => joinClub(group.id)}>Join</button>}
            {joinedClub && joinedClub.id === group.id && <p>You have joined {group.name}!</p>}
          </div>
        ))}
      </div>

      {joinedClub && (
        <div className="joined-club-details">
          <h2>Club Details</h2>
          <p>Name: {joinedClub.name}</p>
          <p>Description: {joinedClub.description}</p>
          <p>Location: {joinedClub.location}</p>
          <p>Achievements: {joinedClub.achievements}</p>
          <p>Members Joined: {joinedClub.membersJoined}</p>
          <p>Spots Available: {joinedClub.spotsAvailable}</p>
          {/* Add more club details as needed */}
        </div>
      )}
    </div>
    <div className="middle160">
        <div className="image60">

        </div>
    </div>
    </>
  );
}

export default JoinClubPage;
