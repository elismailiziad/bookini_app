import './BokiniHome.css';
import {useState} from 'react';
import BookPage from './Book';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
 
const firebaseConfig = {
    apiKey: "AIzaSyAGSzODfCfORJ7ch7PWh7bQyFNgJTgsPjY",
    authDomain: "boukini-f59d6.firebaseapp.com",
    databaseURL: "https://boukini-f59d6-default-rtdb.firebaseio.com",
    projectId: "boukini-f59d6",
    storageBucket: "boukini-f59d6.appspot.com",
    messagingSenderId: "755080283888",
    appId: "1:755080283888:web:fcb4dba4870d20728ce435"
  };

// Initialiazing Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Home = () => {

    const [valid, setvalid] = useState(true); 
    const [hide, sethide] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');

        if(!book_date.value || !book_time.value){
            alert('Please fill the date & time of reservation.');
        }else{
            writeUserData();
        function writeUserData() {
            const db = getDatabase();
            const email = document.getElementById('input1').value;
            const temp = email.substring(0,email.indexOf('@'));
            const userId = temp.replace('.',"-");
            set(ref(db, 'clients/' + userId), {
            booking_date: book_date.value,
            booking_time: book_time.value,
            });
        }
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }

    return (
        <>
        <BookPage/>
            <div className="container">
                <div className="content">
                    <div className="text">Book your reservation Now!</div>
                    <div className="form2">
                        <div className="txt">Date & Time you would like to reserve.</div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="inputData">
                                <input type="date" name="" id="book-date" />
                            </div>
                            <div className="inputData">
                                <input type="time" name="" id="book-time" />
                            </div>
                            
                            <div className="book">
                                <button type="submit">Reserve</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;