export default [
    {
        field: 'sourceType',
        title: 'Type',
        type: 'picklist',
        options: ['book', 'chapter of edited volume', 'article in academic journal', 'article in other periodicals', 'data (audio)', 'data (visual)', 'data (multimodal)', 'Other'],
        required: false,
    },
    {
        field: 'name',
        title: 'Title',
        required: true,
    },
    {
        field: 'publisher',
        title: 'Publisher',
        required: true,
    },
    {
        field: 'language',
        title: 'Language',
        required: true,
    },
    {
        field: 'year',
        title: 'Year',
        required: true,
    },
    {
        field: 'titleOfChapterArticle',
        title: 'Title of Chapter/Article',
        required: false,
    },
    {
        field: 'pageRange',
        title: 'Page Range',
        required: false,
    },
    {
        field: 'authorOfBook',
        title: 'Author of Book',
        required: false,
    },
    {
        field: 'authorOfChapterArticle',
        title: 'Author of Chapter/Article',
        required: false,
    },
    {
        field: 'placeOfPublication',
        title: 'Place of Publication',
        required: false,
    },
    {
        field: 'varietyStudied',
        title: 'Variety Studied',
        type: 'picklist',
        options: ['Central Kurdish', 'Northern Kurdish', 'Southern Kurdish', 'Zazaki', 'Gurani', 'Hawrami', 'Laki', 'Badini', 'Other'],
        required: false,
    },
    {
        field: 'languageFeatureStudied',
        title: 'Language Feature Studied',
        type: 'picklist',
        options: ['Phonetics/Phonology', 'Morpho', 'syntax', 'Semantics', 'Pragmatics', 'Discourse analysis', 'Psycholinguistics', 'Sociolinguistics', 'Bi-Multilingualism', 'Language acquisition', 'Applied linguistics', 'computer linguistics', 'dialectology', 'mapping Kurdish', 'lexicography / dictionary', 'Policy and planning of Kurdish', 'revitatlization', 'standardization'],
        required: false,
    },
    {
        field: 'regionField',
        title: 'Region Field',
        type: 'picklist',
        options: ['Armenia', 'Iran', 'Iraq', 'Turkey', 'Syria', 'Caucasus', 'diaspora', 'other'],
        required: false,
    },
    {
        field: 'otherKeywords',
        title: 'Other Keywords',
        required: false,
    },
    {
        field: 'source',
        title: 'Source',
        required: false,
    },
];
