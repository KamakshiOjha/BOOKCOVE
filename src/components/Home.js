import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div> 
        <div className="topp">
            <div className="top_inside1">
                <div className="top1">
                    <h2 className="h2_tag1"><strong>"Step into a world where stories come alive and bookshelves hold treasures untold."</strong></h2>
                    <p className="para1">BookCove is a dynamic online platform offering an extensive catalog of books across genres, personalized recommendations, and a vibrant community for book lovers to connect, discover, and purchase their next favorite reads.</p>
                </div>
                <img className='image1' src={require("./image3.png")} alt="Your Image" />
                
            </div>

        </div>
     
    
    <div className="middle1">
    <h2 className="h2_tag2">Best Seller</h2>
            <p className="para2"> Dive into these compelling stories and join the literary buzz that has captured readers' hearts worldwide.</p>
            <div className='middle1_1'>
                <div>
                    <div className="card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">An item</li>
                          <li className="list-group-item">A second item</li>
                          <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                      </div>

                </div>
                <div>
                <div className="card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">An item</li>
                          <li className="list-group-item">A second item</li>
                          <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                      </div>
                </div>
                <div>
                <div className="card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">An item</li>
                          <li className="list-group-item">A second item</li>
                          <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                      </div>

                </div>
                <div>
                <div className="card" >
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">An item</li>
                          <li className="list-group-item">A second item</li>
                          <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                      </div>
                </div>
            </div>
        

    </div>
    <div className="middle2">

    </div>
    <div className="middle3">

    </div>
    <div className="bottom">

    </div>
    </div>
  )
}
