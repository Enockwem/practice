import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";

function SearchResults({allHouses}){
    const { country } = useParams();
    const filteredHouses = allHouses.filter(element => element.country === country);

    return(
        <div>
            <h4>Results for {country}:</h4>
            <table>
                <tbody>
                    {
                        filteredHouses.map(h => (
                            <SearchResultsRow house={h}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SearchResults;