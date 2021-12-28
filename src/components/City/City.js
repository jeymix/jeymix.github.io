import { Component } from 'react';
import { CITIES_LIST_API as citiesAPI } from '../../Constants';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class City extends Component {
	constructor(props) {
		super(props);

		this.state = {
			areas: null,
			cities: null,
			// city: null,
		};
	}

	componentDidMount() {
		this.loadCities();
	}

	loadCities = async () => {
		const answer = await (await fetch(citiesAPI)).json();
		const areas = answer
			.find(itm => itm.id === '113')
			?.areas
			.sort((a,b) => {
				if (a.name > b.name) {
					return 1
				}
				if (a.name < b.name) {
					return -1
				}
				return 0;
			});
		this.setState({
			areas,
		})
	}

	handlePickArea = (area) => {
		this.setState({
			cities: area.areas,
		})
	}

	handlePickCity = (city) => {
		const {
			setCity,
		} = this.props;

		setCity(city.name);
	}

	render() {
		const {
			areas,
			cities,
			// city,
		} = this.state;

		const {
			city,
		} = this.props;
		
		return (
			<>
				{city ?
					(<h1>Выбран: {city}</h1>) :
					(<DropdownButton id="dropdown-basic-button" title={cities ? "Выбери город" : "Выбери регион"}>
						{
							cities && !city ?
								cities?.map(city =>
									<Dropdown.Item
										key = {`${city.name}`}
										onClick={this.handlePickCity.bind(this, city)}
									>
										{city.name}
									</Dropdown.Item>
								) :
								areas?.map(area =>
									<Dropdown.Item
										key = {`${area.name}`}
										onClick={this.handlePickArea.bind(this, area)}
									>
										{area.name}
									</Dropdown.Item>
								)

						}
					</DropdownButton>)
				}
			</>
		)
	}
}

export default City;