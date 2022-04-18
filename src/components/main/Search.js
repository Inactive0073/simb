import React from "react";
import { Input } from '@rebass/forms';
import { Box } from "rebass";

function Search({setValue, setCurrentPage}) {
    function handleOnchange(e){
        setValue(e.target.value);
        setCurrentPage(1);
    }
    return(
        <Box
            as="form"
            style={{
                width:"200px",
                position:"relative",
                marginBottom:"50px"
            }}
        >
            <Input
            type="search"
            placeholder="Найти"
            onChange={(e) => handleOnchange(e)}
            style={{
                color:"#fff",
                outline: 'none',
                borderRadius: "4px",
                boxShadow:"none"
            }}
            />
        </Box>
    )
}
export default Search;