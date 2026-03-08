import React from 'react';
import { useState } from 'react';

const IndexPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const featuredQuestions = [
        'What is your favorite programming language?',
        'How do you stay motivated while coding?',
        'What is the best way to learn new technologies?',
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h1>Welcome to Ask Me Anything</h1>
            <input 
                type="text" 
                placeholder="Search questions..." 
                value={searchTerm} 
                onChange={handleSearchChange} 
            />
            <h2>Featured Questions</h2>
            <ul>
                {featuredQuestions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;