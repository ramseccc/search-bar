import React, { useReducer } from 'react'
import QuestionContext from './questionContext';
import QuestionReducer from './questionReducer';
import {
    FILTER_QUESTIONS,
    CLEAR_FILTER,
} from './types';

const QuestionState = (props) => {
    
    const initialState = {
        questions: [
            {
                uuid: "",
                title: "",
                body: "",
                createdAt: "",
                forumID: "",
                topicsID: "",
                UserId: ""
            },
            {
                uuid: "",
                title: "",
                body: "",
                createdAt: "",
                forumID: "",
                topicsID: "",
                UserId: ""
            },
            {
                uuid: "",
                title: "",
                body: "",
                createdAt: "",
                forumID: "",
                topicsID: "",
                UserId: ""
            },
            {
                uuid: "",
                title: "",
                body: "",
                createdAt: "",
                forumID: "",
                topicsID: "",
                UserId: ""
            },
            {
                uuid: "",
                title: "",
                body: "",
                createdAt: "",
                forumID: "",
                topicsID: "",
                UserId: ""
            },
        ],
        filtered: null,
    };

    const [ state, dispatch ] = useReducer(QuestionReducer, initialState);
    
    const FilterQuestions = (text) => {
        dispatch({type: FILTER_QUESTIONS, payload: text});
    };

    const ClearFilter = () => {
        dispatch({type : CLEAR_FILTER});
    }
    return (
    <QuestionContext.Provider
        value={{
            questions: state.questions,
            filtered: state.filtered,
            FilterQuestions,
            ClearFilter,
        }}
    >
        {props.children}
    </QuestionContext.Provider>
  )
}

export default QuestionState