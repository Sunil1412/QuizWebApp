import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'lucknow', isCorrect: false },
				{ answerText: 'Jaipur', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'pune', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many States Are Present In India?',
			answerOptions: [
				{ answerText: '21', isCorrect: false },
				{ answerText: '24', isCorrect: false },
				{ answerText: '26', isCorrect: false },
				{ answerText: '29', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {

			setScore(score + 1);

		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {

			setCurrentQuestion(nextQuestion);

		} else {

			setShowScore(true);

		}
	};
	return (

		<div>
			{showScore ? (



				<div >
		 scored {score} out of {questions.length}


				</div>
	) : (    
				<>
<div>
		<div>
			<span>Question

		{currentQuestion + 1}</span>/
								 
	{questions.length}
		</div>
			
		<div>

		{questions[currentQuestion].questionText}</div>

		</div>

		<div >



		{questions[currentQuestion].answerOptions.map((answerOption) => 

						(

		<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>

								
	{answerOption.answerText}
		</button>
	))}
	</div>
</>
)}
</div>
	);
}
