import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from '../components/CurrentWeather'
import WeatherModal from '../components/WeatherModal'
import SearchComponent from '../components/SearchComponent'
const WEATHER_API_KEY = '2ce9c27bad816b51eb6943db06f0383f';

class WeatherService extends Component {
    handleChange = (e, { value }) => {
        this.setState({ value })
    }
    toggleModel(){
        this.setState({loading:false})
    }
    async searchZipCode(data){
        let zipcode= data.zipCode
        await this.apiRequest(zipcode);
    }
    async handleModel(cityName) {
        await this.apiRequest(cityName);
    }
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                {
                    activeCity: 'Vegas',
                    value: "Vegas",
                },
                {
                    activeCity: 'California',
                    value: "California",
                },
                {
                    activeCity: 'New York',
                    value: "New York",
                }
            ]

        };
        this.handleModel = this.handleModel.bind(this);
        this.searchZipCode = this.searchZipCode.bind(this);
        this.toggleModel = this.toggleModel.bind(this);

    }
    // async componentDidMount() {
    //     console.log("this", this.state.cities[0].activeCity)
    //     await this.apiRequest(this.state.cities[0].activeCity);
    // }
    convertTemperature() {
		if (this.state.temperatureUnits === 'metric') {
			return (this.state.temp * 9) / 5 + 32;
		} else {
			return this.state.temp;
		}
	}


    async apiRequest(cityName) {
        const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_API_KEY}`;
        await axios
            .get(locationUrl)
            .then(result => {
                const currentConditions = result.data;
				this.setState({
                    loading:true,
					cityName: currentConditions.name,
					temp: currentConditions.main.temp,
					iconId: currentConditions.weather[0].id,
					description: currentConditions.weather[0].main,
					humidity: currentConditions.main.humidity,
					time: new Date(currentConditions.dt).toLocaleTimeString() ,
					high: currentConditions.main.temp_max,
					low: currentConditions.main.temp_min,
					sunrise: new Date(currentConditions.sys.sunrise).toLocaleTimeString() ,
					sunset: new Date(currentConditions.sys.sunset).toLocaleTimeString(),
					windSpeed: `${currentConditions.wind.speed} ${
						this.state.temperatureUnits === 'metric' ? 'm/s' : 'mph'
					}`
				});
				this.convertTemperature();


            })
            .catch(err => {

            });
   
    }

    render() {
        return (
            <div>
                {this.state.cities.map((res) => (
                    <CurrentWeather
                        city={res.activeCity}
                        value={res.activeCity}
                        checked={res.value === this.state.value}
                        onRadioChange={this.handleChange}
                        onFetchClick={this.handleModel}
                        disabled={res.value === this.state.value}
                    />
                ))}
                <SearchComponent onSearchClick={this.searchZipCode} />
                <div>
                    <WeatherModal 
                    isOpen={this.state.loading}
                    city={this.state.cityName}
                    temp={this.state.temp}
                    description= {this.state.description}
                    humidity= {this.state.temp}
                    iconId= {this.state.iconId}
					time={this.state.time}
					high= {this.state.high}
					low= {this.state.low}
					sunrise= {this.state.sunrise}
					sunset= {this.state.sunset}
                    windSpeed= {this.state.windSpeed}
                    closeModel={this.toggleModel}
                    />
                </div>
            </div>
        );
    }
}

export { WeatherService };