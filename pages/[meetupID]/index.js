import { Fragment } from "react";
import classes from './index.module.css';

function MeetUpDetails(){
    return(
        <section className={classes.detail}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/City-of-the-future.jpg/1280px-City-of-the-future.jpg" alt="A first meetup" />
            <h1> A first meetup</h1>
            <p>Meetup description</p>
            <address>address</address>
        </section>
    )
}

export default MeetUpDetails;
