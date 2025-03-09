import { Link } from "react-router-dom"
export default function Signup(){
    return(
        <div className="main-content">
            <div className="container">
                <div className="login-box">
                    <div className="form-group">
                        <label>UserName</label>
                        <div className="input-box">
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-box">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-box">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="input-box">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div className="btn-row">
                        <Link className="btn btn-primary me-1 flex-fill" to="/dashboard">Submit</Link>
                        <Link className="btn btn-secondary ms-1 flex-fill" to="/">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    
    )
}