import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { toast } from "react-toastify";

let Index = ()=>{
    let emailRef = useRef();
    let passRef = useRef();
    let router = useRouter();
    let onLoginHanlder = (event)=>{
        event.preventDefault();
        if(emailRef.current.value =="mohammed.kharma2001@gmail.com" && passRef.current.value=="soso.123"){
            toast.success("Login Suucess",{position:"bottom-left"});
            router.push("/admin/home")
        }else{
            toast.error("Pleace Entrer a Input",{position:"bottom-left"});
        }
    }
    return(
        <div className="wapper-logIn">
            <div className="contnet-logIn">
                <h3>Log In</h3>
                <div className="all-input-faild">
                    <label>Email:</label>
                    <input ref={emailRef} type="email" placeholder="Pleace Enter a value" />
                    <p className="validation">
                        Pleace Enter a Email
                    </p>
                </div>
                <div className="all-input-faild">
                    <label>Password:</label>
                    <input ref={passRef} type="password" placeholder="Pleace Enter a value" />
                    <p className="validation">
                        Pleace Enter a Password
                    </p>
                </div>
                <div className="chec-and-forget">
                    <div className="check">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                    </div>
                    <div className="forget">
                        <a href="">Forget Password?</a>
                    </div>
                </div>
                <div className="all-but-log">
                    <a onClick={onLoginHanlder}>Log In</a>
                    {/* <Link href="/admin/home" onClick={onLoginHanlder} >Log In</Link> */}
                </div>
            </div>
        </div>
    );
}
export default Index;