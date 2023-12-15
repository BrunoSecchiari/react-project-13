import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse through our diverse and outstanding meetups!'
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://brunosecchiari95:vwjpnz95@cluster0.vfurf5b.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
      revalidate: 60,
    },
  };
};

/* export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;
  console.log(req, res);

  return {
    props: {
      meetups: MEETUPS,
    },
  };
}; */
