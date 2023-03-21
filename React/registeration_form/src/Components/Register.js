import React from 'react'
import Styled from 'styled-components';

export default function Register(props) {
    const StyledButton = Styled.button`
        width:200px;
        height:50px;
        background: linear-gradient(to right,#fe1242,#672141,#110982,#dd7867);
        color:white;
        font-size:18px;
        padding:10px;
        border:none!important;
        border-radius:50px;'
    `;
    console.log(StyledButton);
  return (
    
    <div className='container mt-5'>
        <h1 className='text-center'>Registration Form</h1>
    <form onSubmit={props.submit}>
        <div class="form-group col-6">
          <label for="name">Name</label>
          <input type="text"
            class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Name"/>
        </div>
        <div class="form-group col-6">
          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="Email"/>
        </div>
        <div class="form-group col-6">
          <label for="password">Password</label>
          <input type="password" class="form-control" name="password" id="password" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <StyledButton type='button'>Login</StyledButton>
    </form> 
    </div> 
  )
}
