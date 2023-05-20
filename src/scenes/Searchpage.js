import { useState, useEffect } from "react"; //library
import { useNavigate } from "react-router-dom"; //React Router DOM library.

export default function Searchpage() {
  //he code defines a functional component named "AddMedia" that takes a prop called setMedia.
  const [zodiac, setZodiac] = useState("");
  const [year, setYear] = useState("");
  const [allsigns, setAllsigns] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("https://us-central1-zodiacwebbe.cloudfunctions.net/api/data")
      .then((resp) => resp.json())
      .then(setAllsigns)
      .catch(alert);
  }, []);
  const token = localStorage.getItem("token"); //grabs a token from localstorage for memory

  const handleSearchpage = (e) => {
    e.preventDefault(); //prevents the form from sending random data to the api - instead sends in our code.
    navigate("/" + zodiac);
  };

  return (
    <>
      <form onSubmit={handleSearchpage}>
        <h2> Enter : </h2>
        <label htmlFor="zodiac">
          Zodiac &nbsp;

          <select onChange={(e) => {
              setZodiac(e.target.value);
            }}>
            <option>Choose a sign:</option>
            {allsigns && allsigns.map(sign=>(              
              <option key={sign["id"]}> {sign.sign} </option>
            ))}
          </select> 
        </label>
        <br />
        <label htmlFor="year">
          Year &nbsp; &nbsp; &nbsp;
         
          <select onChange={(e) => {
              setYear(e.target.value);
            }}>
            <option> Year</option>
            {allsigns && allsigns.map(sign=>(
              <option key={sign["id"]}> {sign.sign} </option>
              ))}
          </select>
        </label>
        <br />
        <input type="submit" value=" Submit" />
      </form>
    </>
  );
}
