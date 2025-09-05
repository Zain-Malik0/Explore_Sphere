import { events } from "../data/events-data.js";

function renderEvents() {
  let html = '';
  events.forEach((event) => {
    html+= `
      <div class="col-12 col-sm-6 col-md-4 event-card" data-event-id="${event.id}">
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
};

renderEvents();

// 
document.querySelectorAll(".event-card").forEach((card) => {
  card.addEventListener('click', () => {
    let cardEventId = card.dataset.eventId;
    localStorage.setItem("savedEventId", cardEventId);
    window.location.href = "Event Detail.html";
  });
});

// Upcoming events search box
const searchInput = document.querySelector('.input-wrapper input');

searchInput.addEventListener('input', (e) => {
  const value = (e.target.value).toLowerCase();
  document.querySelectorAll('.event-card').forEach((eventCard) => {
    let title = (eventCard.querySelector('.title').innerHTML).toLowerCase();
    const isVisible = title.includes(value);
    eventCard.classList.toggle("hide", !isVisible);
  });
})