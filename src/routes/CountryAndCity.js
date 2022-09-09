import CountryAndCityComponent from '../Components/CountryAndCityComponent'
import ResourceMeasure from '../Components/Commons/ResourceMeasure'
import { useEffect } from 'react';

function CountryAndCity() {
	const resourceSize = ResourceMeasure();
	const fnfn = () => {
		let val = 1;
		for(var i=1;i<100000000;i++) {
			val = val * 1;
			console.log();
		}
		console.log(i)
	}
	const useEffCallback = () => {
		fnfn()
		console.log('done')
	};
	useEffect(useEffCallback, [])
	console.log('rendering')
	return (
		<div className="CountryComponent">
			<code>import &#123; Country, City &#125; from 'country-state-city';</code>
			<div className='flex-wrapper'>
				<p>(Resource size measurement via browser&apos;s Performance API)</p>
				<p>(may need to Refresh once)</p>
			</div>
			<ul style={{
				display: "flex",
				flexDirection:"column",
				alignItems:"start",
				listStyle: 'none'
			}}>
				{
					resourceSize.map(({fileName, fileSize}, index) => {
						return <li key={index}>
							{index+1}. File Size: <span style={{textDecoration:"underline", wordBreak: "break-all"}}>{fileName}</span> - {fileSize}
						</li>
					})
				}
			</ul>
			<CountryAndCityComponent></CountryAndCityComponent>
		</div>
	);
}

export default CountryAndCity;