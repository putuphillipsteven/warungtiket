import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../../utils/route';

export default function Card(props) {
	return (
		<Link to={`/event/${props.id}`}>
			<Box
				w={'100%'}
				h={'100%'}
				border={'3px solid black'}
				borderRadius={'.5em'}
				overflow={'hidden'}
			>
				<Box
					h={'8em'}
					bgColor={'blueMain.900'}
					bgImage={`${imageUrl}/event/${props?.image}`}
					bgRepeat={'no-repeat'}
					bgPosition={'center'}
					bgSize={'cover'}
				></Box>
				<Box p={'0 1em'}>
					<Box>
						<VStack align={'stretch'}>
							<VStack align={'flex-start'} p={'1em 0'}>
								<Text fontWeight={'bold'}>{props.eventName || `Lorem ipsum`}</Text>
								<Text color={'gray'}>{props.date || `YY|MM|DD`}</Text>
								<Text>{props?.province?.province || `Indonesia`}</Text>
								<Text fontSize={'.75em'}>
									{props?.tickets?.length > 0 ? 'Paid Event' : 'Free Event'}
								</Text>
							</VStack>
							<Divider borderWidth={'2px'} borderColor={'black'} />
							<HStack pb={'.5em'}>
								<Box bgColor={'blueMain.900'} w={'2em'} h={'2em'} borderRadius={'50%'}></Box>
								<Text fontWeight={'bold'} fontSize={{ base: 'xs', sm: 'xs' }}>
									{`${props?.user?.username.slice(0, 10)}...` || `John Doe`}
								</Text>
							</HStack>
						</VStack>
					</Box>
				</Box>
			</Box>
		</Link>
	);
}
