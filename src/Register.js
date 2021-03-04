import React from 'react';


const Register = (props) => {

    const { text } = props.form;

    const updateForm = () => {
        props.updateForm();
    }

    return (
      <div className="form">
        <form className={props.formStatus ? 'myForm' : ''}>
          <div className="group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="controll"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="controll"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="group">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              className="controll"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="group">
            <input type="submit" className="btn" value="Register" />
          </div>
          <div className="group">
            <span className="link" onClick={updateForm}>
              {text}
            </span>
          </div>
        </form>
      </div>
    );
}

export default Register;