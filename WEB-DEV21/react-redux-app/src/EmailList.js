import React from "react";
import { useSelector, useDispatch } from "react-redux";

const EmailList = () => {
  const dispatch = useDispatch();
  const EmailList = useSelector((state) => state.emailList);
  const counter = useSelector((state) => state.counter);

  return EmailList.map((email) => (
    <div
      key={email.id}
      style={{
        backgroundColor: email.isArchived === true ? "green" : "white",
      }}
    >
      {counter}
      <button onClick={() => dispatch({ type: "ARCHIVE", id: email.id })}>
        Archive
      </button>
      <button onClick={() => dispatch({ type: "DELETE", id: email.id })}>
        Delete
      </button>
      <p>From: {email.author}</p>
      <p>Subject: {email.subject}</p>
      <p>Email message: {email.body}</p>
    </div>
  ));
};

export default EmailList;
