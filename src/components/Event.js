import React from 'react';
import {ListGroupItem, Badge} from 'reactstrap';

const Event = (props) => {
    let badgeColor = "warning"
    if (props.other) {
        badgeColor = "success"
    }
    return(
        <ListGroupItem className="justify-content-between">{props.name}<Badge color={badgeColor}>{props.time}</Badge></ListGroupItem>
    )
}

export default Event