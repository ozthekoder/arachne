import cheerio from 'cheerio';
import request from 'request-promise-native';
import getURLs from 'get-urls';

const parsed = {};
request('https://www.planetdp.org/title/v-for-vendetta-dp51070')
  .then((body) => {
    const $ = cheerio.load(body);
    const anchors = $('a');
    const urls = anchors.each(function(i, el) {
      console.log(el.attribs.href);
    });
    //const urls = getURLs(body);
    //console.log(urls);
  })
  .catch((e) => {
    console.error(e);
  });
