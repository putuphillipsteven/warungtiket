import {
	Box,
	Flex,
	Text,
	HStack,
	Spacer,
	Image,
	VStack,
	Input,
	InputGroup,
	InputRightElement,
	useToast,
} from '@chakra-ui/react';
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose, IoMdSearch } from 'react-icons/io';
import { NavLink } from './NavLink';
import { FaAngleLeft } from 'react-icons/fa';
import { ProfileModal } from '../ProfileModal';
import { logOutSuccess } from '../../features/login/loginSlice';

export default function Navbar(props) {
	const user = useSelector((state) => state.login.user);
	const [extend, setExtend] = useState(false);
	const [search, setSearch] = useState(false);

	const isLogin = useSelector((state) => state.login.isLogin);
	const handleExtend = () => {
		setExtend(!extend);
	};

	const handleSearch = () => {
		setSearch(!search);
	};

	return (
		<Box position={'fixed'} zIndex={'10'} w={'full'} top={'0'}>
			{/* START TOP NAVBAR SIDE */}
			<Box bgColor={'white'} p={'0.25em 1em'}>
				<Flex flexDir={'row-reverse'}>
					<HStack spacing={'0.5em'} color={'darkGray.800'}>
						<Text fontSize={'.75em'}>
							<Link to={'/about-us'}>About WarungTiket</Link>
						</Text>
						{/* <Text fontSize={'.75em'}>
							<Link>Help Center</Link>
						</Text> */}
					</HStack>
				</Flex>
			</Box>
			<Box bgColor={'darkGray.800'} p={{ base: '1em 1em' }} w={'full'} color={'white'}>
				<Box>
					<Flex alignItems={'center'}>
						<Box display={search ? 'block' : 'none'}>
							<FaAngleLeft fontSize={'1.3em'} onClick={() => setSearch()} />
						</Box>
						<Flex w={'10em'} h={'2.5em'} alignContent={'center'}>
							<Link to={'/'} aspectRatio={16 / 9}>
								<Image src={logo} display={search ? 'none' : 'block'} />
							</Link>
						</Flex>
						<Spacer />
						{props.input}
						<Spacer />
						<Box>
							<HStack spacing={'1em'}>
								<Box display={{ base: 'none', lg: 'block' }}>
									<HStack spacing={'2em'} align={'center'} p={'0 1em'}>
										<NavLink display={props.display} isLogin={isLogin} />
									</HStack>
								</Box>
								<Box w={'100%'} display={{ base: 'block', lg: 'none' }}>
									{extend ? (
										<IoMdClose
											cursor={'pointer'}
											fontSize={'1.2em'}
											onClick={() => handleExtend()}
											fontWeight={'bold'}
											_hover={{ color: 'orange.500' }}
										/>
									) : (
										<HStack spacing={'.5em'}>
											<InputGroup display={search ? 'block' : 'none'}>
												<Input
													placeholder={'Search event here'}
													outline={'none'}
													focusBorderColor='white'
													variant={'outline'}
												/>
												<InputRightElement>
													<IoMdSearch fontSize={'1.5em'} />
												</InputRightElement>
											</InputGroup>
											<Box
												p={'.5em'}
												borderRadius={'.5em'}
												display={search ? 'none' : 'block'}
												cursor={'pointer'}
												_hover={{ color: 'orange.500' }}
											>
												<IoMdSearch fontSize={'1.5em'} onClick={() => handleSearch()} />
											</Box>
											<Box
												display={search ? 'none' : 'block'}
												cursor={'pointer'}
												_hover={{ color: 'orange.500' }}
											>
												<GiHamburgerMenu fontSize={'1.2em'} onClick={() => handleExtend()} />
											</Box>
										</HStack>
									)}
								</Box>
							</HStack>
						</Box>
					</Flex>
				</Box>
			</Box>
			<Box
				minH={'100vh'}
				display={extend ? 'block' : 'none'}
				bgColor={'white'}
				color={'darkGray.900'}
				p={'1em'}
			>
				<VStack spacing={'1em'} align={'flex-start'}>
					<NavLink display={props.display} isLogin={isLogin} />
				</VStack>
			</Box>
			<Box
				minH={'100vh'}
				display={search ? 'block' : 'none'}
				bgColor={'white'}
				color={'darkGray.900'}
				p={'1em'}
			></Box>
		</Box>
	);
}
