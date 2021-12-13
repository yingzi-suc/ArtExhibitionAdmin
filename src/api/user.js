import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/api/admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/admin/info',
    method: 'get',
    params: { token }
  })
}

// 退出
export function logout(data) {
  return request({
    url: '/api/admin/user/logout',
    method: 'post',
    data
  })
}

// 首页的展会总览
export function exOverview(){
  return request({
    url:'/api/admin/home/exhibitionoverview',
    method:'get'
  })
}

// 首页的艺术头条
export function artHeadlines(){
  return request({
    url:'/api/admin/home/artheadlines',
    method:'get'
  })
}

// 首页的城市展会分类统计
export function cityClassification(){
  return request({
    url:'/api/admin/home/cityclassification',
    method:'get'
  })
}

// 首页的交流中心
export function communicationCenter(){
  return request({
    url:'/api/admin/home/communicationcenter',
    method:'get'
  })
}