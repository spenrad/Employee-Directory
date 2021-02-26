import axios from "axios";

export default {
    allEmployees: function () {
        return axios.get("https://randomuser.me/api/?nat=us&results=69&exc=location,login,registered,id,gender,phone,nat")
    }
}