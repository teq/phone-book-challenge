
module.exports = {

    ok: (fields = {}) => Object.assign({ status: 'ok' }, fields),

    error: (message) => { status: 'error', message }

};
