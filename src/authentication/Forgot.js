import React , { useRef ,useState ,useEffect} from 'react'
import { useAuth } from './AuthProvider'
import { Form , Button ,Alert} from 'react-bootstrap'
import { Link  } from 'react-router-dom'
import AuthStyle from './AuthStyle'

const Forgot = () => {
    const userRef = useRef()
    const { warning , forgot} =useAuth()
    const [error , setError] = useState()
    
    async function handleforgot()
    {
        try{
            if((userRef.current.value).trim().length!==0){
                await forgot(userRef.current.value)
            }
            else{
                setError("username and password can't be empty")
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
                            <font className="alink">Reset Password</font>
                            <input type="email" className='form-control' ref= { userRef } placeholder="email"/>
                            <Button className="btn btn-success"  onClick= { handleforgot }>Send Email</Button>
                        </Form>
                        <Link to="/signin" className="alink">Remembered Pasword ? Login</Link>
                        </center>
                </div>
            </div>
            <br/><br/><br/>
            <center><font className="copyrights">&copy; We4-Solutions</font></center>
           
        </div>
    )
}

export default Forgot
