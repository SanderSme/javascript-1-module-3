const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageErrorContainer = document.querySelector(".message-error");
const messageWarningContainer = document.querySelector(".message-warning");


messageSuccessContainer.innerHTML = createToaster("Success", "Files are uploaded");
messageInfoContainer.innerHTML = createToaster("Info", "Files are uploaded but...");
messageErrorContainer.innerHTML = createToaster("Error", "Zry;(");
messageWarningContainer.innerHTML = createToaster("Warning", "Files must be less than 5mb");