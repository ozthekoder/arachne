import cheerio from 'cheerio';
import request from 'request-promise-native';

const transform = (body) => cheerio.load(body);

export const fetch = (url) => request({ url, transform });
