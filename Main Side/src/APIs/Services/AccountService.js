import { HttpClient, basebUrl } from "../HttpClient";

class AccountService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/api/Account`);
  }

  forgetPassword(body) {
    return this.post("ForgetPassword", body);
  }
  async confirmEmail(userId, token) {
    try {
      const encodedToken = encodeURIComponent(token);
      const response = await this.get(
        `ConfirmEmail?userId=${userId}&token=${encodedToken}`
      );
      return response.data; // Возвращаем данные ответа без изменений
    } catch (error) {
      // Перехватываем и обрабатываем ошибку
      if (error.response) {
        // Проверяем наличие объекта response
        return error.response.data; // Возвращаем данные об ошибке от сервера
      } else {
        // Если нет response, значит, это другая ошибка (например, сетевая)
        throw error; // Пробрасываем ошибку дальше для обработки на верхнем уровне
      }
    }
  }

  resetPassword(body) {
    return this.post("ResetPassword", body);
  }
  async signUp(body) {
    const response = await this.post("Register", body);
    return { success: true, data: response.data };
  }
  async signIn(body) {
    try {
      const response = await this.post("Login", body);
      return { success: true, data: response.data };
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { success: false, error: "Email or password incorrect" };
      }
    }
  }
  setToken(token) {
    return this.setAuthToken(token);
  }
  clearToken() {
    return this.clearAuthToken();
  }
}
export const accountService = new AccountService();
