import React from 'react';
import { Grid, Radio, Form, Segment, Button } from 'semantic-ui-react'

const CurrentWeather = ({ onRadioChange, city, checked, onFetchClick }) => (
    <Segment>
        <Grid columns='equal'>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Field>
                    <Radio
                        label={city}
                        name='radioGroup'
                        value={city}
                        checked={checked}
                        onChange={onRadioChange}
                        onClick={onFetchClick}
                    />
                </Form.Field>
            </Grid.Column>
            <Grid.Column>
                <Button  onClick={() => {
                    onFetchClick(city)
                }} secondary>Fetch Data</Button>
            </Grid.Column>
        </Grid>
    </Segment>



);

export default CurrentWeather;