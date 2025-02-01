const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const activityIds = [
  "work",
  "play",
  "study",
  "exercise",
  "social",
  "self-care",
];

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function updateData(data, timeframe) {
  activityIds.forEach((activity, index) => {
    const hoursElement = document.getElementById(`${activity}-hours`);
    const periodElement = document.getElementById(`${activity}-per-period`);
    hoursElement.textContent = `${data[index].timeframes[timeframe].current}hrs`;
    periodElement.textContent = `Last Week - ${data[index].timeframes[timeframe].previous}hrs`;
  });
}

function setActiveTab(activeTab) {
  daily.style.color = "hsl(235, 45%, 61%)";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";
  activeTab.style.color = "hsl(0, 0%, 100%)";
}

async function useData() {
  const myData = await fetchData();
  if (myData) {
    daily.addEventListener("click", () => {
      setActiveTab(daily);
      updateData(myData, "daily");
    });

    weekly.addEventListener("click", () => {
      setActiveTab(weekly);
      updateData(myData, "weekly");
    });

    monthly.addEventListener("click", () => {
      setActiveTab(monthly);
      updateData(myData, "monthly");
    });

    // Three-dots hover effect
    activityIds.forEach((activity) => {
      const threeDots = document.getElementById(`${activity}-three-dots`);
      threeDots.addEventListener("mouseover", () => {
        threeDots.src = "./images/icon-ellipsis.png";
      });
      threeDots.addEventListener("mouseout", () => {
        threeDots.src = "./images/icon-ellipsis.svg";
      });
    });

    // Initial data load (e.g., show weekly data by default)
    setActiveTab(weekly);
    updateData(myData, "weekly");
  }
}

useData();
