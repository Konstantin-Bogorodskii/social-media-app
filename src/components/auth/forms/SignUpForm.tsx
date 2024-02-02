import { Link } from 'react-router-dom';

import { SignUpFormValidation } from '@/lib/validation/validation';

import { z as zod } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import LogoImg from '@assets/images/logo.svg';
import Loader from '@shared/Loader';
import userService from '@/services/userService';
import { useToast } from '@/components/ui/use-toast';

const SignUpForm = () => {
	const { toast } = useToast();

	const form = useForm<zod.infer<typeof SignUpFormValidation>>({
		resolver: zodResolver(SignUpFormValidation),
		defaultValues: {
			name: '',
			username: '',
			email: '',
			password: ''
		}
	});

	const handleSignUp = async (values: zod.infer<typeof SignUpFormValidation>) => {
		const userAccount = userService.createUserAccount(values);

		if (!userAccount) {
			return toast({
				title: 'Sign up failed. Please try again.'
			});
		}
	};

	const isLoading = false;

	return (
		<Form {...form}>
			<div className="sm:w-420 flex-center flex-col">
				<img
					src={LogoImg}
					alt="logo"
				/>

				<h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
				<p className="text-light-3 small-medium md:base-regular mt-2">
					To use snapgram, Please enter your details
				</p>

				<form
					onSubmit={form.handleSubmit(handleSignUp)}
					className="flex flex-col gap-5 w-full mt-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="shad-form_label">Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										className="shad-input"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="shad-form_label">Username</FormLabel>
								<FormControl>
									<Input
										type="text"
										className="shad-input"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="shad-form_label">Email</FormLabel>
								<FormControl>
									<Input
										type="text"
										className="shad-input"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="shad-form_label">Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										className="shad-input"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						className="shad-button_primary">
						{isLoading ? (
							<div className="flex-center gap-2">
								<Loader /> Loading...
							</div>
						) : (
							'Sign Up'
						)}
					</Button>

					<p className="text-small-regular text-light-2 text-center mt-2">
						Already have an account?
						<Link
							to="/sign-in"
							className="text-primary-500 text-small-semibold ml-1">
							Log in
						</Link>
					</p>
				</form>
			</div>
		</Form>
	);
};
export default SignUpForm;
