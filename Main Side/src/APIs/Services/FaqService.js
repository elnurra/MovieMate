import { HttpClient, basebUrl } from "../HttpClient";

class FaqService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/api/Faq`);
  }
  getAll() {
    return this.get("GetAll");
  }
}
export const faqService = new FaqService();
