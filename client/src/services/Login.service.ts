import BaseService from './Base.service';

class LoginService extends BaseService {
  /**
   * Generic Apply method that can be used for flexibility if below actions
   * seem limited.
   * @param {*} query: Query for the url
   * @param {*} type: Method type. e.g. get, post, delete, patch
   * @param {*} data: JSON Data to be passed along the query.
   * @returns
   */

  static Register = (query: string, data: any) =>
    this.add({ query, data })
      .then((result) => result)
      .catch((error) => error.response.data.error);
}

export default LoginService;
