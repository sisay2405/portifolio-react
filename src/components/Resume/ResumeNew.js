import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/sisres.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
	return (
		<div>
			<Container fluid className="resume-section" id="resume">
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={pdf}
						target="_blank"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;
