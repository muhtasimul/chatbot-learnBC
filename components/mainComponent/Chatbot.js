import React, { useContext, useEffect, useRef } from 'react'
import { Context } from '../../context/Context'
import classes from "../mainComponent/Chatbot.module.css"


export default function Chatbot() {

  const {
    ask,
    setAsk,
    solutionFind,
    data
  } = useContext(Context)

  const chatRef = useRef(null)

  const bottomScroll = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  useEffect(() => {
    bottomScroll()
  }, [data.length])


  const questions = data.map(q => (
    <div className='d-flex flex-column border-0'>
      <div className={`${classes.chatbox} alert alert-secondary w-20 m-2 d-flex align-self-end`}>
        {q.question}
      </div>

      <div className={`${classes.chatbox} alert alert-primary w-40 m-2 d-flex align-self-start`}>
        {q.answers}
      </div>

      <div ref={chatRef} />
    </div>
  ))


  return (
    <>
      <div
        className={`${classes.details} container-fluid d-flex justify-content-center align-items-center`}
      >

        <div className={`card ${classes.cards} d-flex justify-content-between m-2 p-0 border border-2`} >

          {
            questions.length === 0 ?
              <div className={` ${classes.chatbox} p-1 alert m-2 d-flex align-self-start`}>
                <p>Please ask your questions here</p>
              </div> :
              <div className={`${classes.chat} border-0`}>
                {questions}

              </div>


          }



          <div className='input-group align-self-end p-0 w-100'>
            <input
              type="text"
              className={`${classes.input} form-control`}
              placeholder="Write a question...."
              onChange={(e) => setAsk(e.target.value)}
              value={ask}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  solutionFind(e)
                }
              }}
            />
            <button
              className={`${classes.button} btn`}
              onClick={(e) => solutionFind(e)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${classes.icons} bi bi-send-fill`} viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </button>
          </div>


        </div>
      </div>


    </>
  )
}
