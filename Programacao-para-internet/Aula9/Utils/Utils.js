class Utils{
    
    static jsonToMap = (json) => {
        const keys = Object.keys(json);
        const values = Object.values(json);
        let map = new Map();
        keys.forEach((value,index) => {
            map.set(value,values[index]);
        })

        return map;
    }
}

module.exports =  Utils;