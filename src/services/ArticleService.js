import RestService from './RestService';

class ArticleService extends RestService {
    prefix = `${this.prefix}/articles`

    get = this._get;

    add = this._add;

    update = this._update;

    remove = this._remove;

    count = this._count;

    export = this._export;

    import = this._import;
}

const articleService = new ArticleService();

Object.freeze(articleService);

export default articleService;

export { ArticleService };
