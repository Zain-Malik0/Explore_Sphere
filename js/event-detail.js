import { getEvent } from "../data/events-data.js";

let eventId = localStorage.getItem('savedEventId');

let event = getEvent(eventId);
console.log(event);

let html = `
  <div class="image-wrapper">
    <img src="${event.image}">
  </div>
  <div class="container">
    <div class="row">

      <div class="col-12 col-lg-8">
        <div class="day-date-wrapper">
          <div class="day-date">${event.day}, ${event.date}</div>
        </div>

        <div class="title-wrapper">
          <div class="title">${event.title}</div>
        </div>

        <div class="by-wrapper">
          <div class="by">By <span>${event.by}</span></div>
        </div>

        <div class="short-description-wrapper">
          <div class="short-discription">
            ${event.descrip}
          </div>
        </div>

        <div class="date-time-wrapper">
          <div class="heading">Date and Time</div>
          <div class="date-time">
            <i class="fa-solid fa-calendar"></i>
            ${event.day}, ${event.date} · ${event.time}
          </div>
        </div>

        <div class="location-wrapper">
          <div class="heading">Location</div>
          <div class="content-wrapper">
            <div class="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="lines">
              <div class="line1">
                ${event.location}
              </div>
              <div class="line2">
                ${event.address}
              </div>
            </div>
          </div>
        </div>

        <div class="good-to-know-wrapper">
          <div class="heading">
            Good to know
          </div>  
          <div class="highlights-wrapper">
            <div class="second-heading">
              Highlights
            </div>
            <div class="time">
              <i class="fa-solid fa-clock"></i>
              ${event.duration}
            </div>
            <div class="person">
              <i class="fa-solid fa-person"></i>
              In person
            </div>
          </div>
          <div class="refund-wrapper">
            <div class="second-heading">
              Refund Policy
            </div>
            <div class="refund">
              Refunds up to 7 days before event
            </div>
          </div>
          
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="tickets-wrapper">
          <div class="flex-wrapper">
            <div class="content">
              <div class="price">
                ${event.price}
              </div>
              <div class="event-date-time">
                ${event.date}, ${event.time}
              </div>
            </div>
            <button class="ticket-btn">Get Tickets</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.querySelector(".main-section").innerHTML = html;