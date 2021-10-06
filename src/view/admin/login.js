import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import {API_URL} from "../../config.json";
import axios from "axios";

function Login(props) {
    const [logIn, setLogIn] = useState();
    const user = sessionStorage.getItem("token");

    console.log(user)
    function submitHandler(e) {
        e.preventDefault();
        axios.post(`${API_URL}user`, {
            userName: logIn.username,
            password: logIn.password
        })
        .then((respons) => {
            console.log(respons.data)
            sessionStorage.setItem("token", respons.data.token)
        },(error) => {
            sessionStorage.setItem("token", false)
        })
          
    }

    function changeHandler(e) {
        setLogIn({...logIn, [e.target.name]: e.target.value })
    }

    return (
        <div className="inner-main">
            <div className="main-content">
                <Form onSubmit={(e) => submitHandler(e)}>

                    <Form.Group classname="mb-3">
                        <FloatingLabel label="Användarnamn" className="mb3">
                            <Form.Control   name="username" 
                                            type="text" 
                                            onChange={(e) => changeHandler(e)}  
                                            required/>
                        </FloatingLabel>   
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel label="Lösenord" className="mb3">
                            <Form.Control   name="password"
                                            type="password" 
                                            onChange={(e) => changeHandler(e)}
                                            required/>
                        </FloatingLabel>
                    </Form.Group>
                    <button variant="primary" type="submit">Logga in</button>
                </Form>
            </div>
        </div>
    )


}
	
export default Login;