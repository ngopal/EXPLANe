var tesseract = require('node-tesseract');
var _ = require('lodash');
 
// Recognize text of any language in any format
tesseract.process('/Users/nikhilgopal/Code/poster_variant_app/myApp/www/js/298297995.jpg', function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
        re = /rs\d+/gi;
	console.log('----MATCHES BELOW----');
        res = text.toLowerCase().match(re);
	ures = _.uniq(res);
        console.log(ures);
    }
});
