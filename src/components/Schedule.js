import React from 'react';
import {ListGroup} from 'reactstrap';
import Event from './Event';

const Schedule = () => {
    return(
        <div>
            <h4 style={{color:'white'}}>Tulevat tapahtumat</h4>
            <ListGroup>
                <Event name={'Lähtö leirille'} time={'5.6.'} other={true}/>
                <Event name={'Paluu leiriltä'} time={'19.6'} other={true}/>
            </ListGroup>
        </div>
    )
}

export default Schedule