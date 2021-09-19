import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import axios from "axios";
import {API_URL} from "./../../config.json";
import { FileCopy } from "@material-ui/icons";

function Gallery() {
	const [images, setImages] = React.useState(null);
	const maxNumber = 69;
	const fileSelectHandler = (event) => {
		setImages(event.target.files[0])
	};

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

	function getImage() {
		return URL.createObjectURL(images);
	}
	console.log(images)
	return (
		<div >
			{images && <img src={getImage()} /> }
			<input type="file" accept="image/*" onChange={e => fileSelectHandler(e)}/>
			<button onClick={uploadHandler}>Upload</button>
		</div>
	);
}
	
	export default Gallery;