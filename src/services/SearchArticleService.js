import axios from 'axios';
import _ from 'lodash';
import RestService from './RestService';

class SearchArticleService extends RestService {
    prefix = `${this.prefix}/articles`;

    buildQuery = ({ query }) => {
        const url = `${this.prefix}/export`;
        let filterQuery = '?';
        let index = -1;
        _.each(query, (value, key) => {
            if (_.isNil(key) || _.eq(key, 'null')) return;
            if (!_.eq(++index, 0)) {
                filterQuery += '&';
            }
            if (_.isArray(value)) {
                filterQuery += `${key}=${value.toString()}`;
            } else {
                filterQuery += `${key}=${value}`;
            }
        });
        return _.eq(filterQuery, '?') ? url : `${url}${filterQuery}`;
    }

    get = this._get;

    export = (options = {}, query) => console.log(query)
    // axios
    //     .get(this.buildQuery({ ...query }))
    //     .then(data => this._processResponse(data, options));
}

const searchArticleService = new SearchArticleService();

Object.freeze(searchArticleService);

export default searchArticleService;

export { SearchArticleService };
