import React from 'react';
import {Formik} from 'formik';
import Swal from"sweetalert2";
import { Link } from "react-router-dom";

const Contact = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    //1.url
    //2.request method
    //3.data
    //4.data format
    //asynchronous function -returns promise 

   const response =await fetch("http://localhost:5000/customer/add",{
        method:"POST",
        body:JSON.stringify(formdata),
        headers:{
            "Content-Type":"application/json"
        }
    })
    if (response.status===200){
        console.log("user data added ");
        Swal.fire({
            icon:"success",
            title:"well done",
            text:"Message Sent Successfully "
        })
    }
    console.log("request sent ");



}

    return(
      <>
      
      
      <section className="vh-100 " style={{
    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/018.webp')"}} >
        
  <div className="container h-100" >
    <div className="row d-flex justify-content-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body mt-5 p-md-2">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Contact Us 
                </p>
                <Formik
                        initialValues={{username: '', email: '',message:""}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (



                <form  onSubmit={handleSubmit} className="mx-1 mx-md-5">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="username" onChange={handleChange} value={values.username} 
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email" onChange={handleChange} value={values.email} 
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Email
                      </label>
                    </div>
                  </div>
                 
                  <div className="d-flex flex-row align-items-center mb-4" >
                  <i class='fas fa-comment'></i>
                    <div className="form-outline flex-fill mb-0">
                      <textarea
                        
                        id="message" onChange={handleChange} value={values.message}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4cd" >
                        Type Message
                      </label>
                    </div>
                  </div>
                 
                  <div className="  mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Sent message
                    </button>
                    
                  </div>
                </form>
                )}
                </Formik>


              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4"></h6>
            <p>
              <i className="fas fa-home me-3 text-grayish" /> Lucknow India 
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-grayish" />
             info@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3 text-grayish" /> +917408106684
            </p>
            <p>
              <i className="fas fa-print me-3 text-grayish" /> + 01 234 567 89
            </p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
</>
  
    
    )
}
export default Contact;