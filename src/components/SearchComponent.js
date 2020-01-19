import React, { Component } from 'react';

import { Grid, Input, Button, Form } from 'semantic-ui-react';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: ''
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.onSearchClick(this.state)
    }

    onChange = (e) => {
        this.setState({
            zipCode: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form className="centered">
                    <Grid columns='equal'>
                        <Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Form.Field aligm="center">
                                <Input type="text" name="zipCode" onChange={this.onChange} placeholder="Enter zipcode" />
                                <Button onClick={this.submitForm} positive>Search</Button>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column>
                        </Grid.Column>
                    </Grid>
                </form>
            </div >
        )
    }
}
export default SearchComponent;