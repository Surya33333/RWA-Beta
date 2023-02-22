import { react, useState } from "react";
import "./Account.scss"
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import DataTable from "../DataTable/DataTable.js"
import Login from '../../Website/Login/Login.js';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Form, Button, FormGroup } from 'semantic-ui-react';
import * as Icon from 'react-bootstrap-icons';
import profile from '../../../Images/profile.jpg';
import Modal from '../Modals/Modal.js';

const usertoken = sessionStorage.getItem('token');
const username = JSON.parse(sessionStorage.getItem('username'));
const useremail = JSON.parse(sessionStorage.getItem('useremail'));


const Account = () => {

  const [Username, setUsername] = useState();
  const [Useremail, setEmail] = useState();
  const [Mobile, setMobile] = useState();
  const [Location, setLocation] = useState();
  const [Pincode, setPincode] = useState();

  const [error, setErrors] = useState([]);
  const [message, setSuccess] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [show, showModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.location);
    console.log(data.mobile);
    console.log(data.pincode);
  }

  return (
    <>
      {!usertoken ? (<Login />) : (
        <div className="account">
          <SideBar />
          <div className="accountContainer">
            <NavBar />
            <div className="useraccount">
              <div className="image">
                <div className="left">
                  <div className="img">
                    <img className="img" src={profile ? (profile) : ("https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg")}/>
                  </div>
                  <input type="file" accept="image/png, image/jpeg" id="upload" hidden />
                  <label for="upload" className="imglabel"><Icon.Pencil title="Edit Photo"/></label>
                  <div className="text">Hello, {username}.</div>
                </div>
                <div className="right">
                  <label className="imglabel shadow-xl hover:translate-x-1 hover:scale-110 duration:800 rounded-lg">Update</label>
                </div>
              </div>

              <div>
                  {show && <Modal closeModal={showModal}/>}
              </div>              
              
              <div className="profile">
                <p className="title">My Profile </p>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field className="forminput name">
                      <label>Name<i className="required">*</i></label>
                      <input
                        defaultValue={username}
                        type="text"
                        {...register("name",
                          {
                            required: true,
                            minLength: 3, maxLength: 20
                          })}
                      />
                      {errors.name && <p className="form-error">UserName Should have 3 letters</p>}
                    </Form.Field> 
                    <Form.Field className="forminput email">
                      <label>Email<i className="required">*</i></label>
                      <input
                        defaultValue={useremail}
                        placeholder="Type here.."
                        className="font-thin"
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                      />
                      {errors.email && <p className="form-error">Please Check Email ID</p>}
                    </Form.Field>
                    <Form.Field className="forminput mobile">
                      <label>Mobile<i className="required">*</i></label>
                      <input
                      placeholder="Type here.."
                      className="font-thin"
                        type="text"
                        {...register("mobile", {
                          required: true,
                          minLength: 10, maxLength: 10
                        })}
                      />
                      {errors.mobile && <p className="form-error">Invalid Mobile</p>}
                    </Form.Field>
                    <Form.Field className="forminput location">
                      <label>Location<i className="required">*</i></label>
                      <input
                      placeholder="Type here.."
                      className="font-thin"
                        type="text"
                        {...register("location", {
                          required: true,
                          minLength: 10, maxLength: 300
                        })}
                      />
                      <Icon.GeoAltFill className="locationpicker"  onClick={()=>{showModal(true)}} />
                      {errors.location && <p className="form-error">Location Is Required</p>}
                    </Form.Field>
                    <Form.Field className="forminput pincode">
                      <label>Pincode<i className="required">*</i></label>
                      <input
                      placeholder="Type here.."
                      className="font-thin"
                        type="text"
                        {...register("pincode", {
                          required: true,
                          minLength: 6, maxLength: 6
                        })}
                      />
                      {errors.pincode && <p className="form-error">Invalid Pincode </p>}
                    </Form.Field>
                    <Form.Field className="forminput mobile">
                      <label>Mobile<i className="required">*</i></label>
                      <input
                      placeholder="Type here.."
                      className="font-thin"
                        type="text"
                        {...register("mobile", {
                          required: true,
                          minLength: 10, maxLength: 10
                        })}
                      />
                      {errors.mobile && <p className="form-error">Invalid Mobile</p>}
                    </Form.Field>
                    <Button type='submit' className="shadow-xl hover:translate-x-1 duration:800 bg-green-500 rounded-xl" title="Update Profile Data">Save </Button><br></br>
                  </Form>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Account

