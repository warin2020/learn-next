const isDev = process.env.NODE_ENV !== 'production';

export const domain = isDev ? 'http://localhost:3000' : 'none yet';
