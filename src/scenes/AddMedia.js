import { useState } from "react"; //library
import { Navigate } from "react-router-dom"; //React Router DOM library.

export default function AddMedia({ setMedia }) { //he code defines a functional component named "AddMedia" that takes a prop called setMedia.
  const [sign, setSign] = useState("");
  const [img, setImg] = useState("");
  const [affirm, setAffirm] = useState(""); //The component defines three state variables: sign, img, and affirm, using the useState hook
  const token = localStorage.getItem("token"); //grabs a token from localstorage for memory

  const handleAddMedia = (e) => { 
    e.preventDefault(); //prevents the form from sending random data to the api - instead sends in our code. 

    fetch("https://us-central1-zodiacwebbe.cloudfunctions.net/api/data", {
      method: "POST", //makes a POST request to the specified URL
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sign, img, affirm }),
    })
      .then((resp) => resp.json()) //The response from the server is parsed as JSON using the .json() method. If the response contains a message property, it alerts the message. Otherwise, it calls the setMedia function to update the media state with the received data. Finally, it navigates the user to the homepage ("/").
      .then((data) => {  //gets a response but we ask just for the data here
        if (data.message) {
          alert(data.message); 
          Navigate("/"); 
          return;
        }  
        setMedia(data);
       
      })
      .catch(alert);
  };

  return (
    <>
      <form onSubmit={handleAddMedia}>
        <h2> &nbsp; Add ✩ Info</h2>
        <label htmlFor="sign">
          Sign &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={sign}
            onChange={(e) => {
              setSign(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="img">
          Image &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="affirm">
          Affirmations &nbsp; 
          <input
            type="text"
            value={affirm}
            onChange={(e) => {
              setAffirm(e.target.value);
            }}
          />
        </label>
        <br />
        < input type="submit" value= "Add Sign" />
      </form>
    </>
  );
}


//It allows users to add media information, such as an image and affirmations, associated with a sign. 
//creates a form where users can input sign, image URL, and affirmations. When the form is submitted, it sends a POST request to add the media information to the server. The response is handled accordingly, and the user is navigated back to the homepage.