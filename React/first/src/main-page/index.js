import { useCallback, useEffect } from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import SearchResults from "../search-result";
import HouseFilter from "./house-filter";
import FeaturedHouse from "./featured-house";
import './index.css';
import useHouse from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";

export default function App(){

    const allHouses = useHouse();
    const featuredHouse = useFeaturedHouse(allHouses);

    // console.log(allHouses);

    const header = <Header subtitle="Providing houses all over the world"/>;

    return (
        <Router>
            <div className="container">
                {header}
                <hr></hr>
                <HouseFilter allHouses={allHouses} />
                <Routes>
                    <Route path="/searchresults/:country" element={<SearchResults allHouses={allHouses} />} />
                    <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
                </Routes>
            </div>
        </Router>
    )
}