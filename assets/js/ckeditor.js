// import ClassicEditor from "@ckeditor/ckeditor5-build-classic/src/ckeditor";

let theEditor;
var inputEditor = document.querySelector("#editor");

// create ckeditor
DecoupledEditor.create(inputEditor, {
  fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21],
  },
})
  .then((editor) => {
    const toolbarContainer = document.querySelector("#toolbar-container");

    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    theEditor = editor;
  })
  .catch((error) => {
    console.error(error);
  });

// get data from Form
function getDataFromTheEditor() {
  return theEditor.getData();
}

function handleGetData() {
  let text = getDataFromTheEditor();
  console.log(text);
}
