import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";

const Community = () => {
  //   const [array, setArray] = useState([{ username: "Krish", message: "Hi" }]);
  const [username, setUsername] = useState("Rishab");
  const [message, setmessage] = useState();
  const [array, setArray] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    if (message) {
      axios
        .post("http://localhost:5000/community", {
          username: username,
          message: message,
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [message]);

  useEffect(() => {
    // async function my_async_fn(url) {
    //   let response = await fetch(url).then(res => console.log(res));
    // }
    // my_async_fn("http://localhost:5000/community");

    axios
      .get("http://localhost:5000/community")
      .then(function (response) {
        setArray(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4 text-xl">
      <div>
        {array &&
          array.map((item) => {
            return <div>{item.username}, {item.message}</div>;
          })}
      </div>
      {/* <form action="http://localhost:5000/community" method="post"> */}
      {/* <div>username: {username}</div>
      <div>message: {message}</div>
      <div>
        <input ref={inputRef} type="text" placeholder="Enter message" />
        <button type="submit">Send</button>
      </div> */}
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        placeholder="Enter Message"
      ></input>
      <button
        onClick={() => {
          setmessage(inputRef.current.value);
          // axios
          // .post("http://localhost:5000/community", {
          //   username: username,
          //   message: message,
          // })
          // .catch((error) => {
          //   console.log(error);
          // });
        }}
      >
        Send
      </button>
      {/* </form> */}
    </div>
  );
};

export default Community;
