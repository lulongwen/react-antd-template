// import qs from 'query-string';
// const URI = process.env.APP_URI;

// interface Config extends RequestInit {
//   token?: string,
//   data: object
// }

export const user = "lucy";

// export Config;
// function http(URL: string, {data, token, headers, ...customConfig}: Config) {
//   const config = {
//     method: 'GET',
//     headers: {
//       Authorization: token ? `Bearer ${token}` : '',
//       'Content-Type': data ? 'application/json' : ''
//     },
//     ...customConfig
//   }
//
//   // get参数放在 url里面，其他请求放在 body里面
//   if(config.method.toUpperCase() === 'GET') {
//     URL += `?${qs.stringify(data)}`
//   }
//   else {
//     config.body = JSON.stringify(data || {})
//   }
//
//   return window.fetch(URL, config)
//     .then(async res => {
//       if(res.status === 401) {
//         // await auth.logout()
//         window.location.href = '/login';
//         return Promise.reject({message: '请重新登录'})
//       }
//
//       const data = await res.json()
//
//       if(res.ok) return data
//       return Promise.reject(data)
//     })
//     .finally(() => {})
// }
//
// export default http
