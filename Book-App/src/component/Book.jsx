import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/UserContext';

const Book = () => {
    const [data, setData] = useState([]);  // state variable to store the fetched data 
    const { value , showBook } = useContext(AppContext);  // importing the value state from AppContext 

    useEffect(() => {
        const fetchData = () => { // fetching  the data using axios 

            axios.get("https://reactnd-books-api.udacity.com/books", {
                headers: { 'Authorization': 'whatever-you-want' }
            })
                .then(response => {
                    setData(response.data.books);
                })
                .catch(error => { // catching the errors and displaying in the console 
                    console.log(error)
                    console.log(error.message);
                    console.log("Status Code : ", error.request.status)
                });
        }
        fetchData();
    })
    const searchvalue = data.filter(elem => elem.title.toLowerCase().includes(value));  // filtering the data based on the input value 

    var hoverStyle = {
        padding : "10px",
        transform : "scale(1.03)",
        backgroundColor :  "rgba(151, 128, 128, 0.3)"
    }
    // console.log(showBook)
    return (
        // displaying the books based on the searchvalue and mapping it to display the required values  
        <div>
            {!showBook && <div>
                <h1 className='message'>
                Please  Register to View the books
                </h1>
                 </div>}
            {searchvalue.length == 0 ? <div>
                <h2 className='h2'> Search Results : <span style={{ color: "white", fontSize: "2.5rem" }}> 0 </span> </h2>
                <h5 className='des'> Please search again with a  valid book title. </h5>
            </div> : ""}    
            <div className='book-container' style={{
                filter : `${showBook ? "blur(0px)" : "blur(10px)"}`
            }}>
                {searchvalue.map((elem, idx) => {
                    return <div key={idx} className='book' style={{
                        hoverStyle
                    }}>
                        <a href={elem.previewLink} target="blank" style={{
                            cursor : `${showBook ? "pointer" : "none"}`
                        }}
                        >
                            <img className='bookimg' src={elem.imageLinks.thumbnail} alt="book-img" />
                        </a>
                        <h2 id='title'>{elem.title}</h2>
                        <p>{elem.averageRating} ⭐ <span>Free</span></p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Book