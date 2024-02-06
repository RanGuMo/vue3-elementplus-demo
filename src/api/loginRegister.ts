import axios from '@/utils/http'

// 注册接口
export function register(params: any) {
  return axios({
    url: '/api/v1/auth/register',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: params
  })
}

