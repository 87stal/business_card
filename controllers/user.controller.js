const path = require('path');
const { statusCodes } = require('../configs');

const getAllUsers = (req, res, next) => {
    try {
        res.status(statusCodes.OK).sendFile(path.join(__dirname, '../index.html'));
    } catch (e) {
        next(e);
    }
};

module.exports = { getAllUsers };
