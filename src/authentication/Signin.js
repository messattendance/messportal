import React , { useRef ,useState , useEffect} from 'react'
import { useAuth } from './AuthProvider'
import { Form , Button ,Alert } from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import '../assets/css/auth.css'
import AuthStyle from './AuthStyle'


 const Signin = () => {
    const userRef = useRef()
    const passRef = useRef()
    const { signin } = useAuth()
    const { warning } =useAuth()
    const [error , setError] = useState()

    function handlesignin(){
        console.log('hi');
    }

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
        <center>
            {warning && <Alert variant="danger">{(warning.code).slice(5,)}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}<br/>
        </center>
            {/* <font className="title">MHCS AND CG</font> */}
            <div className="mainclass">
                <AuthStyle />
                <div className="sub2">
                        <center>  
                                <Form autoComplete="off">
                                    <font className="alink">Student Login   |   Counsellor Login</font><br/>
                                    <input type="email" ref= { userRef }  className="form-control" placeholder="email" />
                                    <input type="password"  ref= { passRef }  className="form-control" placeholder="password"/>
                                    <Link to="/forgot" className="alink">Forgot Password?</Link><br/>
                                    <Button className="btn btn-success" onClick= { handlesignin }>Login</Button>
                                </Form>
                                <Link to="/signup" className="alink">New Member? Signup</Link><br/>
                        </center>
                </div>
            </div>
            <center><font className="copyrights">&copy; We4 Solutions</font></center>
        </div>
    )
}

export default Signin
