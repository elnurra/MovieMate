import { HttpClient, basebUrl } from "../HttpClient";
class MovieService extends HttpClient {
  constructor() {
    super(`http://${basebUrl}:5001/api/movie`);
  }
  skip(skip) {
    return this.getSkip("MovieCatalog", skip);
  }
  random() {
    return this.get("RandomMovies");
  }
  getOne(body) {
    return this.getMovie("GetOne", body);
  }
  movieVideo() {
    return this.get("MovieVideo");
  }
  create(body) {
    return this.post("Create", body);
  }
  searchFilter(inputValue) {
    return this.search("Search", inputValue);
  }
  getCount() {
    return this.get("MovieCount");
  }
  getYear() {
    return this.get("FilterData");
  }
  filterSort(params) {
    return this.getParams("FilterPage", params);
  }
  getAll() {
    return this.get("GetAll");
  }
  Like(body) {
    return this.post("Like", body);
  }
  DisLike(body) {
    return this.post("DisLike", body);
  }
}
export const movieService = new MovieService();
