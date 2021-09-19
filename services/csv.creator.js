const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const got = require('got');
const ErrorHandler = require('../errors/ErrorHandler');
const { statusCodes } = require('../configs');

function createCsv() {
    const pathToFile = path.join(__dirname, '../public/users.csv');
    const csvWriter = createCsvWriter({
        path: pathToFile,
        header: [
            { id: 'id', title: 'ID' },
            { id: 'first_name', title: 'FIRST NAME' },
            { id: 'last_name', title: 'LAST NAME' },
            { id: 'email', title: 'EMAIL' }

        ]
    });
    (async () => {
        try {
            const responsePromise = await got('https://reqres.in/api/users');
            const resBody = JSON.parse(responsePromise.body);
            const users = resBody.data;
            if (!users.length) {
                throw new ErrorHandler(statusCodes.NO_CONTENT, 'No data');
            }
            csvWriter.writeRecords(users)
                .then(() => {
                    console.log('...Done');
                });
        } catch (error) {
            console.log(error.response.body);
        }
    })();
}

module.exports = createCsv;
