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
export const getFeed = async (xmlUrl) => {
    try {
        const response = await axios.get(xmlUrl);

        // Validate the response
        validateResponse(response);

        // Parse the response
        return parseXml(response);
    } catch (error) {
        return error;
    }
};