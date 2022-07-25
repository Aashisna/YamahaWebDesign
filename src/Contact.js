import React from "react";
export default function Contact() {
  return (
    <>
      <div className="row container">
        <div className="col-lg-6 py-5 text-primary ct">
          <h1 className="py-3">Contact Us </h1>
          <h3>Nijgadh, Bara</h3>
          <p>Lachka, State-2</p>
          <p>Contact Us- 9841567226</p>
             <p>email:  <a className="text-primary" href="https://gmail.google.com/inbox/">sapimkharel2050@gmail.com</a></p>
        </div>
        <div className="col-lg-6">
          <form className="py-5">
            <h2 className="text-center text-primary py-1">Fill Out this form if we are not available</h2>
            <div className="contact bg-dark py-3">
              <div className="mb-3">
                <label for="exampleInputFullname1" className="form-label text-light">Full Name</label>
                <input type="text" className="form-control" id="exampleInputFullname1" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text text-light"></div>
              </div>
              <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
              <div className="mb-3 py-3">
                <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" required />
              </div>
              <div className="mb-3">
                <label for="exampleInputSelect1" className="form-label text-light">Category Selection</label>
                <select className="form-control" id="exampleInputSelect1">
                  <option> Bike </option>
                  <option> Scooter </option>
                </select>
              </div>
              <div className="mb-3">
                <label for="exampleInputTextArea1" className="form-label text-light">Additional Query</label>
                <textarea rows="5" cols="30" className="form-control" id="exampleTextArea1"></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-control bg-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}