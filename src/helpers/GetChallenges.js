function getChallengesData(total_challenges_submitted) {
  let duplicate_challenge_ids = [];
  let unique_challenge_ids = [];
  let challenges = [];

  // get all challenges ids with duplicates
  total_challenges_submitted.forEach(item => {
    // console.log('challenge :', challenge);
    duplicate_challenge_ids.push(item.challenge.program_id);
  });

  // get unique challenge ids
  unique_challenge_ids = [...new Set(duplicate_challenge_ids)];

  // get all unique challenges
  unique_challenge_ids.forEach(item => {
    // console.log('item :', item);
    let challenge = getChallenge(item, total_challenges_submitted);
    //   console.log('getChallenge(item) :', challenge );
    challenges.push(challenge);
  });

  console.log("duplicate_challenge_ids :", duplicate_challenge_ids);
  console.log("unique_challenge_ids :", unique_challenge_ids);
  console.log("challenges :", challenges);

  return challenges;
}

// Get challenge from unique_challenge id with no of submissions count
function getChallenge(challenge_id, total_challenges_submitted) {
  let returnObj = null;
  let no_of_submissions = 0;
  total_challenges_submitted.forEach(item => {
    if (item.challenge.program_id === challenge_id) {
      returnObj = item.challenge;
      no_of_submissions++;
      returnObj.createdAt = item.createdAt;
    }
  });
  //   console.log("no_of_submissions :", no_of_submissions);
  returnObj.no_of_submissions = no_of_submissions;
  return returnObj;
}

export { getChallengesData };
