import React from 'react';
import Card from '../card/card.component';

const CardList = (props) => {
	return props.users.map((value, index) => {
		return <Card key={index} data={value} />;
	});
};

export default CardList;
