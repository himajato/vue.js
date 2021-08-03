import BaseApiConfig from "./BaseApiConfig";

export default class BaseApi{
    constructor(){
        this.controller = null
    }
    /**
     * Lấy tất cả dữ liệu
     * created by: NHNGHIA (02/08/2021)
     */
    getAll() {
        return BaseApiConfig.get(`${this.controller}`);
    }
    /**
     * Lấy dữ liệu theo id
     * @param {string} id 
     * @returns dữ liệu theo theo id
     * created by: NHNGHIA (02/08/2021)
     */
    getById(id){
        return BaseApiConfig.get(`${this.controller}/${id}`)
    }
    
    /**
     * Update dữ liệu theo id
     * @param {string} id 
     * @returns dữ liệu được cập nhật
     * created by: NHNGHIA (02/08/2021)
     */
    updateById(id, body) {
        return BaseApiConfig.get(`${this.controller}/${id}`, body)
    }

    /**
     * Xóa dữ liệu theo mã
     * @param {string} id 
     * @returns dữ liệu bị xóa
     * created by: NHNGHIA (02/08/2021)
     */
    deleteById(id){
        return BaseApiConfig.delete(`${this.controller}/${id}`)
    }
}