import axios from "axios";
const userInLocal = JSON.parse(localStorage.getItem("user"));
export function update(name, email) {
  let formData = new FormData();
  formData.append("id", userInLocal.id);
  formData.append("name", name);
  formData.append("email", email);
  // formData.append("password", password);

  try {
    axios({
      method: "POST",
      url: "https://coursespec.000webhostapp.com/api/profile/edit",
      headers: { "Content-Type": "application/json" },
      data: formData,
    });
    return true;
  } catch (error) {
    return error;
  }
}
