export const events = [{
  id: "1",
  image: "media/images/event1.jpeg",
  title: "Downtown First Thursdays",
  date: "20 September",
  day: "Sunday",
  time: "5:00 PM",
  duration: "5 hours",
  location: "Natoma Cabana, USA",
  address: "90 Natoma Street San Francisco, CA 94105 United States",
  by: "Downtown First Thursday",
  descrip: "Downtown SF's massive monthly street party! DJs, dancing, drag, and all ages fun every first Thursday of the month.",
  price: "FREE"
},{
  id: "2",
  image: "media/images/event2.jpeg",
  title: "Block Party: Sabai + Boombox Cartel",
  date: "5 October",
  day: "Sunday",
  time: "11:00 PM",
  duration: "1 day, 6 hours",
  location: "Railyards Boulevard, USA",
  address: "Railyards Boulevard Sacramento, CA 95811 United States",
  by: "THIS MIDNITE",
  descrip: "This Weekend! We are excited to present our new Railyards party featuring SABAI + Amidy on Sep 5th and BOOMBOX CARTEL on Sep 6th (both 21+)",
  price: "$19.99"
},{
  id: "3",
  image: "media/images/event3.jpeg",
  title: "Aurora Electronics Recycling Drive-Thru",
  date: "7 October",
  day: "Tuesday",
  time: "8:00 AM - 8:00 PM",
  duration: "12 hours",
  location: "Route 59 Metra Train Station, USA",
  address: "1090 Illinois Route 59 Aurora, IL 60504 United States",
  by: "City of Aurora | Mayor's Office",
  descrip: "The free Fall Electronics Recycling Drive-Thru is Saturday, September 6 from 8 A.M. to 12 P.M. at the Route 59 Train Station.",
  price: "FREE"
},{
  id: "4",
  image: "media/images/event4.jpeg",
  title: "AUTUMN NIGHTS: ROUND 1",
  date: "26 September",
  day: "Friday",
  time: "9:00 PM",
  duration: "6 hours",
  location: "Winkers Nightclub, UK",
  address: "Denham Lane Chalfont Saint Peter SL9 0QH United Kingdom",
  by: "Radiate London",
  descrip: "Get ready for the ultimate autumn party experience with AUTUMN NIGHTS ROUND 1-it's going to be the biggest yet!",
  price: "$9.38"
},{
  id: "5",
  image: "media/images/event5.jpeg",
  title: "90s Silent Disco in Liverpool Cathedral",
  date: "12 October",
  day: "Friday",
  time: "8:00 PM",
  duration: "3 hours",
  location: "Liverpool Cathedral, UK",
  address: "Saint James Road Liverpool L1 7AZ United Kingdom",
  by: "Silent Discos In Incredible Places - Worldwide",
  descrip: "A 90s Disco like no other is returning to Liverpool after numerous sold-out shows, Friday 26th September!",
  price: "$29.71"
},{
  id: "6",
  image: "media/images/event6.jpeg",
  title: "Run the Runway 2025",
  date: "8,9 October",
  day: "Monday",
  time: "10:00 AM",
  duration: "2 hours",
  location: "Glasgow Prestwick Airport, UK",
  address: "107 Glasgow Prestwick Intnl Airport Prestwick KA9 2PL United Kingdom",
  by: "Glasgow Prestwick Airport",
  descrip: "Join us on the runway on Sunday 9th November as we hope to smash last year's fundraising total!",
  price: "$27.80"
}]

// Function to get event by id
export function getEvent(eventId) {
  let matchingEvent;
  events.forEach((event) => {
    if (event.id === eventId) {
      matchingEvent = event;
    };
  });

  return matchingEvent;
}