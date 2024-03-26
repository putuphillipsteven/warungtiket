import { Box, Center } from '@chakra-ui/react';
import EventCard from './EventCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function UpcomingEvents(props) {
	const renderedEvents = props?.events?.map((event) => <EventCard {...event} />);
	return (
		<Box
			p={{ base: '0 1em' }}
			borderRadius={'1em'}
			overflow={'hidden'}
			display={'flex'}
			flexDir={'column'}
			w={'100%'}
			justifyContent={'center'}
			cursor={'pointer'}
		>
			<Carousel
				autoPlay={true}
				showStatus={false}
				axis={'horizontal'}
				infiniteLoop={false}
				stopOnHover={true}
				showArrows={false}
				showThumbs={false}
			>
				{renderedEvents}
			</Carousel>
		</Box>
	);
}
