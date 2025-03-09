import { Link } from "react-router-dom"
 export default function Item(props){
    return(
        <tr>
            <td>
                {props?.user?.id ? props?.user?.id : '--'} 
            </td>
            <td>
                <Link to="/details">
                    {props?.user?.name ? props?.user?.name : '--'} 
                </Link>
            </td>
            <td>
                {props?.user?.email ? props?.user?.email : '--'} 
            </td>
            <td>
                {props?.user?.address?.city ? props?.user?.address?.city : '--'} 
            </td>
            <td>
                {props?.user?.phone ? props?.user?.phone : '--'} 
            </td>
        </tr>
    )
}