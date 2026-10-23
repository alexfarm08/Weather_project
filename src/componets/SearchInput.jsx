import { useState } from 'react'

function SearchInput({onSearch}) {
    const [value,setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
            type='text'
            value={value}
            onChange={(event) => {setValue(event.target.value)}}
        />
        <button type='submit'>Search</button>
        </form>
    )
}

export default SearchInput;