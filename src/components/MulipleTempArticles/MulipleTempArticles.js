import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import DownloadIcon from '@material-ui/icons/GetApp';
import UploadIcon from '@material-ui/icons/Publish';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FileUploader, Button } from '..';
import { useGridActions, useGridButtons } from '../../hooks';

export const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '100%',
        maxWidth: '100%',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        marginTop: '50px',
        marginLeft: '20px',
    },
    filterApplied: {
        borderColor: '#1b8a16',
        color: '#1b8a16',
    },
}));

function MulipleTempArticles({
    className,
    style,
    importFileTypes,
    tableRef: tableRefProp,
}) {
    const rights = {
        create: '*',
        export: '*',
        import: '*',
        read: ['Administrator', 'Researcher'],
    };
    const actions = useGridActions('tempArticles');
    const { onExport, onImport } = useGridButtons(actions, rights);

    const classes = useStyles();
    const fileMappings = {
        xlsx: [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        txt: [
            'text/plain',
        ],
    };
    const tableRef = tableRefProp || React.createRef(null);
    return (
        <Box
            className={clsx(classes.root, className)}
            style={style}
        >
            <h2>To import several items, please download the template and fill the required data.</h2>
            <Box
                display='flex'
                justifyContent='space-between'
            >
                <Box
                    display='flex'
                    pb={2}
                >
                    {_.isFunction(onExport)
                    && (
                        <Box mr={1}>
                            <Button
                                color='primary'
                                onClick={onExport}
                                startIcon={<DownloadIcon />}
                                variant='contained'
                            >
                                Export The Template
                            </Button>
                        </Box>
                    )}
                    {_.isFunction(onImport)
                    && (
                        <FileUploader
                            acceptedFiles={_.reduce(
                                importFileTypes,
                                (accumulator, acceptedFileType) => accumulator.concat(fileMappings[acceptedFileType] || []), [],
                            )}
                            as={({ handleOpen }) => (
                                <Box mr={1}>
                                    <Button
                                        color='primary'
                                        onClick={handleOpen}
                                        startIcon={<UploadIcon />}
                                        variant='contained'
                                    >
                                        Import Multiple Articles
                                    </Button>
                                </Box>
                            )}
                            onUpload={async (...args) => {
                                await onImport(...args);
                                tableRef.current && tableRef.current.onQueryChange();
                            }}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
}

MulipleTempArticles.propTypes = {
    importFileTypes: PropTypes.array,
    style: PropTypes.object,
    className: PropTypes.string,
    tableRef: PropTypes.object,
};

MulipleTempArticles.defaultProps = {
    importFileTypes: ['xlsx'],
    style: undefined,
    className: '',
    tableRef: undefined,
};

export default MulipleTempArticles;
