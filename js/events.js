import { events } from "../data/events-data.js";

let html = '';
events.forEach((event) => {
  html+= `
    <div class="col-12 col-sm-6 col-md-4">
      <div class="card">
        <div class="image-wrapper">
          <img src="${event.image}">
        </div>
        <div class="title-wrapper">
          <div class="title">${event.title}</div>
        </div>
        <div class="date-time-wrappper">
          <div class="date">${event.date}</div>
          <div class="dot">•</div>
          <div class="time">${event.time}</div>
        </div>
        <div class="extra-info-wrapper">
          <div class="location">${event.location}</div>
          <div class="price">${event.price}</div>
        </div>
      </div>
    </div>
  `
});

document.querySelector('.upcomingEvents-section .row').innerHTML = html;