import { Box, Center } from '@chakra-ui/react';
import EventCard from './EventCard';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { imageUrl } from '../../utils/route';

function EventBanner(props) {
	return (
		<Box
			display={'flex'}
			borderRadius={'.5em'}
			flexDir={'column'}
			minH={{ base: '10em', md: '15em', lg: '20em' }}
			overflow={'hidden'}
			w={'100%'}
			justifyContent={'center'}
			alignItems={'center'}
			bgColor={'orange.500'}
			bgImage={`${imageUrl}/event/${props?.image}`}
			bgRepeat={'no-repeat'}
			bgPosition={'center'}
			bgSize={'cover'}
		></Box>
	);
}
export default function UpcomingEvents(props) {
	console.log(`home`, props?.events);
	const renderedEvents = props?.events?.map((event) => <EventBanner {...event} />);
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
