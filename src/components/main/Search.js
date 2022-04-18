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
        >
            <Input
            type="search"
            placeholder="Найти"
            onChange={(e) => handleOnchange(e)}
            />
        </Box>
    )
}
export default Search;