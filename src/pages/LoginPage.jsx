import React from 'react';



const LoginPage = () => {
   
  
    return (
        < >
         <div style={{ minWidth: '350px' }}
		>
			<h1 >Login</h1>

			<form >
				<div >
					<label htmlFor='exampleInputEmail1' >
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div >
					<label
						htmlFor='exampleInputPassword1'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						id='exampleInputPassword1'
					/>
				</div>
				<button type='submit' >
					Submit
				</button>
			</form>
		</div>
        </>
    )
};



export default LoginPage