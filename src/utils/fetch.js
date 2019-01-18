import wepy from 'wepy'

const BASE_URL_LOCAL = 'http://127.0.0.1:8888/api/public/v1/'
const BASE_URL_REMOTE = 'https://itjustfun.cn/api/public/v1/'
export default function fetch(url, options = {}) {
  if (typeof url === 'string') {
    options.url = url
  }
  if (typeof url === 'object' && arguments.length === 1) {
    options = url
  }
  options.type = options.type || 'remote'
  if (options.type === 'local') {
    options.url = BASE_URL_LOCAL + options.url
  } else {
    options.url = BASE_URL_REMOTE + options.url
  }
  return wepy.request({
    url: options.url,
    method: options.method || 'GET',
    data: options.data || {},
    dataType: options.dataType || 'json'
  })
}
