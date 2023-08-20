import BaseService from './Base.service';

class AppService extends BaseService {
  static getItems = async (query: string) =>
    this.get({ query })
      .then((response) => response.data)
      .catch(this.handleError);

  static getItem = async (query: string) =>
    this.get({ query })
      .then((response) => response.data)
      .catch(this.handleError);
}

export default AppService;
