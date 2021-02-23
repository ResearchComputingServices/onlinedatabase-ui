import RestService from './RestService';

class SearchArticleService extends RestService {
    prefix = `${this.prefix}/articles`;

    get = this._get;

    export = this._export;
}

const searchArticleService = new SearchArticleService();

Object.freeze(searchArticleService);

export default searchArticleService;

export { SearchArticleService };
