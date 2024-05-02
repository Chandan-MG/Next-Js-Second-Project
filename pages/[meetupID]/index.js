import { Fragment } from "react";
import classes from './index.module.css';
import {MongoClient} from 'mongodb';

function MeetUpDetails(props){
    return(
        <section className={classes.detail}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/City-of-the-future.jpg/1280px-City-of-the-future.jpg" alt="A first meetup" />
            <h1> A first meetup</h1>
            <p>Meetup description</p>
            <address>address</address>
        </section>
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb://localhost:27017/meetupsdb');
    const db = client.db;
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();

    return{
        fallback: false,
        paths:  meetups.map((m) => ({params:{ meetupId : m._id.toString()}}))
    }
}


export async function getStaticProps(context){
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb://localhost:27017/meetupsdb');
    const db = client.db;
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

    client.close();

    return{
        props: {
            meetupdata: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            }
        }
    }
}
export default MeetUpDetails;
