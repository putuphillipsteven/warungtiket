import { Box, Divider, IconButton, Spacer, Text, VStack, useToast } from '@chakra-ui/react';
import { BsTicketPerforated } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { ProfileModal } from '../../ProfileModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutSuccess } from '../../../features/login/loginSlice';

export const NavLink = (props) => {
	const [show, setShow] = useState(false);
	const user = useSelector((state) => state.login.user);
	const toast = useToast();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const logout = async () => {
		try {
			await dispatch(logOutSuccess());
			toast({
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

	return (
		<>
			<Box display={{ base: 'block', lg: 'none' }}>
				{props?.isLogin && (
					<VStack align={'stretch'}>
						<VStack spacing={'0'} align={'stretch'}>
							<Text fontWeight={'bold'}>{user?.username}</Text>
							<Text fontSize={'.75em'}>{user?.email}</Text>
						</VStack>
						<VStack align={'stretch'}>
							<Link to={'/dashboard'}>
								<Text fontWeight={'bold'} _hover={{ color: 'orange.500' }}>
									DASHBOARD
								</Text>
							</Link>
							<Link>
								<Text onClick={logout} fontWeight={'bold'} _hover={{ color: 'orange.500' }}>
									LOGOUT
								</Text>
							</Link>
						</VStack>
					</VStack>
				)}
			</Box>
			<Link to={'/findevent'}>
				<Text as={'p'} minW={'6em'} fontWeight={'bold'} _hover={{ color: 'orange.500' }}>
					FIND EVENT
				</Text>
			</Link>
			<Link to={'/createevent'}>
				<Text
					minW={'7em'}
					maxW={'fit-content'}
					fontWeight={'bold'}
					_hover={{ color: 'orange.500' }}
				>
					CREATE EVENT
				</Text>
			</Link>
			<Text
				fontWeight={'bold'}
				display={props?.isLogin ? 'none' : 'block'}
				_hover={{ color: 'orange.500' }}
			>
				<Link to={props?.isLogin ? '/cart' : '/signup'}>
					{props?.isLogin ? (
						<IconButton
							fontSize={'1.5em'}
							bgColor={'transparent'}
							color={'red'}
							_hover={{
								bgColor: 'tranparent',
							}}
						>
							<BsTicketPerforated />
						</IconButton>
					) : (
						'SIGN UP'
					)}
				</Link>
			</Text>
			<Text fontWeight={'bold'} _hover={{ color: '#fca311' }}>
				<Link to={props?.isLogin ? '' : '/login'}>
					{props?.isLogin ? <ProfileModal /> : 'LOGIN'}
				</Link>
			</Text>
		</>
	);
};
