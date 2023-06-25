import React from 'react'
import { Link } from 'react-router-dom'
import './Outliveb1.css';

export default function Outliveb1() {
  return (
    <>
    <div>
    <p className="para55"><Link to="/bestseler">← Back</Link></p>
    </div>
    <div className="coverpage">
        <div className="coverpage_in">
            <img className="img_b" src={require("./BOOKS_FOR IN/book1.png")} alt=""/>
            <div className="about_content">
                <p className="para1_b2"><h1 className="h3_tag2">Outlive: The Science and Art of Longevity</h1></p>
                    <h5 className="para2_b2">₹1555.50</h5>
                    <h5>by Peter Attia</h5>
                    {/* <p>⭐⭐⭐⭐⭐</p> */}
                    <h3 className='h3_tag_o'>About</h3>
                    <div className="paragraphs">
                        <p>A groundbreaking manifesto on living better and longer that challenges the conventional medical thinking on aging and reveals a new approach to preventing chronic disease and extending long-term health, from a visionary physician and leading longevity expert</p>
                        <p>“One of the most important books you’ll ever read.”—Steven D. Levitt, New York Times bestselling author of Freakonomics</p>
                        <p>Wouldn’t you like to live longer? And better? In this operating manual for longevity, Dr. Peter Attia draws on the latest science to deliver innovative nutritional interventions, techniques for optimizing exercise and sleep, and tools for addressing emotional and mental health.
                        </p>
                        <p>For all its successes, mainstream medicine has failed to make much progress against the diseases of aging that kill most people: heart disease, cancer, Alzheimer’s disease, and type 2 diabetes. Too often, it intervenes with treatments too late to help, prolonging lifespan at the expense of healthspan, or quality of life. Dr. Attia believes we must replace this outdated framework with a personalized, proactive strategy for longevity, one where we take action now, rather than waiting.
                        </p>
                        <p>This is not “biohacking,” it’s science: a well-founded strategic and tactical approach to extending lifespan while also improving our physical, cognitive, and emotional health. Dr. Attia’s aim is less to tell you what to do and more to help you learn how to think about long-term health, in order to create the best plan for you as an individual.
                        </p>
                    </div>
                    
                    
            </div>
        </div>
    </div>

    
    </>
  )
}
