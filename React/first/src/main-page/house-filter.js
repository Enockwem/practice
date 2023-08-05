import './index.css'

const HouseFilter = ({allHouses}) => {

    const countries = allHouses ? Array.from(new Set(allHouses.map( h => h.country))) : [];

    countries.unshift(null);

    return (
        <div className='house-filter'>
            <div className=''>
                Look for your dream house in country:
            </div>
            <div className='house-select'>
                <select className='house-option'>
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