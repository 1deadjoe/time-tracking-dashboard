document.addEventListener("DOMContentLoaded", () => {
  // Select the buttons and time sections
  const dailyBtn = document.getElementById("dailyReport");
  const weeklyBtn = document.getElementById("weeklyReport");
  const monthlyBtn = document.getElementById("monthlyReport");

  const dailyTimeSections = document.querySelectorAll(".daily.time");
  const weeklyTimeSections = document.querySelectorAll(".weekly.time");
  const monthlyTimeSections = document.querySelectorAll(".monthly.time");

  // Function to hide all time sections
  function hideAllTimeSections() {
    dailyTimeSections.forEach((section) => section.classList.add("hidden"));
    weeklyTimeSections.forEach((section) => section.classList.add("hidden"));
    monthlyTimeSections.forEach((section) => section.classList.add("hidden"));
  }

  // Function to remove 'active-report' class from all buttons
  function removeActiveClassFromAllButtons() {
    dailyBtn.classList.remove("active-report");
    weeklyBtn.classList.remove("active-report");
    monthlyBtn.classList.remove("active-report");
  }

  // Function to handle button click
  function handleButtonClick(timeSectionsToShow, buttonToActivate) {
    hideAllTimeSections();
    removeActiveClassFromAllButtons();
    timeSectionsToShow.forEach((section) => section.classList.remove("hidden"));
    buttonToActivate.classList.add("active-report");
  }

  // Event listeners for the buttons
  dailyBtn.addEventListener("click", () => {
    handleButtonClick(dailyTimeSections, dailyBtn);
  });

  weeklyBtn.addEventListener("click", () => {
    handleButtonClick(weeklyTimeSections, weeklyBtn);
  });

  monthlyBtn.addEventListener("click", () => {
    handleButtonClick(monthlyTimeSections, monthlyBtn);
  });
});
