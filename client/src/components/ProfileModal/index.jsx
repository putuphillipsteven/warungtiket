import { Box, Divider, IconButton, Text, VStack, useToast } from '@chakra-ui/react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { logOutSuccess } from '../../features/login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ProfileModal = () => {
	const [show, setShow] = useState(false);
	const user = useSelector((state) => state.login.user);
	const toast = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logout = async () => {
		try {
			await dispatch(logOutSuccess());
			await toast({
				title: 'Logout Success',
				status: 'success',
			});
			navigate('/');
		} catch (err) {
			toast({
				title: 'Maaf coba logout dikemudian tahun',
				status: 'error',
			});
		}
	};
	const updateState = () => {
		setShow(!show);
	};
	return (
		<Box display={{ base: 'none', lg: 'block' }}>
			<Box position={'relative'}>
				<IconButton
					size={'3em'}
					bgColor={'transparent'}
					_hover={'none'}
					icon={<BsPersonCircle size={'2em'} color={'white'} onClick={updateState} />}
					_active={'none'}
				/>
				<Box
					bgColor={'rgba(0, 0, 0, 0.5)'}
					onClick={updateState}
					opacity={'1'}
					w={'100vw'}
					h={'100vh'}
					position={'fixed'}
					top={'0'}
					left={'0'}
					display={show ? 'block' : 'none'}
					zIndex={'10'}
				>
					<Box
						w={'20em'}
						p={'1em 1em'}
						mt={'7em'}
						mr={'2em'}
						right={'0'}
						position={'absolute'}
						bgColor={'white'}
						borderRadius={'1em'}
						color={'black'}
						zIndex={'3'}
					>
						<VStack>
							<IconButton
								size={'3em'}
								bgColor={'transparent'}
								_hover={'none'}
								icon={<AiOutlineClose size={'1em'} color={'black'} />}
								_active={'none'}
								onClick={updateState}
								alignSelf={'flex-end'}
							/>

							<IconButton
								size={'3em'}
								bgColor={'transparent'}
								_hover={'none'}
								icon={
									<BsPersonCircle size={'3em'} color={'black'} _hover={{ color: 'orange.500' }} />
								}
								_active={'none'}
							/>
							<VStack spacing={'0'}>
								<Text>{user?.username}</Text>
								<Text fontSize={'.75em'}>{user?.email}</Text>
							</VStack>
							<Divider borderColor={'#192655'} borderWidth={'2px'} />
							<VStack>
								<Link to={'/dashboard'}>
									<Text>Dashboard</Text>
								</Link>
								<Link>
									<Text onClick={logout}>Logout</Text>
								</Link>
							</VStack>
						</VStack>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
