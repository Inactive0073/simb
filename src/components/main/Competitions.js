import React, {
    useEffect,
    useState
} from "react";
import Search from "./Search";
import Paginator from "./pagination";
import Competition from './Competition';
import Spinner from 'react-bootstrap/Spinner'
import background from './main-bg.jpg';

const Competitions = () => {
    const [data, setData] = useState([]);
    const [competitions, setCompetitions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [value, setValue] = useState('');


    const filterCompetition = competitions.filter(competition => {
        return competition.name.toLowerCase().includes(value.toLowerCase())
    })
    const [competitionsPerPage] = useState(9);
    const lastCompetitionPage = currentPage * competitionsPerPage;
    const firstCompetitionPage = lastCompetitionPage - competitionsPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const getData = function () {
        setLoading(true);
        fetch('http://api.football-data.org/v2/competitions/', {
                headers: {
                    'X-Auth-Token': '34b70489bd27469f922e066f13d298e3'
                }
            })
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                setCompetitions(response.competitions)
                setLoading(false);
            })
    }
    useEffect(getData, []);

    if (loading) {
        return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    }
    return (
        <main style={{
            position: "relative",
            padding:"25px"
        }}>
            <picture style={{
                position:"absolute",
                left:"0",
                top:"0",
                filter: "brightness(0.7)",
                width:"100%",
                height:"100vh"
            }}>
                <img src={background} alt="" style={{
                    objectFit:"cover",
                    width:"100%",
                    height:"100%"
                }} ></img>
            </picture>
            <Search setValue={setValue} setCurrentPage={setCurrentPage}/>
            <Competition
                competitions={filterCompetition}
                firstCompetitionPage={firstCompetitionPage}
                lastCompetitionPage={lastCompetitionPage}
                competitionsPerPage={competitionsPerPage}
            />
            <Paginator
                perPage={competitionsPerPage}
                total={filterCompetition.length}
                currentPage={currentPage}
                paginate={paginate} />
        </main>
    )
}
export default Competitions;