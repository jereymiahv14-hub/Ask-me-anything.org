import React from 'react';

const SearchResults = ({ results }) => {
    return (
        <div>
            <h1>Search Results</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;