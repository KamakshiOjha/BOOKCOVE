import React from 'react'

export default function About(props) {
  return (
    <div className="card text-center about">
  <div className="card-header">
  <h5 className="card-title">{props.title}</h5>
  </div>
  <div className="card-body">
   
    <p className="card-text">Welcome to our innovative word count and case conversion app! At MAGIC WORDS, we strive to provide you with a seamless and efficient tool to tackle all your text-related needs. Whether you're a writer, student, or professional, our app offers a user-friendly interface and powerful features to enhance your productivity. With our word count feature, you can effortlessly track the length of your documents, essays, or articles, ensuring you meet specific requirements or stay within desired limits. Additionally, our app simplifies the process of converting text to uppercase or lowercase, saving you valuable time and effort. Say goodbye to manual conversions and let our app handle the task for you. Join our growing community of satisfied users and experience the convenience and accuracy of our word count and case conversion app today!</p>
    <a href="/" className="btn btn-primary">Explore</a>
  </div>
  <div className="card-footer text-muted">
  Revolutionize the way you handle word count and case conversion. 
  </div>
</div>
  )
}
