import { loaderController } from "../loader/loader-controller.js";
import { loginUser } from "./login-model.js";

export const loginController = (loginForm) => {
  const spinner = loginForm.querySelector('#loader');
  const { showLoader, hideLoader } = loaderController(spinner)

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm)
  })

  const submitLogin = async (loginForm) => {
  
    const { email, password } = getLoginData(loginForm);
    try {
      showLoader();
      const jwt = await loginUser(email, password)
      alert('login OK')
      localStorage.setItem('token', jwt);
      window.location = './index.html';
    } catch (error) {
      alert(error)
    } finally {
      hideLoader()
    }
  }
  
  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
  
    return {
      email: email,
      password: password
    }
  }
}
