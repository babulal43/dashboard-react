import { useEffect, useState } from "react"

export default function Details(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => setUsers(json));
        // console.log(users)
    },[])
    return(
        <div className="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>User Details</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{users?.name ? users?.name : '--'}</h5>
                                <p className="card-text"><strong>Email:</strong> {users?.email ? users?.email : '--'}</p>
                                <p className="card-text"><strong>Username:</strong> {users?.username ? users?.username : '--'}</p>
                                <p className="card-text"><strong>Phone:</strong> {users?.phone ? users?.phone : '--'}</p>
                                <p className="card-text"><strong>Website:</strong> <a href="http://hildegard.org" target="_blank">{users?.website ? users?.website : '--'}</a></p>
                                <h6>Address:</h6>
                                <p className="card-text">
                                    {users?.address?.city ? users?.address?.city : '--'}
                                </p>
                                <h6>Company:</h6>
                                <p className="card-text">
                                    {users?.company?.name ? users?.company?.name : '--'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}