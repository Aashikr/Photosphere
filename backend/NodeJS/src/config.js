const APP_NAME = 'photosphere'
const MONGO_URI = `mongodb://127.0.0.1:27017/${APP_NAME}`
const PORT = process.env.PORT || 3000
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const AWS_REGION = process.env.AWS_REGION

const Image = {
    BUCKET: 'thespherehouse',
    MAX_SIZE: 6000,
    THUMB_SIZE: 800,
    ORIG_FORMAT: 'jpeg',
    THUMB_FORMAT: 'jpeg',
    ORIG_NAME: 'original.jpg',
    THUMB_NAME: 'thumbnail.jpg'
}

export { APP_NAME, MONGO_URI, PORT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, Image }
