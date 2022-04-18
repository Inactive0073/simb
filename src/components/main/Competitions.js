import React, {useState} from "react";
import Search from "./Search";

const Competitions = () => {
    const [data, setData] = useState([]);
    const [competitions, setCompetitions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [value, setValue] = useState('');
}

const filterCompetition=competitions.filter(competition => {
    return competition.name.toLowerCase().includes(value.toLowerCase())
})