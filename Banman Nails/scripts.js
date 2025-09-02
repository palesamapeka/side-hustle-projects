function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

function handleBookings() {
  window.addEventListener("load", function () {
    calendar.schedulingButton.load({
      url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ36ZyNn6xPd_y-eTmTPLE_1jOwf-9rhnhSEyBJREOqI9jYm-jyy6K1rIfdDgJZnOpj8g02NtnwT?gv=true",
      color: "#A3B18A",
      label: "Book an appointment",
      target: document.getElementById("google-calendar-booking"),
    });
  });
}

handleBookings();
hamburgerMenu();