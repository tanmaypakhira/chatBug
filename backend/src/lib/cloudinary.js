import { v2 as cloudinary } from 'cloudinary';
import { ENV } from './env.js';

cloudinary.config({
    cloud_name: ENV.CLOUDAINARY_CLOUD_NAME,
    api_key: ENV.CLOUDAINARY_API_KEY,
    api_secret: ENV.CLOUDAINARY_API_SECRET,
});

export default cloudinary;