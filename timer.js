let showtime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();

  let currentsession = "AM";
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    currentsession = "pm";
  }
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let finaltime = hour + ":" + minutes + ":" + seconds + " " + currentsession;
  let clockDiv = document.getElementById("clock");
  clockDiv.innerHTML = finaltime;
  setTimeout(showtime, 1000);
};
