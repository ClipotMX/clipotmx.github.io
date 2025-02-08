"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import StarImg from "../../public/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import Field from "../common/Field";

function SignInForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		console.log("Submite Form Data = ", formData);
	};
	return (
		<FadeInUp className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-account-title">
					<h2>
						<span className="aximo-title-animation">
							Welcome back
							<span className="aximo-title-icon">
								<Image src={StarImg} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="aximo-account-wrap">
					<form onSubmit={handleSubmit(submitForm)}>
						<Field label="Enter email address" error={errors.email}>
							<input
								{...register("email", { required: "Email is required." })}
								type="email"
								name="email"
								id="email"
								placeholder="example@gmail.com"
							/>
						</Field>

						<Field label="Enter Password" error={errors.password}>
							<input
								{...register("password", {
									required: "Password is required.",
									minLength: {
										value: 8,
										message: "Your password must be at least 8 characters.",
									},
								})}
								type="password"
								name="password"
								id="password"
								placeholder="Enter password"
							/>
						</Field>

						<div className="aximo-account-checkbox-wrap">
							<div className="aximo-account-checkbox">
								<input type="checkbox" id="check" />
								<label htmlFor="check">Remember me</label>
							</div>
							<Link className="forgot-password" href="/reset-password">
								Forgot password?
							</Link>
						</div>

						<button id="aximo-account-btn" type="submit">
							Create account
						</button>
						<div className="aximo-or">
							<p>or</p>
						</div>

						<a href="https://google.com" target="_blank" className="aximo-connect-login">
							Sign up with Google
						</a>
						<a href="https://fb.com" target="_blank" className="aximo-connect-login">
							Sign up with Facebook
						</a>

						<div className="aximo-account-bottom">
							<p>
								Not a member yet? <Link href="/sign-up">Sign up here</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</FadeInUp>
	);
}

export default SignInForm;
