let AWS = require('aws-sdk');
let lambda = new AWS.Lambda();

module.exports = async (event) => {
    return await lambda.getAccountSettings().promise() ;
};