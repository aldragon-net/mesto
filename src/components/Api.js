export default class Api {
  constructor ( {baseUrl, headers} ) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._profileEndpoint = this._baseUrl + '/users/me'
    this._cardsEndpoint = this._baseUrl + '/cards';
  }

  _getJSONOrError (endpoint, options) {
    return fetch(endpoint, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка запроса: ${res.status}`)
      })
      .catch((err) => {
          console.log('ERR: ' + err);
          return Promise.reject(`errff`);
        });
  }

  getProfileInfo () {
    return this._getJSONOrError(this._profileEndpoint, {method: 'GET', headers: this._headers})
  }

  updateProfileInfo ( {name, about }) {
    return this._getJSONOrError(
      this._profileEndpoint,
      {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({name: name, about: about})
      })
  }

  getInitialCards() {
    return this._getJSONOrError(this._cardsEndpoint, {method: 'GET', headers: this._headers})
  }

  createCard ( {name, link} ) {
    return this._getJSONOrError(
      this._cardsEndpoint,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({name: name, link: link})
      })
  }

}
