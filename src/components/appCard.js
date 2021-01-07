import React from 'react';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

export class AppCard extends React.Component {

  constructor() {
    super();
    this.deleteApp = this.deleteApp.bind(this);
  }

  deleteApp(e) {
    e.preventDefault();

    /* After a movie item is deleted, reload the page. */
    axios.delete('http://localhost:4000/api/apps/' + this.props.app._id).then(() => {
      this.props.reloadPage();
    }).catch();
  }

  render() {
    return (
      <div className="App">
        <Card style={{width: '16em'}}>
          <Card.Img variant="top" src={this.props.app.icon}/>
          <Card.Body>
            <Card.Title>{this.props.app.name}</Card.Title>
            <Card.Text>{this.props.app.descr}</Card.Text>
            <Card.Link href={this.props.app.url}>Download</Card.Link>
          </Card.Body>
          <Link to={"/edit" + this.props.app._id} className="btn btn-primary">Edit</Link>
          {/* Create button and hook it up to delete function */}
          <Button variant="danger" onClick={this.deleteApp}>Delete</Button>
        </Card>
      </div>
    );
  }
}