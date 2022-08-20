import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import img1 from "../img/unsplash_PhYq704ffdA.png";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value === "" || emailRef.current.value === "") {
      return setError(<div id="catchh" class="bg-black text-white rounded-lg py-0 px-8 mb-0 text-base " role="alert">
      <center><h3>Sorry</h3> <p>Please enter all <br></br>details to continue.</p></center>
    </div>);
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
    } catch {
      setError(<div id="catchh" class="bg-black text-white rounded-lg py-0 px-8 mb-0 text-base " role="alert">
      <center><h3>Sorry</h3></center> <p>an account with this<br></br> email already exists.</p>
    </div>);
    }

    setLoading(false);
  }

  return (
    <>
      <div class="flex flex-col justify-center h-1/2 absolute w-screen bottom-0 sm:h-screen sm:w-1/2 items-center">
        
      <img class="mb-10 object-contain w-1/2" src="https://careernetwork.co/static/media/logo.6475592d1903c4541a52f475ffaf32eb.svg" alt=".." />
         
          {error && <Alert class="bg-black text-white rounded-lg py-2 mb-6 text-base " >{error}</Alert>}
          <Form onSubmit={handleSubmit} class="max-w-[300] w-full mx-auto p-8 px-8 ">
            <Form.Group id="email">
              <input
                class="border-b border-x border-y border-t border-blue-600 mb-3 w-80 rounded-lg h-9"
                type="email"
                ref={emailRef}
                
                placeholder="   Email"
              />
            </Form.Group>
            <Form.Group id="password">
            <input
                class="border-b border-x border-y border-t border-blue-600 mb-3 w-80 rounded-lg h-9"
                type="password"
                ref={passwordRef}
                
                placeholder="   Password"
              />
            </Form.Group>
            
            <Button disabled={loading} className="  my-6 shrink gap-2 p-2 ml-16 w-1/2 py-2 px-4 rounded-full  "  type="submit">
              Submit
            </Button>
            
        
          </Form>
        </div>
        <div>
          
        <img  class="absolute sm:h-screen sm:w-1/2 sm:inset-y-0 sm:right-0 w-full top-0 h-1/2" src={img1} alt=".." />
      </div>
    </>
  );
}
