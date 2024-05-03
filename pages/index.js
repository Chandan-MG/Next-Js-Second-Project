import MeetupList from "../components/meetups/MeetupList";
import { Fragment, useEffect, useState } from "react";
import {MongoClient} from 'mongodb';
import Head from 'next/head';

const DUMMY_ITEM = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/City-of-the-future.jpg/1280px-City-of-the-future.jpg',
        address: 'Some address 1, 33 some city',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/S%C3%A3o_Paulo_City.jpg/1280px-S%C3%A3o_Paulo_City.jpg',
        address: 'Some address 3, 55 some city',
        description: 'This is a second meetup'
    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/S%C3%A3o_Paulo_City.jpg/1280px-S%C3%A3o_Paulo_City.jpg',
        address: 'Some address 3, 55 some city',
        description: 'This is a third meetup'
    }
]

function HomePage(){
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(()=>{
        setLoadedMeetups(DUMMY_ITEM);
    },[])
    return(
        <Fragment>
            <Head>
                <title>React meetup</title>
                <meta  name="description" content="Find your next tech meetup in this React app."/>
            </Head>
            <MeetupList meetups={loadedMeetups} />
        </Fragment>
    )
}

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb://localhost:27017/meetupsdb');
    const db = client.db;
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.find().toArray();
    return{
        props: {
            meetups: result.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                // description: meetup.description,
                id: meetup._id.toString()
            })),
        },
        revalidate: 10
    }
}

export default HomePage;