const githubApi = 'https://api.github.com';
const authorizationHeader = {
	headers: {'Authorization': '216a742e53bded0685a89b3ea729516f80123e69'}
};

function search(event, username) {
	event.preventDefault();
	getUserData(username).then(data => setUserData(data));
}

function getUserData(username) {
	let response = fetch(`${githubApi}/users/${username}`);
	return response.then(data => { 
		console.log(data);
		return data.json();
	});
}
function getFollowers(url){
	let response = fetch(url);
	return response.then(data => data.json());
}

function setUserData(user) {
	document.getElementById("userImage").src = user["avatar_url"];
	document.getElementById("username").innerHTML = user["login"];
	getFollowers(user["followers_url"]).then(data => {
		data.forEach(element => {
			console.log(element["login"]);
			let newLi = document.createElement("li"); 
			newLi.innerHTML = element["login"];
			document.getElementById("follower").append(newLi);
		});
	});
	console.log(user["followers_url"]);
	
}

window.search = search;