function init() {
  gapi.client.setApiKey("AIzaSyD0mQQQdzI4o2DjRhcv2gpAhFDva4Z4uNU");
  gapi.client.load("youtube","v3", () => {
    // console.log(gapi.client.youtube)
  })
}

(function () {
  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    const results = document.getElementById('results');
    
    while(results.hasChildNodes()) results.removeChild(results.firstChild)

    var request = gapi.client.youtube.search.list({
         part: "snippet",
         type: "video",
         q: document.getElementById("search").value,
        //  q: encodeURIComponent(document.getElementById("search").value).replace(/%20/g, "+"),
         maxResults: 5,
         order: "relevance",
        //  publishedAfter: "2015-01-01T00:00:00Z"
    }); 

    request.execute(response => {
      // console.log(JSON.stringify(response.result))
      response.result.items.forEach(function(element) {
        // const hOne = document.createElement('h3');
        // hOne.textContent = element.snippet.title;
        const iframe =document.createElement('iframe')
        iframe.src="//www.youtube.com/embed/" + element.id.videoId;
        // console.log(iframe.src)
        const box = document.createElement('div');
        // box.appendChild(hOne);
        box.appendChild(iframe);
        results.appendChild(box)

});
    })
  })
})()