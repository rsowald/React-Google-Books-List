import axios from 'axios';
console.log(process.env.REACT_APP_APIKEY)

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY;

// Export an object with a "search" method that searches the GoogleBooks API for the passed query
export default {
    // Gets search results from GoogleBooks
    search: function (query) {
        return axios.get(`${BASEURL}${query}&key=${REACT_APP_APIKEY}`);
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};