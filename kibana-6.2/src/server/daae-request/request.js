import Joi from 'joi';

const URL_BACKEND = 'http://localhost:8080/';

const request = require('request');


export function daaeCreateElement(type, id, userIdAsCookieValue){
     /* /dataviewer/kibana/save/{type}/{realId}      */
    var options = {
        url: URL_BACKEND + "dataviewer/kibana/save/" + type + "/"+ id ,
        headers: {
          'Authorization': userIdAsCookieValue
        }
    };

    request.post(options, 
    (err, res, body) => {
          if (err) { return console.log(err); }
            console.log("res.statusCode===" + res.statusCode)
    });
}
/**
 * Return the object list id 
 * @param {*} type 
 * @param {*} userIdAsCookieValue 
 */
export function daaeListElement(type, userIdAsCookieValue, ){
    
    var options = {
        url: URL_BACKEND + "dataviewer/kibana/list/" + type ,
        headers: {
          'Authorization': userIdAsCookieValue
        }
    };
    return  new Promise  (function(resolve, reject) {
        request.get(options, (err,res,body)=> {
            if (err) { 
                console.log(err); 
                reject(err);
            }
            resolve(JSON.parse(body));
        });
    });
        
    
}