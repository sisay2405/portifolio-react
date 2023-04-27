import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const SubHeader = ({ header, subHeader }) => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className="sectionHeadText">{subHeader}</h2>
			</motion.div>
		</>
	);
};
export default SubHeader;
