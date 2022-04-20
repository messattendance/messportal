import React , { useRef ,useState , useEffect} from 'react'
import {Button ,Form ,Alert} from 'react-bootstrap' 
import { useAuth } from './AuthProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link} from 'react-router-dom'
import AuthStyle from './AuthStyle'
import '../assets/css/auth.css'

const Signup = () => {
    const userRef = useRef()
    const passRef = useRef()
    const clgidRef = useRef()
    const classRef = useRef()
    const nameRef = useRef()
    const { signup ,warning } = useAuth()
    const [error , setError] = useState()
    
    async function handlesignup(){
        try{
            if((passRef.current.value).trim().length!==0 && (classRef.current.value).trim().length!==0 && (userRef.current.value).trim().length!==0 && (clgidRef.current.value).trim().length!==0 && (nameRef.current.value).trim().length!==0){
                await signup(userRef.current.value , passRef.current.value , clgidRef.current.value , classRef.current.value ,nameRef.current.value)
            }
            else
            {
                setError("usernamezz and password can't be empty")
            }
        }
        catch(e){
            console.log(e)
        }

    }

    
    useEffect(() => {
        setError('')
    }, [warning]) 
    return (
        <div>
             <center>
            {warning && <Alert variant="danger">{(warning.code).slice(5,)}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}<br/>
        </center>
            <font className="title">MHCS AND CG</font>
            <div className="mainclass">
                <AuthStyle />
                <div className="sub2">
                        <center>  
                        <Form>
                            <font className="alink">Student SignUp</font><br/>
                            <input type="email" ref={userRef} className='form-control' placeholder="email"/>
                            <input type="text" ref={nameRef} className="form-control" placeholder="username"/>
                            <input type="password" ref={passRef} className='form-control' placeholder="password"/>
                            <input type="text" ref={clgidRef} className="form-control" placeholder="collegeid"/>
                            <input type="text" ref={classRef} className="form-control" placeholder="class"/>
                            <Button className="btn btn-success"  onClick = { handlesignup }>Signup</Button>
                        </Form><Link  to="/signin" className="alink">Already Have an Account ? Signin</Link>
                        </center>
                </div>
            </div>
            <br/>
            <center><font className="copyrights">&copy; We4 Solutions</font></center>
        </div>
    )
}

export default Signup
