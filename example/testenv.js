require('dotenv').config();

const objFor = async (obj, depth, callback) => {
    const entries = Object.entries(obj);
    for (i = entries.length - 1; i >= 0; i--) {
        let tup = entries[i];
        if (typeof obj[1] === 'object' && !Array.isArray(obj)) {
            await objFor(obj, i, callback)
        }
        callback(tup, i);
        if (!!depth && depth === i) {
            return;
        }
    }
};

const log = (x) => { console.log(x); }

objFor(process.env, 2, log);

/*
app.get('/', (req, res) => {
    console.log(req)
    objFor(req);
    return bot._verify(req, res)
  })
  
  app.post('/', (req, res) => {
    bot._handleMessage(req.body)
    res.end(JSON.stringify({status: 'ok'}))
  })
  
  http.createServer(app).listen(3000)
*/
  
module.exports = { objFor, log, }