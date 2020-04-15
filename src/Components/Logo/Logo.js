import React from 'react';
import Tilt from 'react-tilt'
import man from './432.jpg';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
	 			<div className="Tilt-inner">
	 				<img style={{paddingLeft: '0px'}} alt='logo' src={man}/>
	 			</div>
			</Tilt>
		</div>
	);
}

export default Logo;

 
