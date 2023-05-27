import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Icon, InputFiled, SearchComponent, SearchWrapper} from "./chatMenu.styled";

const Search = () => {
    return (
        <>
            <SearchComponent>
                <SearchWrapper>
                    <Icon>
                        <SearchIcon/>
                    </Icon>
                    <InputFiled
                        placeholder={`Search or start new chat`}
                        fontSize={"small"}
                    />
                </SearchWrapper>
            </SearchComponent>
        </>
    );
};

export default Search;
