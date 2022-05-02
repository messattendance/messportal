import React , { useRef ,useState , useEffect} from 'react'
import { useAuth } from './AuthProvider'
import { Link  } from 'react-router-dom'
import '../assets/css/auth.css'
import AuthStyle from './AuthStyle'
import Nav from '../components/Nav'
import { Form , Button } from 'react-bootstrap'
import'../assets/css/assets.css'


 const Signin = () => {
    // const userRef = useRef()
    // const passRef = useRef()
    // const { signin } = useAuth()
    // const { warning } =useAuth()
    // const [error , setError] = useState()



    // async function handlesignin()
    // {
        
    //     try{
    //         if((passRef.current.value).trim().length!==0 && (userRef.current.value).trim().length!==0){
    //             await signin(userRef.current.value , passRef.current.value)
    //         }
    //         else{
    //             setError("username and password can't be empty")
    //         }
    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    // }
    // useEffect(() => {
    //     setError('')
    // }, [warning])


    return (
        <div>
            <div className="contact-background-image">
                <div className='navbar'>
                    <h6><Link className='link font_m font_44' to="/">Mess Attendance And Monitoring System</Link></h6>
                    
                </div>
                <div className="head">
                <h2 className='font_sb text-light  p-3'>Mess Administration</h2>
                </div>
            
                <div className="container col-sm-3 bg-light rounded mt-5 py-5">
                        <center>  
                                <Form autoComplete="off">
                                    <h5 className="font_m pt-5" >Signin</h5>
                                    <input type="email"  className="form-control my-5" placeholder="Email" />
                                    <input type="password"  className="form-control my-5" placeholder="Password"/>
                                    {/* <Link to="/forgot" className="alink">Forgot Password?</Link><br/> */}
                                    <Button variant='none' className="button bg_color_dark w-50 text-white font_m my-3" >Login</Button>
                                </Form>
                                {/* <Link to="/signup" className="">New Member? Signup</Link><br/> */}
                        </center>
                </div>
               
            </div>
       
        
        </div>
    )
}

export default Signin