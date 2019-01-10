
function getHNData(url,itm){
	return fetch(url)
	.then(response => response.json())
	.then(data => {
		if(itm=="Ask"){
			console.log(itm);
			document.getElementById("AskData").value = JSON.stringify(data);}
		else if(itm=="Job"){
			console.log(itm);
		document.getElementById("JobData").value = JSON.stringify(data);}
		else if(itm=="Comment"){
			console.log(itm);
		document.getElementById("CommentData").value  = JSON.stringify(data);}
		else if(itm=="Story"){
			console.log(itm);
		document.getElementById("StoryData").value   = JSON.stringify(data);}
		else if(itm=="Poll"){
			console.log(itm);
		document.getElementById("PollData").value  = JSON.stringify(data);}
		else if(itm=="Pollpt"){
			console.log(itm);
			document.getElementById("PollptData").value  = JSON.stringify(data);// Prints result from `response.json()` in getRequest
	}
	})
	.catch(error => console.error(error))
}

function getAskData(){
	  var item = "Ask";
		var Askurl = 'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty';
		return getHNData(Askurl,item);
}

function getJobData(){
	var item = "Job";
	var Joburl = 'https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty';
	return getHNData(Joburl,item);

}

function getCommentData(){
	var item = "Comment";
	Commenturl = 'https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty';
	return getHNData(Commenturl,item);
}

function getStoryData(){
	var item = "Story";
	Storyurl ='https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty';
	return getHNData(Storyurl,item);
}

function getPollData(){
	var item = "Poll";
	Pollurl ='https://hacker-news.firebaseio.com/v0/item/126809.json?print=pretty';
	return getHNData(Pollurl,item);
}

function getPollptData(){
	var item = "Pollpt";
	Pollpturl ='https://hacker-news.firebaseio.com/v0/item/160705.json?print=pretty';
	return getHNData(Pollpturl,item);
}


window.onload = function(){
	
	getStoryData().then(function(){
		var data = JSON.parse(document.getElementById("StoryData").value);
		document.getElementById("strauth").innerHTML = data.by;
		document.getElementById("stryTitle").innerHTML = data.title;
		document.getElementById("stryscre").innerHTML = data.score;
		document.getElementById("strytype").innerHTML = data.type;
		document.getElementById("strytime").innerHTML = data.time;
		document.getElementById("strURL").innerHTML = data.url;
		document.getElementById("strycmts").innerHTML = data.descendants;
	});
	getAskData().then(function(){
		var data = JSON.parse(document.getElementById("AskData").value);
		document.getElementById("askauth").innerHTML = data.by;
		document.getElementById("askTitle").innerHTML = data.title;
		document.getElementById("askscre").innerHTML = data.score;
		document.getElementById("asktype").innerHTML = data.type;
		document.getElementById("asktime").innerHTML = data.time;
		document.getElementById("askTxt").innerHTML = data.text;
		document.getElementById("askcmts").innerHTML = data.descendants;
	});
	getJobData().then(function(){
		var data = JSON.parse(document.getElementById("JobData").value);
		document.getElementById("jobauth").innerHTML = data.by;
		document.getElementById("jobTitle").innerHTML = data.title;
		document.getElementById("jobscre").innerHTML = data.score;
		document.getElementById("jobtype").innerHTML = data.type;
		document.getElementById("jobtime").innerHTML = data.time;
		document.getElementById("jobTxt").innerHTML = data.text;
		
	});
	getCommentData().then(function(){
		var data = JSON.parse(document.getElementById("CommentData").value);
		document.getElementById("cmtauth").innerHTML = data.by;
		document.getElementById("cmtprnt").innerHTML = data.parent;
		document.getElementById("cmttype").innerHTML = data.type;
		document.getElementById("cmttime").innerHTML = data.time;
		document.getElementById("cmtTxt").innerHTML = data.text;
		document.getElementById("cmtcmts").innerHTML = data.kids.length;
	});
	getPollData().then(function(){
		var data = JSON.parse(document.getElementById("PollData").value);
		
		document.getElementById("pollauth").innerHTML = data.by;
		document.getElementById("pollpt").innerHTML = data.parts;
		document.getElementById("polltype").innerHTML = data.type;
		document.getElementById("polltime").innerHTML = data.time;
		document.getElementById("pollscre").innerHTML = data.score;
		document.getElementById("pollTitle").innerHTML = data.title;
		document.getElementById("pollcmts").innerHTML = data.kids.length;
	});
	getPollptData().then(function(){
		var data = JSON.parse(document.getElementById("PollptData").value);
		console.log(data);
		document.getElementById("pollptauth").innerHTML = data.by;
		document.getElementById("pollptpoll").innerHTML = data.poll;
		document.getElementById("pollpttype").innerHTML = data.type;
		document.getElementById("pollpttime").innerHTML = data.time;
		document.getElementById("pollptscre").innerHTML = data.score;
		document.getElementById('loading').style.visibility = 'hidden';
		
		document.getElementById('datacnt').classList.add('show');
		document.getElementById('datacnt').style.visibility = 'visible';
	});
	
	
}

