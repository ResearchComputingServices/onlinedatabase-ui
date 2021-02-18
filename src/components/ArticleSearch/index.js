import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { ToastsStore } from 'react-toasts';
import Box from '@material-ui/core/Box';
import DownloadIcon from '@material-ui/icons/GetApp';
import { useService, useGridColumns, useGridActions } from '../../hooks';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            marginBottom: '20px',
        },
    },
}));

function ArticleSearch({
    className,
    style,
    tableRef,
    title,
    onRowClick,
    onRowAdd,
    onRowUpdate,
    onRowDelete,
    options,
}) {
    const classes = useStyles();
    const service = useService('searchArticle');
    const [searchTerm, setSearchTerm] = React.useState({});
    const [searchResults, setSearchResults] = React.useState([]);
    const columns = useGridColumns('searchArticle');
    const actions = useGridActions('searchArticle');

    const fetchData = async query => {
        try {
            const data = await service.get(query);
            setSearchResults(data);
            console.log(data)
        } catch (err) {
            ToastsStore.error('Failed to retrieve search result');
            return {
                data: [],
                page: 0,
                totalCount: 0,
            };
        }
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setSearchTerm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        fetchData(searchTerm);
    };
console.log(searchTerm)
    const { name, author, language, year } = searchTerm;
    return (
        <>
            <Container maxWidth='md'>
                <form
                    className={classes.root}
                    noValidate
                >
                    <div>
                        <TextField
                            id='standard-multiline-flexible'
                            label='Title'
                            multiline
                            name='name'
                            onChange={handleChange}
                            rowsMax={4}
                            value={name}
                        />
                        <TextField
                            id='standard-multiline-flexible'
                            label='Author'
                            multiline
                            name='authorOfBook'
                            onChange={handleChange}
                            rowsMax={4}
                            value={author}
                        />
                        <TextField
                            id='standard-multiline-flexible'
                            label='Language'
                            multiline
                            name='language'
                            onChange={handleChange}
                            rowsMax={4}
                            value={language}
                        />
                        <TextField
                            id='standard-multiline-flexible'
                            label='Year'
                            multiline
                            name='year'
                            onChange={handleChange}
                            rowsMax={4}
                            value={year}
                        />
                        <Button
                            fullWidth
                            onClick={handleSearch}
                            variant='contained'
                        >
                            Search
                        </Button>
                    </div>
                </form>
            </Container>
            <br />

            {searchResults
            && (
                <Box>
                    <MaterialTable
                        className={className}
                        columns={columns}
                        data={searchResults}
                        editable={{
                            onRowAdd,
                            onRowUpdate,
                            onRowDelete,
                        }}
                        onRowClick={_.isFunction(onRowClick) ? onRowClick : undefined}
                        options={{
                            search: false,
                            filtering: false,
                            ..._.omit(options, ['format', 'exclude', 'query']),
                        }}
                        style={{
                            ...style,
                            ...{ padding: 20 },
                        }}
                        tableRef={tableRef}
                        title={title}
                    />
                    {/* <Box mr={1}>
                        <Button
                            color='primary'
                            onClick={() => actions.onExport(null, null, searchTerm)}
                            startIcon={<DownloadIcon />}
                            variant='contained'
                        >
                            Export
                        </Button>
                    </Box> */}
                </Box>

            )}
        </>
    );
}

ArticleSearch.propTypes = {
    title: PropTypes.string,
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func,
    onRowClick: PropTypes.func,
    options: PropTypes.object,
    tableRef: PropTypes.object,
    className: PropTypes.string,
    style: PropTypes.object,
};

ArticleSearch.defaultProps = {
    options: {},
    title: '',
    onRowClick: undefined,
    onRowAdd: undefined,
    onRowUpdate: undefined,
    onRowDelete: undefined,
    tableRef: undefined,
    className: undefined,
    style: undefined,
};

export default ArticleSearch;
