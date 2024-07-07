import { HttpClient, basebUrl } from "../HttpClient";
class CommentService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/api/Comment`);
  }

  addComment(comment) {
    return this.post("Create", comment);
  }
  getComments(movieId) {
    return this.getByID("GetAll", movieId);
  }
  deleteComment(id) {
    return this.delete("Delete", id);
  }
}
export const commentService = new CommentService();
