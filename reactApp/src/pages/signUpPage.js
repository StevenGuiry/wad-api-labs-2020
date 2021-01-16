import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Input, Button, Icon, Form, Label } from "semantic-ui-react";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Redirect to="/login" />;
  }


//   return (
//     <>
//       <br></br>
//       <h2>SignUp page</h2>
//       <p>You must register a username and password to log in </p>
//       <div className="row">
//       <div className="col-3">
//       <Form>
//         <Form.Field>
//           <label>Username</label>
//           <input value={userName} placeholder="Username" onChange={e => {setUserName(e.target.value);}}></input><br />
//         </Form.Field>
//         <Form.Field>
//           <label>Password</label>
//           <input value={password} type="password" placeholder="password" onChange={e => {setPassword(e.target.value);}}></input><br />
//         </Form.Field>
//         <Form.Field>
//           <label>Password Again</label>
//           <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {setPasswordAgain(e.target.value);}}></input><br />
//         </Form.Field>
//       {/* Login web form  */}
//       <Button type='submit' onClick={register}>Register</Button>
//       </Form>
//       </div>
//       </div>
//     </>
//   );
// };

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      <input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;