import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Data from "./Components/Data";
import React from "react";

export default function App() {

    const cards = Data.map(item => {
        return (
                <Card
                    key = {item.id}
                    item = {item}
                />
            )
    })
    
    return (
        <>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
            
        </>
    )
}