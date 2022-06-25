import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

export function MeetupList(props)
 {
  return (
    <ul className={classes.list}>
      {props.meetup.map((meetup) => (
       // <div>{meetup.title}</div>
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

//export default MeetupList;
