import axios from 'axios'
import { ref } from 'vue'

// 获取首页 banner 轮播图

// 指向项目文件夹 public/json 
const json = ref('/json');
export const getBanners = () => {
    return axios.get(json.value + '/banner.json');
}
