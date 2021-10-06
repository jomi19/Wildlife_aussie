import { useEffect, useState } from "react";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function NewBlogg() {
	const [blogPost, setBlogPost] = useState(() => EditorState.createEmpty(),);

	function submitHandler() {
		console.log(blogPost)
	}

	return (
		<div className="inner-main">
			<div className="main-content">
					<Editor editorState={blogPost} onChange={setBlogPost} />
					<button className="button" onClick={submitHandler}> TEST</button>
			</div>
		</div>
	);
}
	
export default NewBlogg;