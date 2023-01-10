import axios from 'axios'
import { ref } from 'vue'

// 获取首页 banner 轮播图

// 指向当前项目文件夹 public/json 
const json = ref('/json');
export const getBanners = () => {
    return axios.get(`${json.value}/banner.json`);
}

// Web Api 请求:  https://localhost:7296/api/Image/GetImages
const http = ref('https://localhost:7296/api');
export const getBanners2 = () => {
    return axios.get(`${http.value}/Image/GetImages`);
}

// 被代理后的请求地址
const proxyHttp = ref('/api');
export const getBanners3 = () => {
    return axios.get(`${proxyHttp.value}/Image/GetImages`);
}

// 被代理后的请求地址
export const getFlowers = () => {
    return axios.get(`${proxyHttp.value}/Flower/GetFlowers`);
}

