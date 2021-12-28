import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import City from './components/City';
import CityInfo from './components/CityInfo';

function App() {
	const [city, setCity] = useState('');
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="0">
				<Accordion.Header>Выбор города</Accordion.Header>
				<Accordion.Body>
					<City
						setCity={setCity}
						city={city}
					/>
				</Accordion.Body>
			</Accordion.Item>
			{
				city &&
				<Accordion.Item eventKey="1">
					<Accordion.Header>Информация из открытых источников</Accordion.Header>
					<Accordion.Body>
						<CityInfo
							city={city}
						/>
					</Accordion.Body>
				</Accordion.Item>
			}

		</Accordion>
	);
}

export default App;
