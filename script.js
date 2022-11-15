const FileInput = document.getElementById("file");
const ResultField = document.querySelector(".data");
const CopyBtn = document.querySelector(".copy-data");

if (ResultField.innerHTML == "") {
  CopyBtn.style.display = "none";
}

FileInput.addEventListener("change", (e) => {
  const file = FileInput.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    ResultField.innerHTML = reader.result;
    CopyBtn.style.display = "block";
  });
  reader.readAsDataURL(file);
  CopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(reader.result);
    CopyBtn.classList.add("copied");
    CopyBtn.innerHTML = "Copied!";
    setTimeout(() => {
      CopyBtn.classList.remove("copied");
      CopyBtn.innerHTML = "Copy to Clipboard";
    }, 2000);
  });
});
