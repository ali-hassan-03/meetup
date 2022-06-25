import {MeetupList} from '../components/meetups/MeetupList';
//import {useEffect, useState} from 'react';


const DUMMY_MEETUPS = [
{
    id:'m1',
    title:'A First Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/7/79/Westminster_Abbey_by_Canaletto%2C_1749.jpg',
    address:'Some address 5, 1234 Some city',
    description:'This is a first meetup'
},
{
    id:'m3',
    title:'A Second Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/7/79/Westminster_Abbey_by_Canaletto%2C_1749.jpg',
    address:'Some address 6, 1234 Some city',
    description:'This is a Second meetup'
}



];


function HomePage() {
   
    return <MeetupList meetup={DUMMY_MEETUPS} />
    
}


//export async function getServerSideProps(context){
  //  const req = context.req;
  //  const res = context.res;

//   //  return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         }
//     };


//}
// export async function getStaticProps(){
  //  return{
   //     props:{
    //        meetups:DUMMY_MEETUPS
      //  },
      //  revalidate: 1
   //};
 //}

export default HomePage;