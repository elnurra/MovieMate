import { HttpClient, basebUrl } from "../HttpClient";

class PropertyService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/api/Property`);
  }

  getAll() {
    return this.get("GetAll");
  }

  postNewPost(body) {
    return this.post("posts", body);
  }

  editPost(id, body) {
    return this.put("posts", body, id);
  }
}

export const propertyService = new PropertyService();
