function FindProxyForURL(url, host) {

  // Set the threshold for website response time
  var threshold = 1000;

  // Extract the IP address of the requested website
  var ipAddress = dnsResolve(host);

  // Check if the website is slow based on response time
  var isSlow = function() {
    var start = new Date().getTime();
    var res = (isResolvable(host) && shExpMatch(url, "http*")) ? 
              FindProxyForURL("http://fake-proxy-to-measure-response-time/", host) : 
              "DIRECT";
    var end = new Date().getTime();
    var responseTime = end - start;
    return (responseTime > threshold);
  };

  // Route traffic through the proxy if the website is slow
  if (isSlow()) {
    return "PROXY <your-proxy-address>:<your-proxy-port>";
  } 

  // For other cases, forward traffic directly
  return "DIRECT";
}
