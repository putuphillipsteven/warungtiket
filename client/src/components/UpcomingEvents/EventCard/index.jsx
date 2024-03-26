import { Box, Image, Text, VStack, Flex, Spacer, AspectRatio } from '@chakra-ui/react';
import bannerTest from '../../../img/bannerTest.jpg';
export default function EventCard(props) {
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
			bgImage={bannerTest}
			bgRepeat={'no-repeat'}
			bgPosition={'center'}
			bgSize={'cover'}
		></Box>
	);
}
