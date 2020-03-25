import React from 'react';

import './card.style.scss';

const Card = ({ data: { id, name } }) => {
	let img = `https://robohash.org/${id}/?set=set2`;
	return (
		<div className="card">
			<p>{name}</p>
			<img src={img} alt={`User ${id}`} />
		</div>
	);
};

export default Card;
