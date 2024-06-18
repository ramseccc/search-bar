import React from 'react'
import Question from './question'
import QuestionContext from './questionContext';
const Questions = () => {
    const QuestionContext = useContext(QuestionContext);
    const { questions, filtered} = QuestionContext;
    return (

    <div>{
        filtered !== null
        ? (
            filtered.map(question => <Question question={question} key={question.uuid}></Question>)
        ) : 
        (
            questions.map(question => <Question question={question} key={question.uuid}></Question>)
        )
    }</div>
  )
}

export default Questions