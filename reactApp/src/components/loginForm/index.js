import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom"; //Added
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import { Link } from "react-router-dom";
import { Input, Button, Icon, Form } from "semantic-ui-react";

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, errors} = useForm();

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }

//   return (
//     <form className="form bg-dark text-light" onSubmit={handleSubmit(login)}>
//         <h2>Login</h2>
//         <div className="form-group">
//             <div className="form-label">Username</div>
//             <Input class="ui input" 
//                 type="text"
//                 placeholder="Enter Username"
//                 name="username"
//                 onChange={e => { setUserName(e.target.value);}}
//                 ref={register({ required: "Username Required" })}
//             />
//         </div>
//         {errors.username && <p className="text-white">{errors.username.message} </p>}
//         <div className="form-group">
//             <div className="form-label">Password</div>
//             <Input
//                 type="password"
//                 placeholder="Enter Password"
//                 name="password"
//                 onChange={e => { setPassword(e.target.value);}}
//                 ref={register({ required: "Password Required" })}
//             />
//             <div className="form-text text-light">We'll never share your password with anyone else</div>
//         </div>
//         {errors.password && <p className="text-white">{errors.username.message}</p>}
//         <Button animated
//         type="submit" 
//         onClick={login}>
//             <Button.Content visible>Log In</Button.Content>
//             <Button.Content hidden><Icon name='arrow right'/></Button.Content>
//         </Button>
//         <div className ="form-group">
//             <div className="form-text">Not signed up yet? <Link to="/signup"> Do it now!</Link></div>
//         </div>
//     </form>
//   );
// };
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default withRouter(LoginPage); //Added