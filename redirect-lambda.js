function handler(event) {
    var request = event.request;
    var uri = `${request.uri}`;

    uri=uri.replace("/docs/", "/industrial-iot-open-source/")
    uri=uri.replace("CODE_OF_CONDUCT", "index");
    uri=uri.replace("CONTRIBUTING", "index");
    uri=uri.replace("CHANGELOG", "index");
    uri=uri.replace("docker-images", "index");

    console.log (uri);
    
    if(uri.startsWith("/")) {
        uri=`https://developer.siemens.com${uri}`;
    } else {
        uri="https://developer.siemens.com/industrial-iot-open-source/index.html";
    }
    
    if (uri==="https://developer.siemens.com/") {
        uri="https://developer.siemens.com/industrial-iot-open-source/index.html";
    }
    
    // match any .md at the end of URI and replace with .html
    uri=uri.replace(/\.md$/, '\.html');
   
    var response = {
        statusCode: 302,
        statusDescription: 'Found',
        headers: {
            'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' },
            'location': { value:  uri}
        }
    };
    
    return response;
 }