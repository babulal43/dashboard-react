import { useEffect, useState, } from "react";
import Item from "./Item";

// const userList = [
//     { id: 1, name: "John Doe", date: "2025-03-01", status: "Active" },
//     { id: 2, name: "Jane Smith", date: "2025-03-02", status: "Inactive" },
//     { id: 3, name: "Alice Green", date: "2025-03-03", status: "Active" },
//     { id: 4, name: "Bob Brown", date: "2025-03-04", status: "Active" },
//     { id: 5, name: "Charlie Blue", date: "2025-03-05", status: "Suspended" },
//     { id: 6, name: "Dana White", date: "2025-03-06", status: "Active" },
//     { id: 7, name: "Eva Black", date: "2025-03-07", status: "Inactive" },
//     { id: 8, name: "Frank Gold", date: "2025-03-08", status: "Active" },
//     { id: 9, name: "Grace Silver", date: "2025-03-09", status: "Suspended" },
//     { id: 10, name: "Henry Pink", date: "2025-03-10", status: "Active" }
//   ];


  export default function List(props){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        // console.log(users)
    },[])

    return(
        <div className="main-content">
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map((item)=>(
                                    <Item user={item}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

  }