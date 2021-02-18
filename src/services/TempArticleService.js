import axios from 'axios';
import RestService from './RestService';

class TempArticleService extends RestService {
    prefix = `${this.prefix}/temp_articles`

    get = this._get;

    add = this._add;

    update = this._update;

    remove = this._remove;

    count = this._count;

    export = this._export;

    import = this._import;

    approve = (data, options = {}) => axios
        .post(`${this.prefix}/approve`, this._processRequest(data, options))
        .then(data => this._processResponse(data, options));

    decline = (data, options = {}) => axios
        .put(`${this.prefix}/decline`, this._processRequest(data, options))
        .then(data => this._processResponse(data, options));
}

const tempArticleService = new TempArticleService();

Object.freeze(tempArticleService);

export default tempArticleService;

export { TempArticleService };
