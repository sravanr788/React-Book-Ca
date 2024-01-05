// imports
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    // destructuring all the required properties and functions from the useForm hook 
    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitSuccessful, isSubmitted } } = useForm();
    const {showBook , setshowBook} = useContext(AppContext);
    const nav = useNavigate();

    // function that will execute after data is submitted 
    const formHandler = (data) => {
        setshowBook(true);
        console.log(data);
        console.log(showBook);
        localStorage.setItem("data", JSON.stringify(data)) // setting the data in the local storage  
        toast("Form submitted", {
            theme: 'dark'
        })
        
        // checking whether the entered password is matching with the above password 
        if (data.password !== data.repeatPassword) {
            setError('repeatPassword', {
                type: 'manual',
                message: 'Passwords do not match',
            });
        }   
      nav("/"); 
    }
    // const redirect_to_Book= ()=>{

    // }
    return (
        // rendering the form component 
        <div className='form-container flex'>
            {/* Providing the toast container for toasing  */}
            <ToastContainer />

            <form onSubmit={handleSubmit(formHandler)}>
                <div className='form flex'>
                    <h1>Register </h1>
                    {/* Name input  */}
                    <input type="text" placeholder='Your Name' name='name' {...register("name", {
                        // Registering the name and providing the required key and the constraints for the name 
                        required: "Fill The Name",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 chars required."
                        },
                        maxLength: {
                            value: 30,
                            message: "Minimum 30 chars required."
                        }
                    })} />
                    <p className='err'>{errors.name?.message}</p>
                    {/*   Email input  */}
                    <input type="email" placeholder='Your Email' name='email' {...register("email", {
                        // Registering the email and providing the required key and the constraints for the email 
                        required: "Fill The Email",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 chars required."
                        },
                        maxLength: {
                            value: 30,
                            message: "Minimum 30 chars required."
                        }
                    })} />
                    <p className='err'>{errors.email?.message}</p>
                    {/*  Password input */}
                    <input type="password" placeholder='Password' name='password' {...register("password", {
                        // Registering the password and providing the required key and the constraints for the password 
                        required: "Enter Password",
                        minLength: {
                            value: 10,
                            message: "Password must be more than 10 characters."
                        },
                        maxLength: {
                            value: 20,
                            message: "Password cannot be more than 20 characters."
                        },
                        pattern: {
                            value: /^(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{10,}$/,
                            message: "Password must have atleast one special character"
                        }
                    })} />
                    <p className='err'>{errors.password?.message}</p>
                    {/*  Repeat password input */}
                    <input type="password" placeholder='Confirm your Password' name="repeatPassword"
                        // Registering the repeatPassword and providing the required key and validating it with the password 
                        {...register("repeatPassword", {
                            required: "Repeat your password",
                            validate: (value) => value === watch('password') || 'Passwords do not match',
                        })}
                    /> <p className='err'>{errors.repeatPassword?.message}</p>

                   <button className='signup' > Sign Up </button>


                    {/* minute details of the form  */}
                    <small>
                        By signing up you agree to <a href="#">Terms of Use</a> and <a href="#">Privacy Policy </a>
                    </small>
                    <br /> <br />
                    <small>
                        Already signed up  <a href="#"> Login </a>
                    </small>
                </div>
            </form>
        </div>
    )
}

export default Form;