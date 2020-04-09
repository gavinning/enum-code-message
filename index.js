const Enum = require('@4a/enum')

function Message(code, message) {
    return { code, message }
}

module.exports = Enum({
    OK: Message(0, 'ok'),
    empty: Message(),

    permissionDenied: Message(400000, 'Permission denied'),
    errorToken: Message(400001, 'Error token'),
    expiredToken: Message(400002, 'Expired token'),

    lossParameter: Message(400100, 'Loss parameter'),
    errorParameter: Message(400200, 'Error parameter'),

    serviceUpdating: Message(500100, 'Service updating'),
})
