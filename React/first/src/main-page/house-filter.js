
const HouseFilter = ({allHouses}) => {
    const countries = allHouses ? Array.from(new Set(allHouses.map( h => h.country))) : [];

    countries.unshift(null);

    return (
        <div>
            <div>
                Look for your dream house in country:
            </div>
            <div>
                <select>
                    {
                        countries.map(c => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default HouseFilter;