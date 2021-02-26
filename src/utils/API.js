import axios from "axios";
queryURL="https://randomuser.me/api/?nat=us&results=69&exc=location,login,registered,id,gender,phone,nat"

export default {
    allEmployees: function () {
        return axios.get(queryURL)
    }
}