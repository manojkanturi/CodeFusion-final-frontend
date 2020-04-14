function getLoginDetails() {
  let username = sessionStorage.getItem("username");
  let full_name = sessionStorage.getItem("full_name");
  let isAdmin = sessionStorage.getItem("isAdmin");
  return { username, full_name, isAdmin };
}

function setLoginDetails(username, full_name, isAdmin) {
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("full_name", full_name);
  sessionStorage.setItem("isAdmin", isAdmin);
  // let expiredChallengeIds = {}
  // expiredChallengeIds.challenge_ids = []
  // sessionStorage.setItem("challenge_ids", JSON.stringify(expiredChallengeIds))
}

function removeLoginDetails() {
  sessionStorage.clear();
}

export { getLoginDetails, setLoginDetails, removeLoginDetails };
