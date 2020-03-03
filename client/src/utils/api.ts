const API_URL = "http://localhost:1337";
// const LOCAL_API_URL = "http://localhost:3000";

async function getPreviousTranslations() {
  try {
    const response = await fetch(`${API_URL}/api/translations`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

var requestOptions = {
  method: "GET",
  redirect: "follow"
};

async function getVideos() {
  try {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        method: "GET",
        redirect: "follow"
      }
    );
    console.log(response);
    // return response.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function deleteAllTranslations() {
  try {
    const response = await fetch(`${API_URL}/api/translations`, {
      method: "DELETE"
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

async function doTranslation(payload) {
  try {
    const response = await fetch(`${API_URL}/api/translations/translate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

async function saveTranslation(payload) {
  try {
    console.log("the payload to the api will be: " + payload);
    const response = await fetch(`${API_URL}/api/translations`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default {
  getPreviousTranslations,
  saveTranslation,
  doTranslation,
  deleteAllTranslations,
  getVideos
};
