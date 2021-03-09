import React from 'react';
import FileSaver from 'file-saver';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastsStore } from 'react-toasts';
import Box from '@material-ui/core/Box';
import DownloadIcon from '@material-ui/icons/GetApp';
import { useService, useGridColumns, useGridActions, useFormLayout } from '../../hooks';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            marginBottom: '20px',
        },
    },
}));

function ArticleSearch() {
    const classes = useStyles();
    const service = useService('searchArticle');
    const [searchTerm, setSearchTerm] = React.useState({});
    const [advanceSearch, setAdvanceSearch] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const [selection, setSelection] = React.useState([]);
    const columns = useGridColumns('searchArticle');
    const actions = useGridActions('searchArticle');
    const searchForm = useFormLayout('searchArticle');

    const handleCitation = () => {
        try {
            // to do: Citation should be define based on the type of the item
            const citations = selection.map(item => {
                const result = `${item.authorOfBook.split(' ')[1]}, ${item.authorOfBook.split(' ')[0][0]}.
                 ${item.year}. ${item.name}. ${item.placeOfPublication}: ${item.publisher}.\r\n`;
                return result;
            });
            const blob = new Blob(citations, { type: 'text/plain;charset=utf-8' });
            FileSaver.saveAs(blob, 'Citation.txt');
            ToastsStore.success('Successfully exported Citations');
        } catch {
            ToastsStore.error('Failed to export');
        }
    };

    // fetch data for search result
    const fetchData = async query => {
        try {
            const data = await service.get(query);
            setSearchResults(data);
        } catch (err) {
            ToastsStore.error('Failed to retrieve search result');
            return {
                data: [],
                page: 0,
                totalCount: 0,
            };
        }
    };
    // set search term on change of each input field
    const handleChange = e => {
        const { name, value } = e.target;
        setSearchTerm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    // on search button click, fetch data
    const handleSearch = () => {
        fetchData(searchTerm);
    };

    const handleClearSearch = () => {
        setSearchTerm({});
        setSearchResults([]);
    };

    return (
        <>
            <Container maxWidth='md'>
                <form
                    className={classes.root}
                    noValidate
                >
                    <div>
                        {searchForm && searchForm.map((column, i) => (
                            <span key={column.field}>
                                {/* if it's not advance search, just show four fields} */}
                                {!advanceSearch && i <= 3 ? (
                                    <TextField
                                        label={column.title}
                                        multiline
                                        name={column.field}
                                        onChange={handleChange}
                                        rowsMax={4}
                                        value={searchTerm[column.field] || ''}
                                    />
                                ) : advanceSearch ? (
                                    // if advance search is true, show all fields
                                    <TextField
                                        label={column.title}
                                        multiline
                                        name={column.field}
                                        onChange={handleChange}
                                        rowsMax={4}
                                        value={searchTerm[column.field] || ''}
                                    />
                                ) : null }
                            </span>
                        ))}
                        <Button
                            fullWidth
                            onClick={handleSearch}
                            variant='contained'
                        >
                            Search
                        </Button>
                    </div>
                </form>
                <Box
                    display='flex'
                    justifyContent='center'
                    pt={2}
                >
                    <Box mr={1}>
                        <Button
                            color='primary'
                            onClick={() => setAdvanceSearch(prev => !prev)}
                            variant='contained'
                        >
                            Advance Search
                        </Button>
                    </Box>
                    <Box mr={1}>
                        <Button
                            color='primary'
                            onClick={() => actions.onExport(null, null, searchTerm)}
                            startIcon={<DownloadIcon />}
                            variant='contained'
                        >
                            Export the search result
                        </Button>
                    </Box>
                    <Box mr={1}>
                        <Button
                            color='primary'
                            onClick={() => handleClearSearch()}
                            variant='contained'
                        >
                            Clear Search
                        </Button>
                    </Box>
                </Box>
            </Container>
            <br />

            {searchResults
            && (
                <Box>
                    <MaterialTable
                        actions={[
                            {
                                icon: 'download',
                                tooltip: 'Export Citation',
                                onClick: () => handleCitation(),
                            },
                        ]}
                        columns={columns}
                        data={searchResults}
                        onSelectionChange={data => setSelection(data)}
                        options={{
                            selection: true,
                            search: false,
                            filtering: false,
                        }}
                        style={{ padding: 20 }}
                        title='Search Result'
                    />
                </Box>
            )}
        </>
    );
}

export default ArticleSearch;
