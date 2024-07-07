import { HttpClient, basebUrl } from "../HttpClient";
class FeatureService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/api/Feature`);
  }
  getAll() {
    return this.get("GetAll");
  }
}
export const featureService = new FeatureService();
