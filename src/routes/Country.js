import CountryComponent from '../Components/CountryComponent'
import ResourceMeasure from '../Components/Commons/ResourceMeasure'

function Country() {
	const resourceSize = ResourceMeasure();

	return (
		<div className="CountryComponent">
			<code>import &#123; Country &#125; from 'country-state-city';</code>
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
			<p>All Countries</p>
			<CountryComponent></CountryComponent>
		</div>
	);
}

export default Country;