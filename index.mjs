import { fetch } from './fetcher';

fetch('https://www.planetdp.org/title/v-for-vendetta-dp51070')
  .then(($) => {
    let urls = [];

    $('a').each(function(i, el) {
      urls.push(el.attribs.href);
    });

    urls = urls.filter((a) => !/^#/.test(a)).filter((a) => /^\//.test(a));

    console.log(JSON.stringify(urls, null, 2));
  })
  .catch((e) => {
    console.error(e);
  });
