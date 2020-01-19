import React from 'react';
import { Grid, Radio, Form, Segment, Button } from 'semantic-ui-react'

const CurrentWeather = ({ onRadioChange, city, checked, onFetchClick ,disabled}) => (
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
            {/* { isActive ? <Button>create Quotation & Take notes </Button> : null } */}
                <Button  disabled={!disabled}  onClick={() => {
                    onFetchClick(city)
                }} secondary>Fetch Weather</Button>
            </Grid.Column>
        </Grid>
    </Segment>



);

export default CurrentWeather;