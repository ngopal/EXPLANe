var tesseract = require('node-tesseract');
 
// Recognize text of any language in any format
tesseract.process('/Users/nikhilgopal/Code/poster_variant_app/myApp/www/js/tesseract_sample4.jpg', function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});
