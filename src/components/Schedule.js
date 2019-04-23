import React from 'react';
import {ListGroup} from 'reactstrap';
import Event from './Event';

const Schedule = () => {
    return(
        <div>
            <h4 style={{color:'white'}}>Tulevat tapahtumat</h4>
            <ListGroup>
                <Event name={'Ankkurirastit, letunpaisto '} time={'14.4.'}/>
                <Event name={'Haravointi '} time={'24.5.'}/>
                <Event name={'Haravointi '} time={'27.5.'}/>
                <Event name={'Kouludisko '} time={'30.4.'}/>
                <Event name={'Vanhempainilta ja ryhmääntymisilta '} time={'10.5.'} other={true}/>
                <Event name={'Autosuunnistus '} time={'11.5.'}/>
                <Event name={'Metsänistutus '} time={'15.5.'}/>
                <Event name={'Metsänistutus '} time={'18.5.'}/>
            </ListGroup>
        </div>
    )
}

export default Schedule