import React from "react";
import ChatBot from "react-simple-chatbot";
import { steps } from "./steps.config";
import { ThemeProvider } from "styled-components";

function MyChatbot(props) {
  const theme = {
    background: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: `rgba(1,48,97,.8)`,
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "rgba(1,48,97,.8)",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default MyChatbot;
