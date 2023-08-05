import { useEffect, useState } from "react";

const useHouse = () => {
    const [allHouses, setAllHouses] = useState([]);

    useEffect(()=>{
        const fetchHouse = async () => {
            const resp = await fetch('/houses.json');
            const data = await resp.json();
            setAllHouses(data);
        }
        fetchHouse();

    }, []);

    return allHouses;
}

export default useHouse;