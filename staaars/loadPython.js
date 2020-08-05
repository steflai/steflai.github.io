$('#button').bind('click', function() {
            // below is the code that gets run afer the button get clicked
            // first we print to the console that the button was clicked
            console.log("button clicked!");


            // the above data will get appended to the URL as a query string
            // (but jquery does this formatting for us, we just need to pass a dictionary to $.get)

            // then we use ajax, to make a request to the server at the /generate route, passing dataToSend
            $.get('/generate', function(response) {
               // below is the code that runs when the python server route returns,
               // response is a variable which holds the response from the server (a string of text)
               // and which we can use in whatever way we want
               // ... first we take this response and print it to the console
               console.log(response);
               // and then we insert the response into the .output-wrapper element
               // (this also replaces whatever was in this element before)
               $('.output-wrapper').html(response);
            });

            return false;
        });
