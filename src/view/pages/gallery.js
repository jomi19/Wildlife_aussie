import React, { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import axios from "axios";
import {API_URL,IMG_PATH } from "./../../config.json";
import { FileCopy } from "@material-ui/icons";
import "./gallery.scss"
import Modal from "./../gallery/Modal.js";



function Gallery() {
	const [images, setImages] = useState({});
	const [update, setUpdate] = useState([]);
	const [popUp, setPopUp] = useState(false)
	const [currentImage, setCurrentImage] = useState(0);
	const token = sessionStorage.getItem("token");
	const testar = [];
	const maxNumber = 69;
	let gallery = []
	const fileSelectHandler = (event) => {
		setImages(event.target.files[0])
	};

	useEffect(() => {
		axios.get(`${API_URL}gallery/all`)
		.then(respons => {
			setUpdate(respons.data)
			console.log(respons.data)
		});
		
	},[])

	function uploadHandler() {
		const fd = new FormData()
		fd.append("image", images);
		fd.append("text", "testar")
		axios.post(`${API_URL}gallery`, fd).then(res=> {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})

	}
	function test() {
		console.log(update)
	}

	function getImage() {
		return URL.createObjectURL(images);
	}

	function imageClick(x) {
		setCurrentImage(x);
		setPopUp(true)
	}

	for(let x = 0; x < update.length; x++) {
		testar.push(<img src={`${IMG_PATH}${update[x].imagePath}`} key={x} className="gallery-img" onClick={() => imageClick(x)}/>)
	}

	return (
		<div className="inner-main">
			<div className="main-content">
				<Modal 
					show={popUp}
					close={() => setPopUp(false)} 
					currentImage={currentImage}
					setCurrentImage={setCurrentImage}
					images={update}
				>
					<img src={`${IMG_PATH}${update[currentImage]?.imagePath}`} />
				</ Modal>
				<div className="inner-main-content gallery">
				
					{testar}
				</div>
			</div>
		</div>
	);
}
	
	export default Gallery;
	// ,
	// {images && <img src={getImage()} /> }
	// <input type="file" accept="image/*" onChange={e => fileSelectHandler(e)}/>
	// <button onClick={uploadHandler}>Upload</button>
	//<PopUpImage show={popUp} onHide={() => setPopUp(false)}/>