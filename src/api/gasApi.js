import axios from 'axios'

// 共通のヘッダーを設定したaxiosのインスタンス作成
const gasApi = axios.create({
  headers: { 'content-type': 'application/json' }  // JSON形式に変更
})


// リクエスト先のURLを変更する
gasApi.defaults.baseURL = 'https://script.google.com/macros/s/AKfycbzKZjTsk3t3KtGWaacfVJ4rzBzbTUGHnjlbzcktub1vNjSl8eENFh7mHvsZ-DQ2IuuyNQ/exec'

// response共通処理
// errorが含まれていたらrejectする
gasApi.interceptors.response.use(res => {
  if (res.data.error) {
    return Promise.reject(res.data.error)
  }
  return Promise.resolve(res)
}, err => {
  return Promise.reject(err)
})

/**
 * APIのURLを設定します
 * @param {String} url
 */
//let url = ''
const setUrl = url => {
  gasApi.defaults.baseURL = url
}

/**
 * authTokenを設定します
 * @param {String} token
 */
let authToken = ''
const setAuthToken = token => {
  authToken = token
}

/**
 * 指定年月のデータを取得します
 * @param {String} yearMonth
 * @returns {Promise}
 */
const fetch = yearMonth => {
  return gasApi.post('', {
    method: 'GET',
    authToken,
    data: {  // params から data に変更
      yearMonth
    }
  })
}

const add = item => {
  return gasApi.post('', {
    method: 'POST',
    authToken,
    data: {  // params から data に変更
      item
    }
  })
}

const $delete = (yearMonth, id) => {
  return gasApi.post('', {
    method: 'DELETE',
    authToken,
    data: {  // params から data に変更
      yearMonth,
      id
    }
  })
}

const update = (beforeYM, item) => {
  return gasApi.post('', {
    method: 'PUT',
    authToken,
    data: {  // params から data に変更
      beforeYM,
      item
    }
  })
}

export default {
  setUrl,
  setAuthToken,
  fetch,
  add,
  delete: $delete,
  update
}