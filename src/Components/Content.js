import React from 'react';
import StartingCard from './StartingCard';
import CreativityWhatCard from './CreativityWhatCard';
import CreativityWhyCard from './CreativityWhyCard';
import CreativityUseCaseCard from './CreativityUseCaseCard';
import Contacts from './Contacts';

const Content = () => {
	return	(
		<>
			<StartingCard/>
			<CreativityWhatCard/>
			<CreativityWhyCard/>
			<CreativityUseCaseCard/>
			<Contacts/>
		</>
		);
};

export default Content;
