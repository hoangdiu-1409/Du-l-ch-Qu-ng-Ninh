function sendForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    document.getElementById("msg").innerText =
      "Vui lòng nhập đầy đủ thông tin!";
    document.getElementById("msg").style.color = "red";
    return;
  }

  document.getElementById("msg").innerText = "Gửi thành công!";
  document.getElementById("msg").style.color = "green";
}
