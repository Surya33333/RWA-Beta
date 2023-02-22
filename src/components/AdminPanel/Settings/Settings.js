import {React, useState} from 'react';
import "./Settings.scss";
import Login from "../../Website/Login/Login.js";
import SideBar from "../SideBar/SideBar.js";
import NavBar from "../NavBar/NavBar.js";
import * as Icon from 'react-bootstrap-icons';

const usertoken = sessionStorage.getItem('token');
const upi = "spnreddy2002@ybl";
const walletbalance = "290.00"
const Settings = () => {

const [open, setChangePasswordTab] = useState(false);

  return (
        <>
          {!usertoken ? (<Login />) : (
            <div className="flex w-[100%]">
              <SideBar />
              <div className="settingsContainer flex-1">
                <NavBar />
                <div className="wallet shadow-lg m-[10px] rounded-md p-[10px]">
                    <div className="text-left pl-3 pt-2 font-bold text-slate-800">Wallet</div>
                    <div className="flex justify-between align-middle">
                      <div className="flex pl-2 pt-4 h-3/6"> 
                      <div className="flex p-3 gap-4 m-1 shadow-md bg-slate-200 align-middle rounded-lg">
                        <div className="font-bold">UPI</div>
                        <div className="font-semibold">{upi}</div>
                        <div className="pt-1 cursor-pointer"><Icon.CaretDownFill/></div>
                      </div>
                      <div className="p-3 gap-4 m-1 bg-slate-300 hover:translate-x-1 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer font-bold rounded-lg">+</div>
                      </div>
                      <div className="right text-center mr-7">
                        <div className="text-slate-400 text-sm">Total Balance</div>
                        <div className="font-bold text-2xl mt-1">${walletbalance}</div>
                        <div className="bg-green-500 mt-1 text-slate-100 shadow-md hover:translate-x-1 hover:scale-105 cursor-pointer rounded-xl font-bold p-2">+ Add</div>
                      </div>
                    </div>
                </div>
                <div className={` ${open ? 'h-[220px]' : 'h-[100px]'} duration-300 bg-white shadow-lg m-[10px] rounded-md p-[10px]`}>
                  <div className="resetpassword flex justify-between m-[10px] rounded-md p-[10px]">
                    <div className="font-bold align-middle">Change Password ?</div>
                    <div className="bg-button-color mt-1  text-slate-100 shadow-md hover:translate-x-1 hover:scale-105 cursor-pointer rounded-xl font-bold p-2" onClick={()=>{setChangePasswordTab(!open)}}>{!open ? "Change Password" : "Close"}</div>
                  </div>
                  <div>
                  <form className={` ${open ? '' : 'scale-0'}  duration-300 flex-col`}> 
                  <div className={`flex justify-evenly gap-2`}>
                    <div>
                      <lable for="currentpassword" className="text-slate-800">Current Password : </lable>
                      <input id="currentpassword" type="password" placeholder="**********" className="align-middle bg-slate-200 p-1 rounded-md focus:outline-none focus:bg-slate-300"/>
                    </div>
                    <div>
                      <lable for="newpassword" className="text-slate-800">New Password : </lable>
                      <input id="newpassword" type="password"  placeholder="**********" className="align-middle  bg-slate-200 p-1 rounded-md focus:outline-none focus:bg-slate-300"/>
                    </div>
                    <div>
                      <lable for="confirmnewpassword" className="text-slate-800">Confirm New Password : </lable>
                      <input id="confirmnewpassword"   type="password" placeholder="**********" className="align-middle bg-slate-200 p-1 rounded-md focus:outline-none focus:bg-slate-300"/>
                    </div>
                  </div>
                  <div className="bg-button-color my-3 m-auto  text-slate-100 shadow-md hover:translate-x-1 hover:scale-105 cursor-pointer rounded-xl font-bold p-2 w-fit">Update</div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }
export default Settings