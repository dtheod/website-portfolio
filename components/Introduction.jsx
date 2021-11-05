import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";


const Introduction = ({ prof }) => {
	return (
		<Card className="section-lg bg-white-info shadow-lg border-0">
			<Container className="">
				<div className="p-2">
					<Row className="">
                        <Col className="order-lg-4" lg = "4">
                        </Col>
						<Col className="order-lg-4" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "250px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
                            <h2 className="text-gradient headertekst">Danis Theodoulou</h2>
						</Col>
						<Col lg="4" className="order-lg-4">
						</Col>
					</Row>
				</div>
			</Container>
		</Card>
	);
};

export default Introduction;