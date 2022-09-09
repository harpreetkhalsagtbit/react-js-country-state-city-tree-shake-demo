import CountryAndStateComponent from '../Components/CountryAndStateComponent'
import ResourceMeasure from '../Components/Commons/ResourceMeasure'

function CountryAndState() {
	const resourceSize = ResourceMeasure();

	return (
		<div className="CountryComponent">
			<code>import &#123; Country, State &#125; from 'country-state-city';</code>
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
            <CountryAndStateComponent></CountryAndStateComponent>
		</div>
	);
}

export default CountryAndState;