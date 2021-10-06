import "./modal.scss";
import  {KeyboardArrowLeft, KeyboardArrowRight, Close, DeleteOutline} from '@material-ui/icons';
import { useEffect } from "react";
import axios from "axios";
import {API_URL} from "../../config.json";

function Modal(props) {
    const show = props.show;
    const close = props.close;
    const currentImage = props.currentImage;
    const setCurrentImage = props.setCurrentImage;
    const images = props.images;
    const token = sessionStorage.getItem("token");

    function clickHandler(e) {
        if(e === "close" ) {
            close();
        }
        if(e === "next") {
            setCurrentImage(currentImage + 1);
        }
        if(e === "previus") {
            setCurrentImage(currentImage - 1);
        }
    }

    function deleteImage() {
        const id = images[currentImage].id;
        const header = {
            headers: {
                "x-access-token": token,
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
        axios.delete(`${API_URL}gallery`, {
            header,
            data: {
            id: id
        }}
        
        ).then(() => {
            console.log("test")
            close();
        })
        .catch((error) => {
            console.log("error")
        })

    }

    if(show ) {
        return (
            <div >
 
                <div className="modal-backdrop" onClick={e => clickHandler("close")}>
                </div>
                
                {currentImage > 0 ? <KeyboardArrowLeft className="left-icon modal-icon" fontSize="inherit" onClick={() => clickHandler("previus")}/> : ""}
                {currentImage + 1 !== images.length ? <KeyboardArrowRight className="right-icon modal-icon" fontSize="inherit" onClick={() => clickHandler("next")}/> : ""}
                
                <div className="modal">

                    <div className="modal-header">
                        {token ? <DeleteOutline onClick={deleteImage}/> : "inteinloggad"}
                        <Close  onClick={e => clickHandler("close")}/>  
                    </div>
                    {props.children}
                </div>
    
            </div>
        )
    }

    return null

}

export default Modal;

