import React from 'react';
import PropTypes from 'prop-types';
import { AdministratorGrid } from '..';

function TempArticlesGrid({
    onCreate,
    onExport,
    onImport,
    onRowClick,
}) {
    return (
        <AdministratorGrid
            entity='tempArticle'
            onCreate={onCreate}
            onExport={onExport}
            onImport={onImport}
            onRowClick={onRowClick}
            title='Temp Articles'
        />
    );
}

TempArticlesGrid.propTypes = {
    onCreate: PropTypes.func,
    onExport: PropTypes.func,
    onImport: PropTypes.func,
    onRowClick: PropTypes.func,
};

TempArticlesGrid.defaultProps = {
    onCreate: null,
    onExport: null,
    onImport: null,
    onRowClick: null,
};

export default TempArticlesGrid;
