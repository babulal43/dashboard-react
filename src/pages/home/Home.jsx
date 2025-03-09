import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="container">
            <div className="welcome-box">
                <h1>Welcome to Dashboard</h1>
                <p>Lorem Lipsum Is a Dummy text</p>
                <div className="btn-row">
                    <Link className="btn btn-primary me-1 flex-fill" to="/login">Login</Link>
                    <Link className="btn btn-secondary ms-1 flex-fill" to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}