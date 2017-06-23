function init() {
  gapi.client.setApiKey("AIzaSyD0mQQQdzI4o2DjRhcv2gpAhFDva4Z4uNU");
  gapi.client.load("youtube","v3", () => {
    console.log(gapi.client.youtube);
  })
}

(function () {
  document.getElementById('submit').addEventListener('click', function(e) {
  console.log('asd')
    e.preventDefault();

    var request = gapi.client.youtube.search.list({
         part: "snippet",
         type: "video",
         q: encodeURIComponent(document.getElementById("search").value).replace(/%20/g, "+"),
         maxResults: 3,
         order: "viewCount",
         publishedAfter: "2015-01-01T00:00:00Z"
    }); 

    request.execute(response => {
      response.result.items.forEach(function(element) {
        // console.log(element.id.videoId)
        // console.log(element.snippet.title)
        const results = document.getElementById('results')
        // results.append(element.id.videoId + " " + element.snippet.title + "<br>")
        const hOne = document.createElement('h1');
        hOne.textContent = element.snippet.title;
        const iframe =document.createElement('iframe')
        iframe.src="//www.youtube.com/embed/" + element.id.videoId;
        const box = document.createElement('div');
        box.appendChild(hOne);
        box.appendChild(iframe);
        results.appendChild(box)

});
    })
  })
})()