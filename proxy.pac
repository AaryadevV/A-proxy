function FindProxyForURL(url, host) {

  // Set the threshold for website response time
  var threshold = 1000;

  // Function to check if the website is slow based on response time
  var isSlow = function() {
    var start = new Date().getTime();
    var res = (isResolvable(host) && shExpMatch(url, "http*")) ? 
              FindProxyForURL("http://fake-proxy-to-measure-response-time/",host) : 
              "DIRECT";
    var end = new Date().getTime();
    var responseTime = end - start;
    return (responseTime > threshold);
  };

  // Check if the website is slow
  if (isSlow()) {
    // Display a message before redirecting
    alert("The website is running slow. Redirecting to Google.com.");
    
    // Redirect traffic to Google.com
    return "PROXY google.com:80";
  } 

  // For other cases, forward traffic directly
  return "DIRECT";
}
