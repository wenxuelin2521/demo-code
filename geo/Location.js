import axios from 'axios';
class Location {


    key = "1617b4fe13f901880f617c0e1ebb304b";

    locationApi = "https://restapi.amap.com/v3/ip"; // Ip定位

    geoCodeApi = "https://restapi.amap.com/v3/geocode/regeo"; // 逆地理编码



    constructor() { }

    async queryLocation() {
        const requestApi = `${this.locationApi}?key=${this.key}`;
        const { data } = await axios.get(requestApi);

        console.log('============获取经纬度');
        console.log(data);

        return "113.6770499,23.3809537"

    }

    async queryGeoCode(){
        const requestApi = `${this.geoCodeApi}?key=${this.key}`;
        const { data } = await axios.get(requestApi);
        console.log('============获取编码');
        console.log(data);
        return {
            city : '广州市',
            adcode : '440100'
        }
    }
}

export async function initLocation(){
    const locationObj = new Location();
    const { lat } = locationObj.queryLocation();
    const { }
    
}