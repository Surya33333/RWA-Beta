import {react} from 'react';
import "./Modal.scss";

const Modal = ({closeModal}) => {
    return(
            <div className="mainmodal">
                <div className="mapmodal">
                    <div className="head">
                        <p className="modalhead">Select Pickup Address</p>
                        <p className="modalclosebtn" onClick={() => {closeModal(false)}}>X</p>
                    </div>
                    <div className="body">
                        <p>Modal Content</p>
                    </div>
                    <div className="foot">
                        <div className="bg-green-400 font-semibold p-1 hover:shadow-lg">Save</div>
                        <div className="bg-slate-400 font-semibold p-1 hover:shadow-lg" onClick={() => {closeModal(false)}}>Close</div>
                    </div>
                </div>
            </div>
    )
}

export default Modal