import _ from 'lodash';
import useRolesCheckerService from './useRolesCheckerService';

function getButton(rolesCheckerService, title, handler, options = {}) {
    const skipAuthorization = _.get(options, 'skipAuthorization', false);
    const authorization = _.get(options, 'authorization', null);
    const hasAuthorization = skipAuthorization ? true : (authorization ? (rolesCheckerService.has(authorization)) : true);
    if (_.isBoolean(handler) && !handler) {
        return {
            title,
            handler,
            ...options,
            disabled: true,
        };
    }
    if (!_.isFunction(handler) || !hasAuthorization) {
        return null;
    }
    return {
        title,
        handler,
        ...options,
    };
}

export default function useFormButtons(
    id, handlers, authorizations = {}, disableMutation = false, disableDelete = false, skipAuthorization = false,
) {
    const rolesCheckerService = useRolesCheckerService();
    const { create, update, remove, download, cancel, approve, decline } = handlers;
    return [
        _.isNil(id) ? getButton(rolesCheckerService, 'Create', create, {
            disabled: disableMutation,
            authorization: authorizations.create,
            skipAuthorization,
        }) : null,
        _.isNil(id) ? null : getButton(rolesCheckerService, 'Update', update, {
            disabled: disableMutation,
            authorization: authorizations.update,
            skipAuthorization,
        }),
        _.isNil(id) ? null : getButton(rolesCheckerService, 'Delete', remove, {
            disabled: disableDelete,
            authorization: authorizations.delete,
            skipAuthorization,
        }),
        _.isNil(id) ? null : getButton(rolesCheckerService, 'Export', download, { authorization: authorizations.export }),
        _.isNil(id) ? null : getButton(rolesCheckerService, 'Approve', approve, {
            disabled: disableMutation,
            authorization: authorizations.approve,
            skipAuthorization,
        }),
        _.isNil(id) ? null : getButton(rolesCheckerService, 'Decline', decline, {
            disabled: disableMutation,
            authorization: authorizations.decline,
            skipAuthorization,
        }),
        getButton(rolesCheckerService, 'Cancel', cancel, { type: 'utility' }),
    ];
}
