import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Icon, InputFiled, SearchComponent, SearchWrapper} from "./chatMenu.styled";

const Search = ({setText}) => {
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
                        onChange={(e) => setText(e.target.value)}
                    />
                </SearchWrapper>
            </SearchComponent>
        </>
    );
};

export default Search;
