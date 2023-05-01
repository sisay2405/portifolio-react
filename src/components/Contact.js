import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import SubHeader from "./SubHeader";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_1iy08ca",
				"template_vv1d4nn",
				{
					from_name: form.name,
					to_name: "JavaScript Mastery",
					from_email: form.email,
					to_email: "sujata@jsmastery.pro",
					message: form.message,
				},
				"93-pqfzVA47yKAoP6"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			);
	};

	return (
		<ContactWrapper>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="contact"
				id="contact"
			>
				<SubHeader subHeader="Get in touch" />
				<form ref={formRef} onSubmit={handleSubmit} className="form">
					<label>
						<span>Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="your name"
						/>
					</label>
					<label>
						<span>Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="your email"
						/>
					</label>
					<label>
						<span>Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="your message"
						/>
					</label>
					<button type="submit">{loading ? "Sending..." : "Send"}</button>
				</form>
			</motion.div>
		</ContactWrapper>
	);
};

const ContactWrapper = styled.div`
	.contact {
		.form {
			width: 50%;
			margin: auto;
			margin: 20px;
			/* dispay: flex; */
			label {
				display: flex;
				flex-direction: column;
				span {
					color: white;
					margin-bottom: 10px;
				}
				input {
					background-color: #151030;
					padding: 10px 15px;
					color: white;
					border-radius: 10px;
					border: none;
					margin: 15px 0px;
				}
				textarea {
					background-color: #151030;
					padding: 10px 15px;
					color: white;
					border-radius: 10px;
					border: none;
					height: 200px;
				}
			}
			button {
				background-color: #e1802b;
				padding: 10px 15px;
				margin-top: 40px;
				border-radius: 10px;
				border: none;
				width: 80%;
			}
		}
	}
`;
export default Contact;
