import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export default MeetupDetails;

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          id: 'm1',
        },
      },
      {
        params: {
          id: 'm2',
        },
      },
      {
        params: {
          id: 'm3',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  return {
    props: {
      meetupData: {
        id,
        image:
          'https://a-static.besthdwallpaper.com/new-york-bridge-wallpaper-1280x768-79388_13.jpg',
        title: 'Meetup 1',
        address: 'Calle Falsa 123, Springfield',
        description: 'This is the first meetup of the list.',
      },
    },
  };
};
