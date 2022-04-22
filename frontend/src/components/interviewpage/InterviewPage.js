import React, { useState } from "react";
import TextEditor from "../texteditor/textEditor";
import Questions from "../question/questions";
import axios from "axios";
import ChatRoom from "../chat/chat";
import "./interview.css"
import { useEffect } from "react"
import { useAuth } from "../auth/authContext";
import Video from "../videocall/video"
import PrimarySearchAppBar from "./appbar";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const { headers } = require("../config")


export default function InterviewPage() {
  const location = useLocation()
  const { constraints } = location.state
  const [time, settime] = useState();
  const [questionid, setquestionid] = useState();
  const { interviewID } = useParams();
  const auth = useAuth();

  const [questions, setquestions] = useState();

  useEffect(() => {
    const getquestion = async () => {
      const url = "http://localhost:3001/question/get";
      await axios
        .get(
          url, headers)
        .then((res) => {
          setquestions(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getquestion();

    if (questions && questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        setquestionid((pre) => [...pre, questions["id"]]);
      }
    }
  }, []);

  useEffect(() => {
  }, [questions])

  return (
    <div className="container">
      <div className="TextArea ">
        <TextEditor />
      </div>
      <div className="buttons">
        <PrimarySearchAppBar />
      </div>
      <div className="Video-Call"> </div>
      <div className="Questions"><Questions questions={questions} /></div>
      <div className="VideoCall "><Video constraints={constraints} /></div>
      <div className="messages">
        <div className="Final-Messages ">
          <ChatRoom />
        </div>
      </div>
    </div>
  );
}



