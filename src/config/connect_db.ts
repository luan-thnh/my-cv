import mongoose from 'mongoose';

export const connect = () => {
  mongoose
    .connect('mongodb+srv://cvSmile:cvSmile123@mycv.ynodbx7.mongodb.net/cv_db')
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not connected!!'));
};
