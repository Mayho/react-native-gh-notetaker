var api = {
  getBio(username){
    username = username.toLowerCase();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url);
  },
  getRepos(username){
    username = username.toLowerCase();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url);
  },
  getNotes(username){
    username = username.toLowerCase();
    var url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
    return fetch(url);
  },
  addNote(username, note){
    username = username.toLowerCase();
    var url = `https://native-gh-notetaker.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    });
  }
};

module.exports = api;