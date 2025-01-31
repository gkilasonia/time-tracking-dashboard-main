const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const workHours = document.getElementById("work-hours");
const workPerPeriod = document.getElementById("work-per-period");
const playHours = document.getElementById("play-hours");
const playPerPeriod = document.getElementById("play-per-period");
const studyHours = document.getElementById("study-hours");
const studyPerPeriod = document.getElementById("study-per-period");
const exerciseHours = document.getElementById("exercise-hours");
const exercisePerPeriod = document.getElementById("exercise-per-period");
const socialHours = document.getElementById("social-hours");
const socialPerPeriod = document.getElementById("social-per-period");
const selfCareHours = document.getElementById("self-care-hours");
const selfCarePerPeriod = document.getElementById("self-care-per-period");
const workThreeDots = document.getElementById("work-three-dots");
const playThreeDots = document.getElementById("play-three-dots");
const studyThreeDots = document.getElementById("study-three-dots");
const exerciseThreeDots = document.getElementById("exercise-three-dots");
const socialThreeDots = document.getElementById("social-three-dots");
const selfCareThreeDots = document.getElementById("self-care-three-dots");

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

async function useData() {
  const myData = await fetchData();
  if (myData) {
    daily.addEventListener("click", function () {
      daily.style.color = "hsl(0, 0%, 100%)";
      weekly.style.color = "hsl(235, 45%, 61%)";
      monthly.style.color = "hsl(235, 45%, 61%)";
      workHours.textContent = `${myData[0].timeframes.daily.current}hrs`;
      workPerPeriod.textContent = `Last Week - ${myData[0].timeframes.daily.previous}hrs`;
      playHours.textContent = `${myData[1].timeframes.daily.current}hrs`;
      playPerPeriod.textContent = `Last Week - ${myData[1].timeframes.daily.previous}hrs`;
      studyHours.textContent = `${myData[2].timeframes.daily.current}hrs`;
      studyPerPeriod.textContent = `Last Week - ${myData[2].timeframes.daily.previous}hrs`;
      exerciseHours.textContent = `${myData[3].timeframes.daily.current}hrs`;
      exercisePerPeriod.textContent = `Last Week - ${myData[3].timeframes.daily.previous}hrs`;
      socialHours.textContent = `${myData[4].timeframes.daily.current}hrs`;
      socialPerPeriod.textContent = `Last Week - ${myData[4].timeframes.daily.previous}hrs`;
      selfCareHours.textContent = `${myData[5].timeframes.daily.current}hrs`;
      selfCarePerPeriod.textContent = `Last Week - ${myData[5].timeframes.daily.previous}hrs`;
    });

    weekly.addEventListener("click", function () {
      daily.style.color = "hsl(235, 45%, 61%)";
      weekly.style.color = "hsl(0, 0%, 100%)";
      monthly.style.color = "hsl(235, 45%, 61%)";
      workHours.textContent = `${myData[0].timeframes.weekly.current}hrs`;
      workPerPeriod.textContent = `Last Week - ${myData[0].timeframes.weekly.previous}hrs`;
      playHours.textContent = `${myData[1].timeframes.weekly.current}hrs`;
      playPerPeriod.textContent = `Last Week - ${myData[1].timeframes.weekly.previous}hrs`;
      studyHours.textContent = `${myData[2].timeframes.weekly.current}hrs`;
      studyPerPeriod.textContent = `Last Week - ${myData[2].timeframes.weekly.previous}hrs`;
      exerciseHours.textContent = `${myData[3].timeframes.weekly.current}hrs`;
      exercisePerPeriod.textContent = `Last Week - ${myData[3].timeframes.weekly.previous}hrs`;
      socialHours.textContent = `${myData[4].timeframes.weekly.current}hrs`;
      socialPerPeriod.textContent = `Last Week - ${myData[4].timeframes.weekly.previous}hrs`;
      selfCareHours.textContent = `${myData[5].timeframes.weekly.current}hrs`;
      selfCarePerPeriod.textContent = `Last Week - ${myData[5].timeframes.weekly.previous}hrs`;
    });

    monthly.addEventListener("click", function () {
      daily.style.color = "hsl(235, 45%, 61%)";
      weekly.style.color = "hsl(235, 45%, 61%)";
      monthly.style.color = "hsl(0, 0%, 100%)";
      workHours.textContent = `${myData[0].timeframes.monthly.current}hrs`;
      workPerPeriod.textContent = `Last Week - ${myData[0].timeframes.monthly.previous}hrs`;
      playHours.textContent = `${myData[1].timeframes.monthly.current}hrs`;
      playPerPeriod.textContent = `Last Week - ${myData[1].timeframes.monthly.previous}hrs`;
      studyHours.textContent = `${myData[2].timeframes.monthly.current}hrs`;
      studyPerPeriod.textContent = `Last Week - ${myData[2].timeframes.monthly.previous}hrs`;
      exerciseHours.textContent = `${myData[3].timeframes.monthly.current}hrs`;
      exercisePerPeriod.textContent = `Last Week - ${myData[3].timeframes.monthly.previous}hrs`;
      socialHours.textContent = `${myData[4].timeframes.monthly.current}hrs`;
      socialPerPeriod.textContent = `Last Week - ${myData[4].timeframes.monthly.previous}hrs`;
      selfCareHours.textContent = `${myData[5].timeframes.monthly.current}hrs`;
      selfCarePerPeriod.textContent = `Last Week - ${myData[5].timeframes.monthly.previous}hrs`;
    });
  }
}

useData();

workThreeDots.addEventListener("mouseover", function () {
  workThreeDots.src = "./images/icon-ellipsis.png";
});

workThreeDots.addEventListener("mouseout", function () {
  workThreeDots.src = "./images/icon-ellipsis.svg";
});

playThreeDots.addEventListener("mouseover", function () {
  playThreeDots.src = "./images/icon-ellipsis.png";
});

playThreeDots.addEventListener("mouseout", function () {
  playThreeDots.src = "./images/icon-ellipsis.svg";
});

studyThreeDots.addEventListener("mouseover", function () {
  studyThreeDots.src = "./images/icon-ellipsis.png";
});

studyThreeDots.addEventListener("mouseout", function () {
  studyThreeDots.src = "./images/icon-ellipsis.svg";
});

exerciseThreeDots.addEventListener("mouseover", function () {
  exerciseThreeDots.src = "./images/icon-ellipsis.png";
});

exerciseThreeDots.addEventListener("mouseout", function () {
  exerciseThreeDots.src = "./images/icon-ellipsis.svg";
});

socialThreeDots.addEventListener("mouseover", function () {
  socialThreeDots.src = "./images/icon-ellipsis.png";
});

socialThreeDots.addEventListener("mouseout", function () {
  socialThreeDots.src = "./images/icon-ellipsis.svg";
});

selfCareThreeDots.addEventListener("mouseover", function () {
  selfCareThreeDots.src = "./images/icon-ellipsis.png";
});

selfCareThreeDots.addEventListener("mouseout", function () {
  selfCareThreeDots.src = "./images/icon-ellipsis.svg";
});
