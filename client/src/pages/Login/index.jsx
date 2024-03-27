import React, { useState } from 'react';
import {
	Box,
	VStack,
	Button,
	Image,
	Text,
	FormControl,
	Input,
	FormLabel,
	InputGroup,
	InputRightElement,
	Center,
	Alert,
	AlertIcon,
	AlertDescription,
	AlertTitle,
	useToast,
} from '@chakra-ui/react';
import logo from '../../img/logo.png';
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import { BiShowAlt, BiHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../features/login/loginSlice';

export default function SignIn() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const toast = useToast();
	const onSubmit = async (values, actions) => {
		try {
			await dispatch(login(values.email, values.password));
			toast({
				title: 'Login Success',
				status: 'success',
			});
			actions.resetForm();
			navigate('/');
		} catch (err) {
			toast({
				title: err?.response?.data?.message,
				status: 'error',
			});
			throw err;
		}
	};

	const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } =
		useFormik({
			initialValues: {
				email: '',
				password: '',
			},
			validationSchema: loginSchema,
			onSubmit,
		});

	return (
		<Box
			p={'1.5em 1em'}
			minH={'100vh'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			bgColor={'#3876BF'}
		>
			<VStack
				w={{ base: '100%', md: '70%', lg: '50%' }}
				spacing={'1em'}
				align={'stretch'}
				bgColor={'transparent'}
			>
				<form onSubmit={handleSubmit}>
					<Box>
						<Center>
							<Link to={'/'}>
								<Image src={logo} w={'15em'} />
							</Link>
						</Center>
					</Box>
					<Box>
						<FormControl>
							<Box>
								<VStack spacing={'1em'} align={'stretch'}>
									<Box>
										<FormLabel color={'white'}>Email</FormLabel>
										<Input
											id='email'
											name='email'
											type='text'
											onChange={handleChange}
											value={values.email}
											onBlur={handleBlur}
											color={'black'}
											bgColor={'white'}
											focusBorderColor={'transparent'}
											borderRadius={'0.5em'}
											borderColor={'transparent'}
											_hover={{ borderColor: 'transparent' }}
										></Input>
										{errors.email ? (
											<Alert
												status='error'
												fontSize={{ base: '0.6em', md: '.7em' }}
												borderRadius={'0.5em'}
												h={'1em'}
											>
												<AlertIcon />
												<AlertDescription>{errors.email}</AlertDescription>
											</Alert>
										) : touched.email && !errors.email ? (
											<Alert
												status='success'
												fontSize={{ base: '0.6em', md: '.7em' }}
												borderRadius={'0.5em'}
												h={'1em'}
											>
												<AlertIcon />
												<AlertTitle>Email is Valid!</AlertTitle>
											</Alert>
										) : null}
									</Box>
									<Box>
										<FormLabel color={'white'}>Password</FormLabel>
										<InputGroup>
											<Input
												id='password'
												name='password'
												onChange={handleChange}
												value={values.password}
												onBlur={handleBlur}
												type={!show ? 'password' : 'text'}
												color={'black'}
												bgColor={'white'}
												focusBorderColor={'transparent'}
												borderRadius={'0.5em'}
												borderColor={'transparent'}
												_hover={{ borderColor: 'transparent' }}
											></Input>
											<InputRightElement w='4em'>
												<Button
													size='s'
													onClick={handleClick}
													bgColor={'transparent'}
													_hover={{ bgColor: 'transparent' }}
													color={'black'}
												>
													{show ? <BiHide /> : <BiShowAlt />}
												</Button>
											</InputRightElement>
										</InputGroup>
										{touched.password && errors.password ? (
											<Alert
												status='error'
												fontSize={{ base: '0.6em', md: '.7em' }}
												borderRadius={'0.5em'}
												h={'1em'}
											>
												<AlertIcon />
												{errors.password}
											</Alert>
										) : null}
									</Box>
								</VStack>
							</Box>
						</FormControl>
					</Box>
					<VStack mt={'1em'}>
						<Button
							color={'white'}
							borderRadius={'0.5em'}
							_hover={{ color: 'orange.500' }}
							fontWeight={'bold'}
							_active={{ color: '#3876BF' }}
							type='submit'
							bgColor={'#192655'}
							variant={'solid'}
							size={'lg'}
							w={'10em'}
							isDisabled={isSubmitting}
						>
							<Text>LOGIN</Text>
						</Button>
					</VStack>
				</form>
				<VStack mt={'1em'} spacing={'0.5em'}>
					<Text fontSize={'0.75em'} color={'#F5F5F5'}>
						Belum Punya Akun?
					</Text>
					<Link to={'/signup'}>
						<Button
							bgColor={'#192655'}
							_hover={{ color: 'orange.500' }}
							fontWeight={'bold'}
							_active={{ color: '#3876BF' }}
							variant={'solid'}
							borderRadius={'0.5em'}
							color={'white'}
							size={'lg'}
							w={'10em'}
						>
							<Text>SIGNUP</Text>
						</Button>
					</Link>
				</VStack>
			</VStack>
		</Box>
	);
}
