export const formatDate = (input) => {
  var datePart = input.match(/\d+/g),
    year = datePart[0], // get only two digits
    month = datePart[1],
    day = datePart[2];

  return day + "-" + month + "-" + year;
};

export const transformToDate = (textDate) => {
  const date = new Date(textDate);
  const now = new Date();
  const minuteDifference = (now.getTime() - date.getTime()) / 1000 / 60;
  // console.log("dataPost:", textDate, "min diff:", minuteDifference);

  const options = {
    weekday: "short",
    month: "long",
    day: "numeric",
  };

  switch (true) {
    //se inferiore a 5 min
    case minuteDifference < 5:
      return "Adesso";

    //se inferiore a 1 ora
    case minuteDifference < 60:
      return Math.floor(minuteDifference) + " min fa";

    //se superiore ad un ora ma lo stesso giorno
    case date.toLocaleDateString("it-IT", options) ===
      now.toLocaleDateString("it-IT", options):
      return Math.floor(minuteDifference / 60) + " ore fa";

    //se giorno diverso ma stesso anno
    case date.getFullYear() === now.getFullYear():
      return (
        date.toLocaleDateString("it-IT", options) +
        " alle " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );

    default:
      // anni precedenti
      return (
        date.toLocaleDateString("it-IT", options) +
        " alle " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        " " +
        date.getFullYear()
      );
  }
};
