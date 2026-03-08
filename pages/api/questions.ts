import { NextApiRequest, NextApiResponse } from 'next';

// Mock data for questions
const questions = [
  { id: 1, question: "What is your favorite color?" },
  { id: 2, question: "How does the API work?" },
  { id: 3, question: "What is Next.js?" },
  // Add more questions as needed...
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  
  // Handle search functionality
  if (query.search) {
    const filteredQuestions = questions.filter(q => 
      q.question.toLowerCase().includes(query.search.toLowerCase())
    );
    return res.status(200).json(filteredQuestions);
  }

  // Return all questions
  return res.status(200).json(questions);
}