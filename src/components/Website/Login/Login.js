import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import crypto from "crypto-js";
import Cookies from "js-cookie";

function settoken(token,username,useremail){
    sessionStorage.setItem('token', JSON.stringify(token));
    sessionStorage.setItem('username', JSON.stringify(username));
    sessionStorage.setItem('useremail', JSON.stringify(useremail));
}

const name = "Surya";

export default function Login() {
    const navigate = useNavigate();

    const [error, setErrors] = useState([]);
    const [message, setSuccess] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [md5_hashed_text, setMd5HashedText] = useState("");

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        setMd5HashedText(
            crypto.MD5(password).toString()
        );
        Login(email, password, md5_hashed_text);
    }


    const Login = (email, password, md5_hashed_text) => {
        Axios.post("http://localhost:3001/login/log", {
            loginpassword: password,
            loginemail: email,
            hash: md5_hashed_text
        })
            .then((response) => {
                console.log(response.data.token);
                const token = response.data.token;
                const username = response.data.username;
                const useremail = response.data.useremail;
                setErrors("");
                settoken(token,username,useremail);
                navigate("/dashboard");
                window.location.reload();
            }, (error) => {
                console.log(error.response.data);
                setErrors(error.response.data);
                setSuccess("");
            });
    }

    return (

        <div className="main flex m-auto px-10 justify-center" >
        
        <div className="text-slate-900 mt-[20rem] pl-[100px] text-left">
           <h1 className="font-bold text-green-500"> Login to your account</h1>
            <p className="text-2xl text-slate-900">Get access to all your orders to track them online any time</p>
        </div> 
<div className="forms shadow-2">
            <div>{
            error.length > 0 && (
                <div className="text-slate-100">
                    <p>{error}</p>
                </div>
            )}
            {
                message.length > 0 && (
                    <div className="form-success">
                        <p>{message}</p>
                    </div>
                )}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div><h2 className="form-head">LOGIN</h2></div>
                <Form.Field className="form-field">
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p className="form-error">Please check the Email</p>}
                <Form.Field className="form-field">
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                        })}
                    />
                </Form.Field><br></br>
                {errors.password && <p className="form-error">Password Must have 6 charecters "Aa@1"</p>}
                <Button type='submit' className="button">Login</Button><br></br>
                <h6 className="form-footer">Not Registered ?  <Link className="link" to="/register">Register</Link> | <Link className="link" to="/">Home</Link>  </h6>
                <h6 className="form-footer"><Link className="link" to="/resetpassword">Forgot password ?</Link></h6>
            </Form>
        </div>
        </div>

        </div>
    );

}
