import { HttpClient, basebUrl } from "../HttpClient";

class PartnerService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/Partner`);
  }

  getAll() {
    return this.get("GetAll");
  }

  postNewPost(body) {
    return this.post("Create", body);
  }

  editPost(id, body) {
    return this.put("posts", body, id);
  }
}

export const partnerService = new PartnerService();
