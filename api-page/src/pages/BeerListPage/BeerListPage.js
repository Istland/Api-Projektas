import './BeerListPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const BeerListPage = () => {

    const [data, setData] = useState();

    useEffect(() => {
        axios.request(`https://api.punkapi.com/v2/beers`)
            .then(function (response) {
                setData(response.data);
            })
    }, []);

    return (
        <ul>
            {data && data.map((elem, index) => <li key={index}><Link to={`/beer/${elem.id}`}> {elem.name} </Link></li>)}
        </ul>
    );
}

export default BeerListPage;