import React from 'react'
import { Link } from 'react-router-dom'

export default function Join(props) {
  return (

<section className="mb-4 section1">

   
    <h2 className="h1-responsive font-weight-bold text-center my-4">{props.title}</h2>
  
    <p className="text-center w-responsive mx-auto mb-5">Do you want to collaborate with us? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

         
                <div className="row">

                    <div className="col-md-6 my-2">
                        <div className="md-form mb-0">
                        <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control my-1"/>
                            
                        </div>
                    </div>
                
                    <div className="col-md-6 my-2">
                        <div className="md-form mb-0">
                        <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control my-1"/>
                            
                        </div>
                    </div>
             
                </div>
           
                <div className="row">
                    <div className="col-md-12 my-2">
                        <div className="md-form mb-0">
                        <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control my-1"/>
                           
                        </div>
                    </div>
                </div>
           
                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form my-2">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea my-1"></textarea>
                            
                        </div>

                    </div>
                </div>
           

            </form>

            <div className="text-center text-md-left">
                <Link className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</Link>
            </div>
            <div className="status"></div>
        </div>
       

   
        <div className="col-md-3 text-center my-4">
            <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>OUR CONTACT CENTER</p>
                </li>
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>42, Nehru Road,South Extension, Delhi 110001</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 91 7827790992</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p><Link>contact@mdbootstrap.com</Link></p>
                </li>
            </ul>
        </div>


    </div>

</section>

  )
}
