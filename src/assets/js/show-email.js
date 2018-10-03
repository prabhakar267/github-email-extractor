const API_URL = 'https://github-email-id.herokuapp.com/';
const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const $query = (selector, ctx = document) => ctx.querySelector(selector);
const isEmail = str => reEmail.test(str);
const template = email => `
<li itemprop="email" aria-label="Email" class="vcard-detail pt-1 css-truncate css-truncate-target">
  <svg class="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
    <path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path>
  </svg>
  <a class="u-email" href="mailto:${email}">${email}</a>
</li>`;

(async function () {
  const vCard = $query('.vcard-details');
  if (!vCard || vCard.querySelector('li[itemprop="email"]')) return;
  const username = $query('.vcard-names .vcard-username').textContent.trim();
  const resp = await fetch(`${API_URL}/${username}`);
  const email = await resp.text();
  if (!isEmail(email)) return;
  vCard.innerHTML += template(email);
}());
