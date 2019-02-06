export const getProfile = async (battletag) => {
  let platform = 'pc';
  let region = 'eu';
  let response = await fetch(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`);
  return response.json();
}
