// const httpUrlDev = 'https://www.pauzr-backend.test';
// const wsUrlDev = 'ws://www.pauzr-backend.test';

const httpUrlProd = 'https://www.pauzr.com';
const wsUrlProd = 'ws://www.pauzr.com';

// const httpUrl = __DEV__ ? httpUrlDev : httpUrlProd;
// const wsUrl = __DEV__ ? wsUrlDev : wsUrlProd;

const httpUrl = httpUrlProd;
const wsUrl = wsUrlProd;

export { httpUrl, wsUrl };
