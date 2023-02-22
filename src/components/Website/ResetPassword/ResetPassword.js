import "./ResetPassword.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import crypto from "crypto-js";
import Cookies from "js-cookie";

export default function ResetPassword() {
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
                navigate("/login");
                window.location.reload();
            }, (error) => {
                console.log(error.response.data);
                setErrors(error.response.data);
                setSuccess("");
            });
    }

    return (

        <div className="main">

<div className="forms">
            <div>{
            error.length > 0 && (
                <div className="form-error">
                    <p>{error}</p>
                </div>
            )}
            {
                message.length > 0 && (
                    <div className="form-success">
                        <p>{message}</p>
                    </div>
                )}

            <Form onSubmit={handleSubmit(onSubmit)} >
                <div><h4 className="form-head">Password Reset</h4>
                    <p className="tag text-slate-900 font-black pt-3 text-sm">Enter your email for password reset</p>
                </div>
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
                <Button type='submit' className="button">Reset</Button><br></br>
                <h6 className="form-footer"><Link className="link" to="/"> Home </Link>   <Link className="link" to="/register">Register</Link> <Link className="link" to="/login">Login</Link>  </h6>
            </Form>
        </div>
        </div>

        </div>
    );

}
