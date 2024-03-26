import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import Card from '../../components/Card';

const EventList = (props) => {
	const renderedEvents = props?.events?.map((el) => <Card {...el} />);

	return (
		<Box p={{ base: '0 1em' }}>
			<VStack align={'flex-start'} spacing={{ base: '1em' }}>
				<Box color={'white'}>
					<Text
						bgColor={'blueMain.900'}
						p={'.5em 1em'}
						borderRadius={'.5em'}
						w={'auto'}
						fontWeight={'bold'}
					>
						Selected Events
					</Text>
				</Box>
				<Box width={'100%'}>
					<Grid
						templateColumns={{
							base: 'repeat(2, 1fr)',
							sm: 'repeat(3, 1fr)',
							lg: 'repeat(4, 1fr)',
							xl: 'repeat(5, 1fr)',
						}}
						autoFlow={'row'}
						gap={'.5em'}
						overflowX={'auto'}
						overscrollBehavior={'contain'}
						sx={{
							'&::-webkit-scrollbar': {
								display: 'none',
							},
						}}
					>
						{renderedEvents}
						<Card />
						<Card />
						<Card />
					</Grid>
				</Box>
			</VStack>
		</Box>
	);
};

export default EventList;
