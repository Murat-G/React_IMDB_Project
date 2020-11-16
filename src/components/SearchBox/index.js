import {useState} from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"

export const SearchBox = ({setSearchKeyword}) => {
    const [inputValue, setInputValue] = useState("");

    const enterButton = (e) => {
        if(e.keyCode === 13){
            setSearchKeyword(inputValue)
        }
    }
    return (
        <StyledSearchBox>
           <StyledSearchInput isColored={false} onChange={(e)=>setInputValue(e.target.value)} onKeyDown={enterButton}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputValue)} >Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}