import { Search } from "react-bootstrap-icons";
import Searchpage from "./Searchpage.js";
import { useNavigate } from "react-router-dom";

export default function Homepage () {
    const navigate = useNavigate();

    function Searchpage() {
        navigate("/searchpage")
    }
    return (
       <h1>

        < button onClick={Searchpage} > ★ </button>
       </h1> 
    ) 
}