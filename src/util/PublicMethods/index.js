/* eslint-disable */
import Axios from 'axios'
Axios.defaults.withCredentials = true
const ToolClass = {
  Axios ({ success = () => { }, error = () => { }, api = { method: 'post', url: null }, context = null, opt = null, urlParams = null, code = 0, commit = null, hasOpt = false }) {
    Axios({
      method: api.method,
      url: api.url + `${urlParams === null ? '' : `/${urlParams}`}`,
      ...opt
    }).then((res) => {
      if (res.data.code - 0 === code - 0) {
        if (commit !== null) {
          let CommitData = { data: res.data.data }
          if (hasOpt) {
            CommitData.AxiosOpt = { ...opt }
          }
          context.commit(commit, { ...CommitData })
        }
        success(res)
      } else {
        error(res)
      }
    }).catch((res) => {
      error(res)
    })
  },
  CheckEmail (target) { // 校验邮箱格式
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return reg.test(target)
  },
  DateFormatYear (date = null, format = 'YY:MM:DD hh:mm:ss') { // 时间格式化
    if (date !== null) {
      date = new Date(date)
      let YY = date.getFullYear()
      let MM = date.getMonth() + 1
      let DD = date.getDate()
      let hh = date.getHours()
      let mm = date.getMinutes()
      let ss = date.getSeconds()
      if (format === 'YY:MM:DD') {
        return `${YY}-${MM > 9 ? MM : `0${MM}`}-${DD > 9 ? DD : `0${DD}`}`
      }
      if (format === 'hh:mm:ss') {
        return `${hh > 9 ? hh : `0${hh}`}:${mm > 9 ? mm : `0${mm}`}:${ss > 9 ? ss : `0${ss}`}`
      }
      return `${YY}-${MM > 9 ? MM : `0${MM}`}-${DD > 9 ? DD : `0${DD}`} ${hh > 9 ? hh : `0${hh}`}:${mm > 9 ? mm : `0${mm}`}:${ss > 9 ? ss : `0${ss}`}`
    } else {
      return ''
    }
  },
  CheckUrl (url) { // 校验url
    let reg = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
    return reg.test(url)
  }
}
export default ToolClass