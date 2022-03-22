const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')

app.use(express.json());
app.use(cors())


//Routers
const reviewRouter = require('./routes/Reviews')
app.use('/reviews', reviewRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log(`Server is fired up on port 3001 🚀`)
    })
})
