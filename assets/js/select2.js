// init var
var content = [
  { id: 0, text: "Javascript" },
  { id: 1, text: "HTML, CSS" },
  { id: 2, text: "Javascript Nâng cao" },
  { id: 3, text: "HTML, CSS Nâng cao" },
  { id: 4, text: "TypeScript" },
  { id: 5, text: "Swift" },
  { id: 6, text: "Scala" },
  { id: 7, text: "Objective-C" },
  { id: 8, text: "Shell" },
  { id: 9, text: "C" },
  { id: 10, text: "C#" },
  { id: 11, text: "PHP" },
  { id: 12, text: "Ruby" },
  { id: 13, text: "Python" },
  { id: 14, text: "Java" },
  { id: 15, text: "Front-end Web Developer" },
  { id: 16, text: "Back-end Web Developer" },
];

// create select2
$(".js-example-basic-multiple").select2({
  data: content,
  minimumInputLength: 1,
  width: "100%",
  multiple: true,
  //   templateResult: formatState,
});

// Get data
$(".js-example-basic-multiple").on("select2:select", function (e) {
  let data = e.params.data;

  console.log(data);
});

// format state
// function formatState(text) {
//   console.log("text", text);
//   str = "";
//   str += "<p style='padding-left: 12px;'>" + text.text + "</p>";
//   var $state = $(str);

//   return $state;
// }
