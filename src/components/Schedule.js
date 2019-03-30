import React from 'react';
import {ListGroup} from 'reactstrap';
import Event from './Event';

const Schedule = () => {
    return(
        <div>
            <h4>Tulevat tapahtumat</h4>
            <ListGroup>
                <Event name={'Ankkurirastit, letunpaisto '} time={'14.4.'}/>
                <Event name={'Haravointi '} time={'Huhti-Toukokuu'}/>
                <Event name={'Kouludisko '} time={'30.4.'}/>
                <Event name={'Vanhempainilta ja ryhmääntymisilta '} time={'10.5.'} other={true}/>
                <Event name={'Autosuunnistus '} time={'11.5.'}/>
                <Event name={'Metsänistutus '} time={'Toukokuu'}/>
            </ListGroup>
        </div>
    )
}

export default Schedule