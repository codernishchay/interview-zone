import React from 'react'
import "./questionWidget.css"

export default function QuestionWidget({ question }) {
    return (
        <div>
            <div className="question-container">
                <div className="q-buttons"></div>
                <ul>
                    <li>      <div className="questioninfo"> <h3>{question['questionTitle']}</h3></div>
                    </li>
                    <li>
                        <div className="statement-with-example"> Problem : {question["questionTitle"]}</div>

                    </li>
                    <li>
                        <div className='q-solution'> Example : {question["questionExample"]}</div>

                    </li>
                    <li>
                        <div className="q-level">Level : {question['questionLevel']} </div>

                    </li>
                    <li>
                        <div className="q-level">Category : {question['questionCategory']}</div>
                        {true == true ? (<div className='q-solution'>Solution: {question["bestSolution"]}</div>) : null}

                    </li>
                </ul>

            </div>

        </div >
    )
}

// bestSolution: "\"\""
// createdAt: "2022-02-09T17:24:24.724Z"
// id: "6203f8c8f9787376e44a7eeb"
// questionCategory: "496e74726f64756374696f6e"
// questionExample: "Just tell about yourself"
// questionLevel: "0"
// questionOutput: "\"This is all about your intro\" "
// questionTitle: "Tell me about yourself"
// updatedAt: