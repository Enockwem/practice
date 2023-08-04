import House from "../house";

function FeaturedHouse({house}){
    if(house){
        return(
            <div>
                <div>
                    <h3>Featured House</h3>
                </div>
                <House house={house} />
            </div>
        )
    }

    return (
        <div>No featured house at this time.</div>
    )
}

export default FeaturedHouse;