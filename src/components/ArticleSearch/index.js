import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useService } from '../../hooks';

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
    const [searchTerm, setSearchTerm] = React.useState({ name: '', author: '' });
    const [searchResults, setSearchResults] = React.useState([]);
    const [selectedRow, setSelectedRow] = React.useState(null);

    const fetchData = async query => {
        try {
            const data = await service.get(query);
            setSearchResults(data);
        } catch (err) {
            // ToastsStore.error(`Failed to retrieve data`);
            return { data: [] };
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
                            name='author'
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
                <MaterialTable
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Author', field: 'author' },
                        { title: 'Language', field: 'language' },
                        { title: 'Year', field: 'year' },
                    ]}
                    data={searchResults.map(({ name, author, language, year }) => (
                        {
                            name,
                            author,
                            language,
                            year,
                        }
                    ))}
                    onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                    options={{
                        search: false,
                        filtering: false,
                        rowStyle: rowData => ({ backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF' }),
                    }}
                    title='Search Result'
                />
            )}
        </>
    );
}
export default ArticleSearch;
