import React from 'react';
import PropTypes from 'prop-types';
import { AdministratorGrid } from '..';

function ArticlesGrid({
    onCreate,
    onExport,
    onImport,
    onRowClick,
}) {
    return (
        <AdministratorGrid
            entity='articles'
            onCreate={onCreate}
            onExport={onExport}
            onImport={onImport}
            onRowClick={onRowClick}
            title='Articles'
        />
    );
}

ArticlesGrid.propTypes = {
    onCreate: PropTypes.func,
    onExport: PropTypes.func,
    onImport: PropTypes.func,
    onRowClick: PropTypes.func,
};

ArticlesGrid.defaultProps = {
    onCreate: null,
    onExport: null,
    onImport: null,
    onRowClick: null,
};

export default ArticlesGrid;
