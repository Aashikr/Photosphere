import Errors from './errors'

export function send(res, data) {

    if (!res)
        return;

    if (!data)
        data = null;

    res.status(200)
        .send({
            error: Errors.None,
            data: data
        });

};

export function sendWithToken(res, user, token) {

    if (!res || !user || !token)
        return;

    res.setHeader('Token', token);
    res.status(200)
        .send({
            error: Errors.None,
            data: user
        });

};

export function sendError(res, errorCode) {

    if (!res || !errorCode)
        return;

    res.status(200)
        .send({
            error: errorCode,
            data: null
        });

};

export function socketSendLike(socket, storyId, likerName) {
    if (!socket)
        return;

    socket.volatile.emit('like', {
        storyId: storyId,
        name: likerName
    });
}
