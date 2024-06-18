import {
    FILTER_QUESTIONS,
    CLEAR_FILTER,
} from './types';

const QuestionReducer = (state, action) => {
    switch(action.type) {
        case FILTER_QUESTIONS:
            return {
                ...state,
                filtered: state.questions.filter(question => {
                    const regex = new RegEx(`${action.payload}`, 'ig');
                    return(
                        question.title.match(regex) || question.body.match(regex)
                    );
                })
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filtered: null
            }
        default:
            return state;
    }
}
export default QuestionReducer