import MeetupList from '../components/meetups/MeetupList';

const MEETUPS = [
  {
    id: 'm1',
    title: 'Meetup 1',
    image:
      'https://a-static.besthdwallpaper.com/new-york-bridge-wallpaper-1280x768-79388_13.jpg',
    address: 'Calle Falsa 123, Springfield',
    description: 'This is the first meetup of the list.',
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    image:
      'https://a-static.besthdwallpaper.com/new-york-bridge-wallpaper-1280x768-79388_13.jpg',
    address: 'Calle Falsa 123, Springfield',
    description: 'This is the second meetup of the list.',
  },
  {
    id: 'm3',
    title: 'Meetup 3',
    image:
      'https://a-static.besthdwallpaper.com/new-york-bridge-wallpaper-1280x768-79388_13.jpg',
    address: 'Calle Falsa 123, Springfield',
    description: 'This is the third meetup of the list.',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export default HomePage;

export const getStaticProps = async () => {
  return {
    props: {
      meetups: MEETUPS,
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
