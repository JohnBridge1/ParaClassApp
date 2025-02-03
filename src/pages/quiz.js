import { useState } from 'react';
import { disabilityData } from '../data/disabilityQuizData';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  console.log('Raw disabilityData:', disabilityData);
  console.log('Categories:', Object.values(disabilityData));
  console.log('First category color:', Object.values(disabilityData)[0]?.color);

  const categories = Object.values(disabilityData);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswer = (selectedOption) => {
    const currentQuestions = disabilityData[selectedCategory].questions;
    if (selectedOption === currentQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    const currentQuestions = disabilityData[selectedCategory].questions;
    if (currentQuestion + 1 < currentQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (!selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Paralympic Classifications Quiz</h1>
        <div className="flex flex-col space-y-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`${category.color} text-white p-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity`}
            >
              <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
              <p>{category.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentQuestions = disabilityData[selectedCategory].questions;
  const categoryInfo = disabilityData[selectedCategory];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {categoryInfo.description} Quiz
      </h1>
      
      {!showResults ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {currentQuestions.length}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h2 className="text-xl mb-4">{currentQuestions[currentQuestion].question}</h2>
          
          <div className="space-y-3 mb-4">
            {currentQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-3 rounded border border-gray-300 hover:bg-blue-50 transition-colors bg-gradient-to-r from-blue-100 to-blue-50 mb-2"
                disabled={showExplanation}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-4">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="font-medium mb-2">Explanation:</p>
                <p>{currentQuestions[currentQuestion].explanation}</p>
              </div>
              <button
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                {currentQuestion + 1 < currentQuestions.length ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-4">Your score: {score} out of {currentQuestions.length}</p>
          <div className="space-x-4">
            <button
              onClick={() => handleCategorySelect(selectedCategory)}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={restartQuiz}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Choose Different Category
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 