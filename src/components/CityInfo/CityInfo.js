import { Component } from 'react';
import { CITIES_LIST_API as citiesAPI } from '../../Constants';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class CityInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			abstract: '',
		};
	}

	componentDidMount() {
		this.loadInfo();
	}

	loadInfo = async () => {
		const {
			city,
		} = this.props;
		const answer = await (await fetch(`https://api.duckduckgo.com/?q=${city}&format=json&atb=v280-1`)).json();
		const abstract = answer['Abstract'];
		this.setState({
			abstract,
		})
	}

	render() {
		const {
			abstract,
		} = this.state;

		return (
			<>
				<div>{abstract}</div>
			</>
		)
	}
}

export default CityInfo;