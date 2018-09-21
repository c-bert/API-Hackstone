
const INTERNATIONAL_SEARCH_URL = 'NONE';
const NATIONAL_SEARCH_URL = `https://newsapi.org/v2/everything?apiKey=${apiNationalKey}`;
const LOCAL_SEARCH_URL = 'NONE';

// STEP 1A - get international input request from the user--------------
// function watchInternationalSubmit() {
//   alert (`International Submit: watchInternationalSubmit`);
//   $('.international-news-search').submit(event => {
//     event.preventDefault();
//   alert (`watchInternationalSubmit`);  
//     //query is listening for the form that was being submitted
//     //const to listen for text input (getter)
//     const query = $(`#international-search-box`).val();
//     alert (`query ` + query);
//     // clear out the input (setter)
//     $(`#international-search-box`).val("");
//     getInternationalDataFromApi(query, displayInternationalSearchData);
//   });
// }

// STEP 1B - get national input request from the user----------------
function watchNationalSubmit() {
  // alert (`National Submit: watchNationalSubmit`);
    $('.national-news-search').submit(event => {
      event.preventDefault();
      //query is listening for the form that was being submitted
      //const to listen for text input (getter)
      const query = $(`national-search-box`).val();
      // clear out the input (setter)
      $(`national-search-box`).val("");
      getNationalDataFromApi(query, displayNationalSearchData);
    });
  }

// STEP 1C - get regional input request from the user----------------
// function watchLocalSubmit() {
//   alert (`Local Submit: watchLocalSubmit`);
//     $('.local-news-search').submit(event => {
//       event.preventDefault();
//       //query is listening for the form that was being submitted
//       //const to listen for text input (getter)
//       const query = $(`local-search-box`).val();
//       // clear out the input (setter)
//       $(`local-search-box`).val("");
//       getLocalDataFromApi(query, displayLocalSearchData);
//     });
//   }
  
// STEP 2A - using the input from the user (query) make the API call to get the JSON response
//callback is like chaining two functions together
// function getInternationalDataFromApi(searchTerm, callback) {
//   $.getJSON(url, function($(searchTerm)) {
//     console.log('It is done!', data)
//   });
// }

// STEP 2B - using the input from the user (query) make the API call to get the JSON response
//callback is like chaining two functions together
function getNationalDataFromApi(searchTerm, callback) {
  const query = {
    q: searchTerm
  }
  $.getJSON(NATIONAL_SEARCH_URL, query, function(data) {
    console.log('It is done!', data);
    
  });
}

//  function receiveResults(receivedApiData) {s
//   //show the json array received from the API call
//   console.log(receivedApiData);
  // if there are no results it will show an error
  // if (receivedApiData.pageInfo.totalResults == 0) {
  //   alert("Sorry, your search did not yield results!");
                // }
  //if there are results, call the displaySearchResults
//     else {
//       displaySearchResults(receivedApiData.items);
//                 }
//  };

//   // 
//    function receiveResults(receivedApiData) {
//     //show the json array received from the API call
//     console.log(receivedApiData);
//     // if there are no results it will show an error
//     if (receivedApiData.pageInfo.totalResults == 0) {
//       alert("Sorry, your search did not yield results!");
//                   }
//     //if there are results, call the displaySearchResults
//       else {
//         displaySearchResults(receivedApiData.items);
//                   }
// };

// // STEP 2C - using the input from the user (query) make the API call to get the JSON response
// //callback is like chaining two functions together
// function getDataFromApi(searchTerm, callback) {
//     const query = {
//       part: 'snippet',
//       thumbnails: 'set',
//       key: 'AIzaSyAx86qDk_oN4DUMo-zb19PKLDrUTZK-W40',
//       q: `${searchTerm} in:name`,
//       maxResults: 6,
//       type: 'video'
//     }
//     $.getJSON(LOCAL_SEARCH_URL, query, callback);
//   }
//   // 
//    function receiveResults(receivedApiData) {
//     //show the json array received from the API call
//     console.log(receivedApiData);
//     // if there are no results it will show an error
//     if (receivedApiData.pageInfo.totalResults == 0) {
//       alert("Sorry, your search did not yield results!");
//                   }
//     //if there are results, call the displaySearchResults
//       else {
//         displaySearchResults(receivedApiData.items);
//                   }
// };

// // STEP 3A - using the JSON response, populate the relevant part of your HTML with the variable inside the JSON
// function renderInternationalResult(result) {
//  console.log('result=' + result);
//   return `
//       <div class="col-4 international">
//         <div class="international-results"> <a href="https://www.youtube.com/watch?v=${result.id.videoId}"> <img src=${result.snippet.thumbnails.medium.url} alt=${result.snippet.title}/></a><h5>${result.snippet.title}</h5></div>
//       </div>
//   `;
// }

