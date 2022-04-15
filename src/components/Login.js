import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"",password:""})
    const [createuser, setCreateuser] = useState({name:"",email:"",phone:"",password:"",})
    let history = useHistory();
    
    const hendalMoving=()=>{
      document.querySelector('.login-section-1').classList.toggle('active');
      document.querySelector('.login-section-2').classList.toggle('active');
    }


    // login 
    const handalLoginSubmit = async (e)=>{
        e.preventDefault(); //this is for.. not reload when you submit

      // API Call
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:credentials.email, password:credentials.password }),
      });
  
      const json = await response.json();

        if(json.success === true){
            // save the auth token and redirect 
            sessionStorage.setItem('token',json.authtoken)
            history.push('/');
            props.showAlert("Login Successfully","success")
            
        }else{
            props.showAlert("invalid credentials","danger");
            setInterval(() => {
                props.showAlert("Enter a valid detail","warning")
            }, 3500);
        }
    }
    const OnChangeForLogin =(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }


    // create 
    const handalUserCreate= async(e)=>{
        e.preventDefault(); //this is for.. not reload when you submit
        
        // API Call
      const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:createuser.name, email:createuser.email, phone:createuser.phone, password:createuser.password }),
      });
  
      const json = await response.json();

        if(json.success === true){
            // save the auth token and redirect 
            sessionStorage.setItem('token',json.authtoken)
            history.push('/');
            props.showAlert("New Account Created ","success");

        }else{
            props.showAlert("invalid credentials","danger");

        }
    }

    const OnChangeForCreate =(e)=>{
        setCreateuser({...createuser,[e.target.name]:e.target.value})

    }
  return (
    <>
      <div className="login-container">
        <div className="login-box">
            <div className="login-section-1 flex">
                <div className="login-text-left">
                    <div className="login-text flex">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your Personal Details</p>
                        <p>and start journey with us</p>
                        <span>sign up</span>
                    </div>
                </div>
                <div className="login-text-right">
                    <div className="login-text flex">
                        <h1>Welcome Back!</h1>
                        <p>to keep connected with us please</p>
                        <p>login with your personal info</p>
                        <span>sign in</span>
                        
                    </div>
                </div>
                <a className="login-btn" onClick={hendalMoving}></a>
            </div>

            
            <div className="login-section-2">
                <div className="form-text-right">
                    <div className="form-text">
                        <h1>Sign In to NoteBook</h1>
                    </div>
                    <div className="form-icon flex">
                        <div className="icon-box flex">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="icon-box flex">
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="icon-box flex">
                            <i className="fa fa-google-plus"></i>
                        </div>
                    </div>
                    <form  onSubmit={handalLoginSubmit} >
                        <div className="input flex">
                            <i className="fa fa-envelope-o"></i>
                            <input type="email" onChange={OnChangeForLogin} name="email" id="login-email" value={credentials.email} placeholder="Email id" />
                        </div>
                        <div className="input flex">
                            <i className="fa fa-lock"></i>
                            <input type="password"onChange={OnChangeForLogin} name="password" id="login-password" value={credentials.password} placeholder="Password" />
                        </div>
                        <div className="input flex">
                            <a href="#">Forget Your Password?</a>
                        </div>
                        <div className="input flex">
                            <button className="input-btn" type="submit">LogIn</button>
                        </div>
                    </form>
                </div>
                <div className="form-text-left">
                    <div className="form-text">
                        <h1>Create Account</h1>
                    </div>
                    <div className="form-icon flex">
                        <div className="icon-box flex">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <div className="icon-box flex">
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="icon-box flex">
                            <i className="fa fa-google-plus"></i>
                        </div>
                    </div>
                    <form onSubmit={handalUserCreate}>
                        <div className="input flex">
                            <i className="fa fa-user-o"></i>
                            <input type="text" name="name" id="name"onChange={OnChangeForCreate} value={createuser.name} placeholder="Name" />
                        </div>
                        <div className="input flex">
                            <i className="fa fa-envelope-o"></i>
                            <input type="email" name="email" id="email" onChange={OnChangeForCreate} value={createuser.email} placeholder="Email id" />
                        </div>
                      
                        <div className="input flex">
                            <i className="fa fa-lock"></i>
                            <input type="phone" name="phone" id="phone"onChange={OnChangeForCreate} value={createuser.phone}  placeholder="Phone no" />
                        </div>
                        <div className="input flex">
                            <i className="fa fa-lock"></i>
                            <input type="password" name="password" id="password"onChange={OnChangeForCreate} value={createuser.password}  placeholder="Password" />
                        </div>
                        <div className="input flex">
                            <button className="input-btn" type="submit">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login