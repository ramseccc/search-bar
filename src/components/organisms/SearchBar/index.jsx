import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../molecules/InputForm";
import QuestionContext from "../../../api/context/questionContext";

export default function SearchBar() {
    const handleSubmit = (e) => e.preventDefault()
    const { FilterQuestions, ClearFilter } = QuestionContext;
    const [questions, setQuestions] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    useEffect(() => {
        const fetchQuestions = async () => {
          const response = await fetch('http://localhost:3000/questions');
          const questions = await response.json();
          setQuestions(questions);
        };

        fetchQuestions();
      }, []);
    

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        <Link to={"/question.uuid"} />
        if(searchValue !== '') {
            FilterQuestions(searchValue);
        } else {
            ClearFilter();
        }
    }
    return (
        <>
        <form handleSubmit={handleSubmit}>
          <InputForm 
            htmlFor={"search"}
            type={"search"}
            id={"search"}
            placeholder={" Search..."}
            className={"d-flex p-1 rounded-3 me-lg-5 w-100 dropdown"}
            value={searchValue}
            onChange={handleChange}
            data-bs-toggle={"dropdown"}
            aria-expanded={"false"}
          />
          <ul>{questions.map((question) =>{
              return <li key={question.uuid} className="dropdown-item">{question.title}</li>
          })}</ul>
        </form>
        </>
    )
}