// // STEP 3B - using the JSON response, populate the relevant part of your HTML with the variable inside the JSON
// function renderNationalResult(result) {
//     console.log('result=' + result);
//      return `
//          <div class="col-4 national">
//            <div class="national-results"> <a href="https://www.youtube.com/watch?v=${result.id.videoId}"> <img src=${result.snippet.thumbnails.medium.url} alt=${result.snippet.title}/></a><h5>${result.snippet.title}</h5></div>
//          </div>
//      `;
//    }

// // STEP 3C - using the JSON response, populate the relevant part of your HTML with the variable inside the JSON
// function renderLocalResult(result) {
//  console.log('result=' + result);
//     return `
//         <div class="col-4 local">
//            <div class="local-results"> <a href="https://www.youtube.com/watch?v=${result.id.videoId}"> <img src=${result.snippet.thumbnails.medium.url} alt=${result.snippet.title}/></a><h5>${result.snippet.title}</h5></div>
//         </div>
//     `;
// }

// //STEP 4A -- take the data received and display it in the desired HTML format
// function displayInternationalSearchData(data, videosArray) {
//     //as soon as you receive some data, try console logging it before you run instructions
//     console.log(data);
//   const results = data.items.map((item, index) => renderResult(item));
//   $('#js-search-results').html(results);

//     //create an empty variable to store one LI for each one the results
//     let buildHtmlOutput = "";

//     $.each(videosArray, function (videosArrayKey, videosArrayValue) {
//         //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
//         buildHtmlOutput += "<li>";
//         buildHtmlOutput += "<p>" + videosArrayValue.snippet.title + "</p>"; //output vide title
//         buildHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>"; //taget blank is going to open the video in a new window
//         buildHtmlOutput += "<img src='" + videosArrayValue.snippet.thumbnails.high.url + "'/>"; //display video's thumbnail
//         buildHtmlOutput += "</a>";
//         buildHtmlOutput += "</li>";
//     });

//     //use the HTML output to show it in the index.html
//     $("#js-search-results ul").html(buildHtmlOutput);
// }

// //STEP 4B -- take the data received and display it in the desired HTML format
function displayNationalSearchData(data, videosArray) {
    //as soon as you receive some data, try console logging it before you run instructions
    console.log(data);
  const results = data.items.map((item, index) => renderResult(item));
  $('#js-search-results').html(results);
}
//     //create an empty variable to store one LI for each one the results
//     let buildHtmlOutput = "";

//     $.each(videosArray, function (videosArrayKey, videosArrayValue) {
//         //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
//         buildHtmlOutput += "<li>";
//         buildHtmlOutput += "<p>" + videosArrayValue.snippet.title + "</p>"; //output vide title
//         buildHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>"; //taget blank is going to open the video in a new window
//         buildHtmlOutput += "<img src='" + videosArrayValue.snippet.thumbnails.high.url + "'/>"; //display video's thumbnail
//         buildHtmlOutput += "</a>";
//         buildHtmlOutput += "</li>";
//     });

//     //use the HTML output to show it in the index.html
//     $("#js-search-results ul").html(buildHtmlOutput);
// }

// //STEP 4C -- take the data received and display it in the desired HTML format
// function displayLocalSearchData(data, videosArray) {
//     //as soon as you receive some data, try console logging it before you run instructions
//     console.log(data);
//   const results = data.items.map((item, index) => renderResult(item));
//   $('#js-search-results').html(results);

//     //create an empty variable to store one LI for each one the results
//     let buildHtmlOutput = "";

//     $.each(videosArray, function (videosArrayKey, videosArrayValue) {
//         //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
//         buildHtmlOutput += "<li>";
//         buildHtmlOutput += "<p>" + videosArrayValue.snippet.title + "</p>"; //output vide title
//         buildHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>"; //taget blank is going to open the video in a new window
//         buildHtmlOutput += "<img src='" + videosArrayValue.snippet.thumbnails.high.url + "'/>"; //display video's thumbnail
//         buildHtmlOutput += "</a>";
//         buildHtmlOutput += "</li>";
//     });

//     //use the HTML output to show it in the index.html
//     $("#js-search-results ul").html(buildHtmlOutput);
// }

// //--------------handle modal ----------------
// let modal = document.querySelector(".modal");
//     let trigger = document.querySelector(".trigger");
//     let closeButton = document.querySelector(".close-button");

//     function toggleModal() {
//         modal.classList.toggle("show-modal");
//     }

//     function windowOnClick(event) {
//         if (event.target === modal) {
//             toggleModal();
//         }
//     }

//     trigger.addEventListener("click", toggleModal);
//     closeButton.addEventListener("click", toggleModal);
//     window.addEventListener("click", windowOnClick);

 function init () {
  // watchInternationalSubmit();
  watchNationalSubmit();
  // watchLocalSubmit();
 }
 $(init);