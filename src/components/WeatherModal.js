import React from 'react';
import { Button, Header,Icon, Modal } from 'semantic-ui-react'
const ModalWeather = ({ isOpen, city, temp, description, humidity, iconId, time, high, low, sunrise, sunset, windSpeed, closeModel }) => (
    <div>
        <Modal open={isOpen} >
            <Header textAlign='center'>{city}</Header>
            <Modal.Content image>
            <Icon name='sun' size='massive' />
                {/* <Image wrapped size='medium' src='src/assets/weather.png' /> */}
                <Modal.Description>
                    <Header>Temperature : {temp }° C</Header>
                    <h3>Sunrise :{sunrise} </h3>
                    <h3>Sunset : {sunset}</h3>
                    <p>Humidity : {humidity}. Time :{time} </p>
                    <p>{description}</p>
                    <p>High Temp : {high}</p>
                    <p>Low Temp : {low}</p>
                    <p>Windspeed : {windSpeed}</p>
                </Modal.Description>
            </Modal.Content>
            <Button fluid={true} onClick={closeModel} primary>Close </Button>
        </Modal>
    </div>
);

export default ModalWeather;