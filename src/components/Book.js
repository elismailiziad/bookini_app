import './Book.css'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import ifrane_logo from '../ifrane_city.jpg';

const firebaseConfig = {
    apiKey: "AIzaSyAGSzODfCfORJ7ch7PWh7bQyFNgJTgsPjY",
    authDomain: "boukini-f59d6.firebaseapp.com",
    databaseURL: "https://boukini-f59d6-default-rtdb.firebaseio.com",
    projectId: "boukini-f59d6",
    storageBucket: "boukini-f59d6.appspot.com",
    messagingSenderId: "755080283888",
    appId: "1:755080283888:web:fcb4dba4870d20728ce435"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Book = () => {
    let Restaurants = [
        {
            name: "Bonsai Sushi Bar",
            description: "A mix of Thai, Korean, Vietnamese, Chinese and Japanese specialities, Bonsai restaurant is an invitation to discover the best Asian dishes from the area in a cozy and warm familial atmosphere.",
            image: "https://img.restaurantguru.com/r2d0-meals-Restaurant-For-You.jpg",
        },

        {
            name: "Foodie",
            description: "Delicious dishes from American options are served in the Foody restaurant located in the tourist city of Ifrane, where customers sit on simple wooden benches, "
            +"whether in the indoor hall or the outdoor arena, from unique menu options, delicious American burgers, chicken sandwiches with french fries, fried chicken wings, Taco salad, and many other options.",
            image: "https://lh3.googleusercontent.com/p/AF1QipPTyyWAP1njYP82GQEd6WbawkZDq7TPMspJN4Ov=s1280-p-no-v1",
        },
        {
            name: "For You",
            description: "We welcome you into our family, where everything is made 'For You'. The restaurant is a multispecialty, high quality food restaurant. The unique delicious dishes vary between international and local options, included in the menu of the For You Ovens restaurant, "
            +"including Japanese sushi, American burgers, Italian pasta and pizza, fried chicken salad with pasta, healthy shrimp salad, and others.",
            image: "https://img.restaurantguru.com/c90c-Restaurant-For-You-Ifran-meals.jpg",
        },
        {
            name: "El Pepito",
            description: "Just as its name suggest, El Pepito offers delicious and exclusive Italian cuisine. In a typically refined setting, Luigi invites you to discover the specialties of the most famous Italian restaurant in the area."
            + "The menu ranges from traditional calzone Italian pizzas to Italian Sushi.",
            image: "https://lh3.googleusercontent.com/p/AF1QipP8bd8XEtUayEQNdyc-CYOilP5R6tSqizp24fC7=s680-w680-h510",
        },
    ];

    const bookRestaurant1 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const descriptionTarget = document.querySelector("#targetDescription");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Restaurants[0].image;
        nameTarget.innerHTML = Restaurants[0].name;
        descriptionTarget.innerHTML = Restaurants[0].description;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            const email = document.getElementById('input1').value;
            const temp = email.substring(0,email.indexOf('@'));
            const userId = temp.replace('.',"-");
            set(ref(db, 'bookings/' + userId), {
            restaurant_name: Restaurants[0].name,
            });
        }

    }

    const bookRestaurant2 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const descriptionTarget = document.querySelector("#targetDescription");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Restaurants[1].image;
        nameTarget.innerHTML = Restaurants[1].name;
        descriptionTarget.innerHTML = Restaurants[1].description;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            const email = document.getElementById('input1').value;
            const temp = email.substring(0,email.indexOf('@'));
            const userId = temp.replace('.',"-");
            set(ref(db, 'bookings/' + userId), {   
            restaurant_name: Restaurants[1].name,
            });
        }
    }
    const bookRestaurant3 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const descriptionTarget = document.querySelector("#targetDescription");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Restaurants[2].image;
        nameTarget.innerHTML = Restaurants[2].name;
        descriptionTarget.innerHTML = Restaurants[2].description;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            const email = document.getElementById('input1').value;
            const temp = email.substring(0,email.indexOf('@'));
            const userId = temp.replace('.',"-");
            set(ref(db, 'bookings/' + userId), {   
            restaurant_name: Restaurants[2].name,    
            });
        }
    }
    const bookRestaurant4 = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const descriptionTarget = document.querySelector("#targetDescription");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = Restaurants[3].image;
        nameTarget.innerHTML = Restaurants[3].name;
        descriptionTarget.innerHTML = Restaurants[3].description;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            const db = getDatabase();
            const email = document.getElementById('input1').value;
            const temp = email.substring(0,email.indexOf('@'));
            const userId = temp.replace('.',"-");
            set(ref(db, 'bookings/' + userId), {
            restaurant_name: Restaurants[3].name,
            });
        }
    }

    const request = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const descriptionTarget = document.querySelector("#targetDescription");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";

        alert("Sucess! Your request has been sent.");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        descriptionTarget.innerHTML = '';

    }

    return (
        <div className="box">
            <div className="content">
                <div className="text">Find the best restaurants in the city of Ifrane</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                    <img src={ifrane_logo} id='targetImage' alt="" />
                         <div className="restaurant_name" id='targetName'></div>
                        <div className="description" id='targetDescription'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookRestaurant1}>
                            <img src={Restaurants[0].image} alt="Restaurant1" />
                            <div className="restaurant_name">{Restaurants[0].name}</div>
                            <div className="description">{Restaurants[0].description}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRestaurant2}>
                            <img src={Restaurants[1].image} alt="Restaurant2" />
                            <div className="restaurant_name">{Restaurants[1].name}</div>
                            <div className="description">{Restaurants[1].description}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRestaurant3}>
                            <img src={Restaurants[2].image} alt="Restaurant3" />
                            <div className="restaurant_name">{Restaurants[2].name}</div>
                            <div className="description">{Restaurants[2].description}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={bookRestaurant4}>
                            <img src={Restaurants[3].image} alt="Restaurant4" />
                            <div className="restaurant_name">{Restaurants[3].name}</div>
                            <div className="description">{Restaurants[3].description}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;