import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';

const InfoCard = (props) => {
    return (
        <div className="Card">
            <Card>
                <CardImg className="CardImg" top src={props.img} alt="Kuva kohteesta" />
                <CardBody className="CardBody">
                    <CardTitle><b>{props.title} {props.subtitle}</b></CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default InfoCard