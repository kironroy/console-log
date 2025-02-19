document.querySelector(".copy-button").addEventListener("click", function () {
  const code = document.querySelector(".language-js").innerText;
  const textarea = document.createElement("textarea");
  textarea.value = code;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Code copied to clipboard!");
});
