import { useCallback, useEffect } from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import SearchResults from "../search-result";
import HouseFilter from "./house-filter";
import FeaturedHouse from "./featured-house";

export default function App(){
    const [ allHouses, setAllHouses ] = useState([]);

    const fetchHouses = useCallback(async () => {
        const res = await fetch('../public/houses.json');
        const houses = await res.json();
        setAllHouses(houses);
    }, []);

    useEffect(() => {
        fetchHouses();
    }, [fetchHouses])

    let featuredHouse = useMemo(() => {
        if(allHouses.length){
            const randomIndex  = Math.floor(Math.random() * allHouses.length);
            return allHouses[randomIndex];
        }
    }, [allHouses])
    const header = <Header subtitle="Providing houses all over the world"/>;

    return (
        <Router>
            <div className="container">
                {header}
                <HouseFilter allHouses={allHouses} />
                <Routes>
                    <Route path="/searchresults/:country" element={<SearchResults allHouses={allHouses} />} />
                    <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
                </Routes>
            </div>
        </Router>
    )
}