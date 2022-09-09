import StateComponent from '../Components/StateComponent'
import ResourceMeasure from '../Components/Commons/ResourceMeasure'

function State() {
	const resourceSize = ResourceMeasure();

	return (
		<div className="StateComponent">
			<code>import &#123; State &#125; from 'country-state-city';</code>
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
			<p>All States of a Country - India</p>
			<StateComponent countryCode = 'IN'></StateComponent>
		</div>
	);
}

export default State;