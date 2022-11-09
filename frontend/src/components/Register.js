import React from 'react';
import {Formik} from 'formik';
import Swal from"sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    //1.url
    //2.request method
    //3.data
    //4.data format
    //asynchronous function -returns promise 

   const response =await fetch("http://localhost:5000/user/add",{
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
            text:"Registered Successfully "
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
                  Register to Design
                </p>
                <Formik
                        initialValues={{username: '', email: '', password: '',repeatpassword:""}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (



                <form  onSubmit={handleSubmit} className="mx-1 mx-md-4">
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
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="password" onChange={handleChange} value={values.password}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="repeatpassword" onChange={handleChange} value={values.repeatpassword}
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat password
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label " htmlFor="form2Example3">
                      I agree all statements in{" "}
                      <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="  mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Register
                    </button>
                    <p className="mt-3" >Already have an acount? <Link to="/Login" className="fw-bold"  >Login</Link>
              </p>
                  </div>
                </form>
                )}
                </Formik>


              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
                <img
                  src="https://imgs.search.brave.com/03YAtk9lKtEgWb49BCF9cOcsMkp8Kslwa6oDD10NzW4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzM3/MS8yMDgvb3JpZ2lu/YWwvdmVjdG9yLXdl/bGNvbWUtaGFuZC1k/cmF3bi10ZXh0Lmpw/Zw"
                  className="img-fluid"
                  alt="Sample image"
                />
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
export default Register;