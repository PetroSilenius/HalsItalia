import React from 'react';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

const Schedule = () => {
    return(
        <div>
            <h4>Tulevat tapahtumat</h4>
            <ListGroup>
                <ListGroupItem className="justify-content-between">Talvirieha Salon Torilla<Badge pill>17.2.</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between">Limudisko <Badge pill>30.4.</Badge></ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default Schedule