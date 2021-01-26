export default {
    /**
     * @description 格式化时间
     * @param {Date}  date 时间
     */
    formatDate_(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
}