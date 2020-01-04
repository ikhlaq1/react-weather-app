import React, { Component } from 'react';
import './App.css';
import { WeatherService } from './services/WeatherService';
import {Header, Icon } from 'semantic-ui-react'

class App extends Component {
  state = {
    searchtext:"Search here"
  }
  handleChange = (e, { value }) => {
    this.setState({ value })
  }
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        console.log({ data })
        this.setState({ appData: data })
      })
      .catch(console.log)

  }
  render() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='moon' circular />
          <Header.Content>Ejam Weather</Header.Content>
        </Header>
        <WeatherService></WeatherService>
        {/* <center><h1>City List</h1></center>
        <Segment>
          {this.state.appData.map((res) => (
            <Grid columns='equal'>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column width={8}>
                <Form.Field>
                  <Radio
                    label={res.name}
                    name='radioGroup'
                    value={res.name}
                    checked={this.state.value === res.name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Button onClick={() => this.fetchData(res)} secondary>Fetch Data</Button>
              </Grid.Column>
            </Grid>
          ))}
        </Segment> */}
      </div>
    );
  }
}

export default App;