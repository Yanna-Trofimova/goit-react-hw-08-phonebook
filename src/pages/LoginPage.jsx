import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/auth-thunk';
// import { toast } from 'react-hot-toast';
// import { login } from 'redux/auth-services';



const LoginPage = () => {
	const isAuth = useSelector((state) => state.auth.token)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		isAuth && navigate('/')
	}, [isAuth, navigate])

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(
			loginThunk({
				email: e.target.elements.email.value,
				password: e.target.elements.password.value,
			})
		)
		// 	.unwrap()
		// 	// .then(() => {
		// 	// 	dispatch(getProfileThunk())
		// 	// 	// navigate('/')
		// 	// })


		// login({
		// 		email: e.target.elements.email.value,
		// 		password: e.target.elements.password.value,
		// })
		// 	.then(console.log)
		// 	.catch(() => toast.error('Some error...'))
	}
   
  
    return (
        < >
         <div style={{ minWidth: '350px' }}
		>
			<h1 >Login</h1>

			<form onSubmit={handleSubmit}>
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
					{/* <div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div> */}
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