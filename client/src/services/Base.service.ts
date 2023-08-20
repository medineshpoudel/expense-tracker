const axios = require('axios');

export interface ApplyActionProps {
  query: string;
  type?: string;
  data?: any;
}

class BaseService {
  /**
   * Generic Apply method that can be used for flexibility if below actions
   * seem limited.
   * @param {*} query: Query for the url
   * @param {*} type: Method type. e.g. get, post, delete, patch
   * @param {*} data: JSON Data to be passed along the query.
   * @returns
   */
  static async apply(query: string, type: string, data: any = null) {
    return axios({
      method: type,
      mode: 'cors',
      referrerPolicy: 'no-referrer',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${sessionStorage[MilhubConstants.SessionStorage.MilhubToken]}`,
      },
      data,
      url: `http://localhost:8000/${query}`,
    });
  }

  /**
   *  Apis for different actions in Milhub.
   */
  static get = async ({ query, type = 'get' }: ApplyActionProps) => this.apply(query, type);

  static add = async ({ query, data = null }: ApplyActionProps) => this.apply(query, 'post', data);

  static update = ({ query, data = null }: ApplyActionProps) => this.apply(query, 'patch', data);

  // Use "@aras.action": "purge" annotation for data to delete only one version of the item
  static delete = ({ query, data = null }: ApplyActionProps) => this.apply(query, 'delete', data);

  static method = ({ query, data = null }: ApplyActionProps) =>
    this.apply(`method.${query}`, 'post', data);

  /**
   * Handles 401 errors. For now, just redirect back to home page after clearing the session.
   */
  static handle401Error = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  static handleError = (error: any) => {
    // If the user's session expires, redirect to home page.
    if (error.response.status === 401) {
      this.handle401Error();
    }

    // TODO: Show toast??
    return {
      code: error?.response?.data?.error?.code,
      isError: true,
      message: error?.response?.data?.error?.message,
    };
  };
}

export default BaseService;
