import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Component, Fragment } from 'react';
import { Card, Row, Col, Input } from 'antd';
import { books } from './books';

const { Meta } = Card;
const {Search} = Input;


class App extends Component {

  constructor(){
    super()
    this.state = {
      searchField:'',
      AllBooks:[],
    }
  }

  onSearchChange = (value) => {
    this.setState({searchField:value})
  };

  componentDidMount(){
    this.setState({AllBooks: books});
  }

  render() {
    const {AllBooks, searchField} = this.state;
    const filteredBooks = AllBooks.filter(book => {
      return book.name.includes(searchField);
    })
    return  !books.length ?
    <h1> Loading </h1> :
    (
      <Fragment>
        <header>
          <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
        </header>
        <div className = "body">
            {
              <Fragment>
                <Row glutter = {16}> 
                <Col span = {8}></Col>
                <Search placeholder="input search text" allowClear onSearch={this.onSearchChange} style={{ width: 400 }} />
                </Row>
              <Row glutter = {16}>{
              filteredBooks.map((book, i) => {
                return (
                  <Col span = {6}>
                  <a style={{paddingTop:20}} href={book.textURL}>
                  <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="book" src={book.imgURL} />}
                    className = "bookCard"
                  >
                    <Meta title={book.name} description={book.author} />
                  </Card>
                  </a>
                  </Col>
                );
              })}
              </Row>
              </Fragment>
            }
        </div>
      </Fragment>
    )
  }


}
export default App;
