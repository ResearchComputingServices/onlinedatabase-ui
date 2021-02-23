import Users from '../../components/Users';
import User from '../../components/User';
import NotFound from '../../components/NotFound';
import UserField from '../../components/UserField';
import UserFields from '../../components/UserFields';
import Enumerations from '../../components/Enumerations';
import Enumeration from '../../components/Enumeration';
import UserFieldTypes from '../../components/UserFieldTypes';
import UserFieldType from '../../components/UserFieldType';
import Roles from '../../components/Roles';
import Dashboard from '../../components/Dashboard';
import Article from '../../components/Article';
import Articles from '../../components/Articles';
import ArticleSearch from '../../components/ArticleSearch';
import TempArticle from '../../components/TempArticle';
import TempArticles from '../../components/TempArticles';
import MulipleTempArticles from '../../components/MulipleTempArticles';

export default [
    {
        path: '/',
        component: Dashboard,
        roles: '*',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        roles: '*',
    },
    {
        path: '/users',
        component: Users,
        roles: '*',
    },
    {
        path: '/users/user',
        component: User,
        roles: '*',
    },
    {
        path: '/users/user/:id',
        component: User,
        roles: '*',
    },
    {
        path: '/user-fields/',
        component: UserFields,
        roles: '*',
    },
    {
        path: '/user-fields/user-field',
        component: UserField,
        roles: '*',
    },
    {
        path: '/user-fields/user-field/:id',
        component: UserField,
        roles: '*',
    },
    {
        path: '/enumerations/',
        component: Enumerations,
        roles: '*',
    },
    {
        path: '/enumerations/enumeration',
        component: Enumeration,
        roles: '*',
    },
    {
        path: '/enumerations/enumeration/:id',
        component: Enumeration,
        roles: '*',
    },
    {
        path: '/user-field-types/',
        component: UserFieldTypes,
        roles: '*',
    },
    {
        path: '/user-field-types/user-field-type',
        component: UserFieldType,
        roles: '*',
    },
    {
        path: '/user-field-types/user-field-type/:id',
        component: UserFieldType,
        roles: '*',
    },
    {
        path: '/roles/',
        component: Roles,
        roles: '*',
    },
    {
        path: '/articles',
        component: Articles,
        roles: '*',
    },
    {
        path: '/articles/article',
        component: Article,
        roles: '*',
    },
    {
        path: '/articles/article/:id',
        component: Article,
        roles: '*',
    },
    {
        path: '/articles/search',
        component: ArticleSearch,
        roles: '*',
    },
    {
        path: '/temp-articles',
        component: TempArticles,
        roles: '*',
    },
    {
        path: '/temp-articles/temp-article',
        component: TempArticle,
        roles: '*',
    },
    {
        path: '/temp-articles/temp-article/:id',
        component: TempArticle,
        roles: '*',
    },
    {
        path: '/temp-articles/multiple-temp-article',
        component: MulipleTempArticles,
        roles: '*',
    },
    {
        path: '*',
        component: NotFound,
        roles: '*',
    },
];
