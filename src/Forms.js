import React, { useState} from 'react'
import Register from "./Register";
import Login from "./Login";

const Forms = () => {

    const [form, setForm] = useState({register : true, login : false,text : 'Login'});
    const [formStatus, setFormStatus] = useState(false);

    const updateForm = () => {
        setForm({register : !form.register, login : !form.login, text : form.text === 'Login' ? 'Register' : 'Login'})
        setFormStatus(true);
    };

    return (
      <div className="row">
        <div className="left"></div>
        <div className="right">
          {form.register ? (
            <Register
              form={form}
              updateForm={updateForm}
              formStatus={formStatus}
            />
          ) : (
            <Login
              form={form}
              updateForm={updateForm}
              formStatus={formStatus}
            />
          )}
        </div>
      </div>
    );
}

export default Forms;