const axios = require('axios');

const validateResponse = (response) => {
    return {'response': response};
}

const parseXml = (xml) => {
    return {'xml': xml};
}

/**
 * Make a request for the feed at the URL provided.
 */
export const getFeed = async function(xmlUrl) {
    try {
        console.log(`Trying to get feed ${xmlUrl}`)
        const response = await axios.get(xmlUrl);
        console.log(`Results: ${response}`)

        // Validate the response
        validateResponse(response);

        // Parse the response
        return parseXml(response);
    } catch (error) {
        console.log(`Error: ${error}`)
        return error;
    }
};