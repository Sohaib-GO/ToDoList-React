import React from "react";

function Time() {
  return (Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date()))
}

export default Time;