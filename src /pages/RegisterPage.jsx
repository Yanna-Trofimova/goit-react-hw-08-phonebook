// import React from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { signUp } from 'redux/auth/auth-services';



// const RegisterPage = () => {
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const newUser = {
//       name: e.target.elements.name.value,
//       email: e.target.elements.email.value,
//       password: e.target.elements.password.value,
//     }
//     signUp(newUser)
//       .then(() => {
//         toast.success('Registration successfully')
//         navigate('/login')
//       })
//     .catch((error) => console.log(error))
//     // console.log(data)
//   }
  
  
//     return (
//         < >
//           <div
// 			style={{ minWidth: '350px' }}
// 		>
// 			<h1 >SignUp</h1>

// 			<form onSubmit={handleSubmit}>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputName1'>
// 						Name
// 					</label>
// 					<input
// 						name='name'
// 						type='text'
// 						id='exampleInputName1'
// 					/>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputEmail1' >
// 						Email address
// 					</label>
// 					<input
// 						name='email'
// 						type='email'
// 						id='exampleInputEmail1'
// 						aria-describedby='emailHelp'
// 					/>
// 					{/* <div id='emailHelp' >
// 						We'll never share your email with anyone else.
// 					</div> */}
// 				</div>
// 				<div>
// 					<label
// 						htmlFor='exampleInputPassword1'
// 					>
// 						Password
// 					</label>
// 					<input
// 						name='password'
// 						type='password'
// 						id='exampleInputPassword1'
// 					/>
// 				</div>
// 				{/* <div>
// 					<Link to='/login'>Login</Link>
// 				</div> */}

// 				<button type='submit' >
// 					Submit
// 				</button>
// 			</form>
// 		</div>
//         </>
//     )
// };



// export default RegisterPage


import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
// import { RegisterForm } from 'components';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}