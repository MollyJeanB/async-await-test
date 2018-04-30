let AWS = require('aws-sdk');
let lambda = new AWS.Lambda();

module.exports.handler = async (event) => {
    return await lambda.getAccountSettings().promise() ;
};