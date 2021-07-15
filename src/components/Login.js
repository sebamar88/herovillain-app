import React, { useState } from 'react';
import axios from 'axios';
import heroesfaces from '../images/heroes-faces.PNG';
import '../styles/Login.css';

const URL = process.env.REACT_APP_AUTH_URL;

function Login({ setIsAuth }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const config = {
      url: URL,
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ email: email, password: password }),
    };
    const response = await axios(config).catch((err) => err);
    if (response.data.error) {
      alert(response.data.error);
    } else {
      localStorage.setItem('token', response.token);
      setIsAuth(true);
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <form className='card login p-5' onSubmit={handleSubmit}>
      <h4 className='pt-3 text-center'>
        All the Heroes and Villains you are looking for.
      </h4>
      <figure>
        <img className="img-fluid" src={heroesfaces} alt='principal DC hero faces' />
      </figure>
      <h2 className='title is-3 is-spaced control pt-3 mb-3'>Login to build your team</h2>
      
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        
      
          <input
            className='form-control mt-3'
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
      <div className='field py-3'>
        <p className='control'>
          <button type='submit' className='btn btn-success d-flex w-100 justify-content-center'>
            Login
          </button>
        </p>
      </div>
    </form>
      </div>
    </div>
  );
}
export default Login;
