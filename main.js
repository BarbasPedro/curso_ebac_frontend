document.addEventListener ('DOMContentLoaded', function () {
  const profileAvatar = document.querySelector('.profile-avatar');
  const profileName = document.querySelector('.profile-name');
  const profileUsername = document.querySelector('.profile-username');
  const reposQtt = document.querySelector('.reposQtt');
  const followersQtt = document.querySelector('.followers');
  const followingQtt = document.querySelector('.following');
  const htmlUrl = document.querySelector('.profile-link');

fetch('https://api.github.com/users/BarbasPedro')
  .then(function(res) {
    return res.json();
  })
  .then(function (json) {
    console.log(json)
    reposQtt.innerHTML = json.public_repos;
    profileAvatar.src = json.avatar_url;
    profileName.innerHTML = json.name;
    profileUsername.innerHTML = json.login;
    followersQtt.innerHTML = json.followers;
    followingQtt.innerHTML = json.following;
    htmlUrl.href = json.html_url;

  })

})
