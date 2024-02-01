import React, { useState } from "react";
import WishInput from "./WishInput/WishInput";
import WishList from "./WishList";
import './app.css';



const initialWishes = [
    { text: 'Travel to the moon', done: false },
    { text: 'Pay the Gym', done: true },
    { text: 'Go to the Gym', done: false },
]

const App = () => {
    const [wishes, setWishes] = useState(initialWishes);
    return (
        <div className="app">
            <h1 className="app__title">My wishlist app</h1>
            <WishInput onNewWish={wish => setWishes([wish, ...wishes])} />
            <WishList wishes={wishes} onWishesChange={setWishes}/>
            <button 
                className="app__archive_btn"
                type="button" 
                onClick={()=>{setWishes(wishes.filter(wish => !wish.done))}}
            >Archive done</button>
        </div>
    );
};

export default App;