const deleteObject = require('./deleteObject');
const storeItem = require('./storeitem');

function updateUser(user, fileName, callback) {
    deleteObject(fileName, user.email, (error) => {
        if(error) {
            callback(error, null);
        } else {
            storeItem(user, fileName, (error) => {
                if(error) {
                    callback(error, null);
                } else {
                    callback(null, {
                        message: 'User succesfully logged',
                        token: user.token
                    });
                }
            })
        }
    })
}

module.exports = updateUser;