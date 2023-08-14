export default class Api {
  constructor ( {baseUrl, endpoints, headers} ) {
    this._baseUrl = baseUrl;
    this._authorization = headers.authorization;
    this._contentType = headers['Content-Type'];
    this._profileEndpoint = this._baseUrl + endpoints.profile;
    this._cardsEndpoint = this._baseUrl + endpoints.cards;
    this._avatarEndpoint = this._baseUrl + endpoints.avatar;
  }

  _getResponseOrError (endpoint, options) {
    return fetch(endpoint, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка запроса: ${res.status}`)
      })
      .catch((err) => {
          console.log(err);
        });
  }

  getProfileInfo () {
    return this._getResponseOrError(
      this._profileEndpoint,
      {
        method: 'GET',
        headers: {authorization: this._authorization}
      }
    )
  }

  updateProfileInfo ( {name, about }) {
    return this._getResponseOrError(
      this._profileEndpoint,
      {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify({name: name, about: about})
      }
    )
  }

  changeAvatar ( {link} ) {
    return this._getResponseOrError(
      this._avatarEndpoint,
      {
        method: 'PATCH',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify({avatar: link})
      }
    )
  }

  getInitialCards() {
    return this._getResponseOrError(
      this._cardsEndpoint,
      {
        method: 'GET',
        headers: {authorization: this._authorization}
      }
    )
  }

  createCard ( {name, link} ) {
    return this._getResponseOrError(
      this._cardsEndpoint,
      {
        method: 'POST',
        headers: {
          authorization: this._authorization,
          'Content-Type': this._contentType
        },
        body: JSON.stringify({name: name, link: link})
      }
    )
  }

  deleteCard (card_id) {
    return this._getResponseOrError(
      this._cardsEndpoint + `/${card_id}`,
      {
        method: 'DELETE',
        headers: {authorization: this._authorization}
      }
    )
  }

  likeCard (card_id) {
    return this._getResponseOrError(
      this._cardsEndpoint + `/${card_id}` + '/likes',
      {
        method: 'PUT',
        headers: {authorization: this._authorization}
      }
    )
  }

  unlikeCard (card_id) {
    return this._getResponseOrError(
      this._cardsEndpoint + `/${card_id}` + '/likes',
      {
        method: 'DELETE',
        headers: {authorization: this._authorization}
      }
    )
  }
}
