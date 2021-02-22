const ex = require('express')
const axios = require('axios')

const app = ex()

app.get('/', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(rs => {
            let ret = rs.data
            let r = []

            ret.map((v, k) => {
                let tmp = {} 

                // console.log("key: ", k)
                // console.log("value: ", v)
                
                let tmpValue = {...v}
                delete tmpValue.title

                tmpValue.keyOfArray = k

                tmp[v.title] =  tmpValue
                r.push(tmp)
            })
            res.json(r)
            
        })
        .catch(e => {
            res.json(e)
        })

})

app.listen(process.env.PORT || 3000)