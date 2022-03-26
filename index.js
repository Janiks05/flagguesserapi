const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.get("/", (req, res) => {
    console.log(`Server running on Port ${PORT}`)
})

const flags = [
    {
        flag: "https://www.worldometers.info/img/flags/af-flag.gif",
        name: "Afghanistan"
    },
    {
        flag: "https://www.worldometers.info/img/flags/al-flag.gif",
        name: "Albania"
    }, {
        flag: "https://www.worldometers.info/img/flags/ag-flag.gif",
        name: "Algeria"
    }, {
        flag: "https://www.worldometers.info/img/flags/an-flag.gif",
        name: "Andorra"
    }, {
        flag: "https://www.worldometers.info/img/flags/ao-flag.gif",
        name: "Angola"
    }, {
        flag: "https://www.worldometers.info/img/flags/ac-flag.gif",
        name: "Antigua and Barbuda"
    }, {
        flag: "https://www.worldometers.info/img/flags/ar-flag.gif",
        name: "Argentina"
    }, {
        flag: "https://www.worldometers.info/img/flags/am-flag.gif",
        name: "Armenia"
    }, {
        flag: "https://www.worldometers.info/img/flags/as-flag.gif",
        name: "Australia"
    }, {
        flag: "https://www.worldometers.info/img/flags/au-flag.gif",
        name: "Austria"
    }, {
        flag: "https://www.worldometers.info/img/flags/aj-flag.gif",
        name: "Azerbaijan"
    }, {
        flag: "https://www.worldometers.info/img/flags/bf-flag.gif",
        name: "Bahamas"
    }, {
        flag: "https://www.worldometers.info/img/flags/ba-flag.gif",
        name: "Bahrain"
    }, {
        flag: "https://www.worldometers.info/img/flags/bg-flag.gif",
        name: "Bangladesh"
    }, {
        flag: "https://www.worldometers.info/img/flags/bb-flag.gif",
        name: "Barbados"
    }, {
        flag: "https://www.worldometers.info/img/flags/bo-flag.gif",
        name: "Belarus"
    }, {
        flag: "https://www.worldometers.info/img/flags/be-flag.gif",
        name: "Belgium"
    }, {
        flag: "https://www.worldometers.info/img/flags/bh-flag.gif",
        name: "Belize"
    }, {
        flag: "https://www.worldometers.info/img/flags/bn-flag.gif",
        name: "Benin"
    }, {
        flag: "https://www.worldometers.info/img/flags/bt-flag.gif",
        name: "Bhutan"
    }, {
        flag: "https://www.worldometers.info/img/flags/bl-flag.gif",
        name: "Bolivia"
    }, {
        flag: "https://www.worldometers.info/img/flags/bk-flag.gif",
        name: "Bosnia and Herzegovina"
    }, {
        flag: "https://www.worldometers.info/img/flags/bc-flag.gif",
        name: "Botswana"
    }, {
        flag: "https://www.worldometers.info/img/flags/bx-flag.gif",
        name: "Brunei"
    }, {
        flag: "https://www.worldometers.info/img/flags/bu-flag.gif",
        name: "Bulgaria"
    }, {
        flag: "https://www.worldometers.info/img/flags/uv-flag.gif",
        name: "Burkina Faso"
    }, {
        flag: "https://www.worldometers.info/img/flags/by-flag.gif",
        name: "Burundi"
    }, {
        flag: "https://www.worldometers.info/img/flags/cv-flag.gif",
        name: "Capo Verde"
    }, {
        flag: "https://www.worldometers.info/img/flags/ca-flag.gif",
        name: "Canada"
    }, {
        flag: "https://www.worldometers.info/img/flags/ch-flag.gif",
        name: "China"
    }, {
        flag: "https://www.worldometers.info/img/flags/ck-flag.gif",
        name: "Cook Islands"
    }, {
        flag: "https://www.worldometers.info/img/flags/cl-flag.gif",
        name: "Chile"
    }, {
        flag: "https://www.worldometers.info/img/flags/cm-flag.gif",
        name: "Cameroon"
    }, {
        flag: "https://www.worldometers.info/img/flags/cn-flag.gif",
        name: "Comoros"
    }, {
        flag: "https://www.worldometers.info/img/flags/co-flag.gif",
        name: "Colombia"
    }, {
        flag: "https://www.worldometers.info/img/flags/cr-flag.gif",
        name: "Costa Rica"
    }, {
        flag: "https://www.worldometers.info/img/flags/cu-flag.gif",
        name: "Cuba"
    }, {
        flag: "https://www.worldometers.info/img/flags/cy-flag.gif",
        name: "Cyprus"
    }, {
        flag: "https://www.worldometers.info/img/flags/ez-flag.gif",
        name: "Czechia"
    }, {
        flag: "https://www.worldometers.info/img/flags/de-flag.gif",
        name: "Germany"
    },
]
const easyFlags = [
    {
        flag: "https://www.worldometers.info/img/flags/gm-flag.gif",
        name: "Germany"
    }, {
        flag: "https://www.worldometers.info/img/flags/ez-flag.gif",
        name: "Czechia"
    }, {
        flag: "https://www.worldometers.info/img/flags/cy-flag.gif",
        name: "Cyprus"
    }, {
        flag: "https://www.worldometers.info/img/flags/co-flag.gif",
        name: "Colombia"
    }, {
        flag: "https://www.worldometers.info/img/flags/ch-flag.gif",
        name: "China"
    }, {
        flag: "https://www.worldometers.info/img/flags/ca-flag.gif",
        name: "Canada"
    }, {
        flag: "https://www.worldometers.info/img/flags/bu-flag.gif",
        name: "Bulgaria"
    }, {
        flag: "https://www.worldometers.info/img/flags/be-flag.gif",
        name: "Belgium"
    }, {
        flag: "https://www.worldometers.info/img/flags/au-flag.gif",
        name: "Austria"
    }, {
        flag: "https://www.worldometers.info/img/flags/as-flag.gif",
        name: "Australia"
    }, {
        flag: "https://www.worldometers.info/img/flags/ar-flag.gif",
        name: "Argentina"
    }, {
        flag: "https://www.worldometers.info/img/flags/al-flag.gif",
        name: "Albania"
    }, {
        flag: "https://www.worldometers.info/img/flags/hr-flag.gif",
        name: "Croatia"
    }, {
        flag: "https://www.worldometers.info/img/flags/da-flag.gif",
        name: "Denmark"
    }, {
        flag: "https://www.worldometers.info/img/flags/ec-flag.gif",
        name: "Ecuador"
    }, {
        flag: "https://www.worldometers.info/img/flags/eg-flag.gif",
        name: "Egypt"
    }, {
        flag: "https://www.worldometers.info/img/flags/fi-flag.gif",
        name: "Finland"
    }, {
        flag: "https://www.worldometers.info/img/flags/fr-flag.gif",
        name: "France"
    }, {
        flag: "https://www.worldometers.info/img/flags/gr-flag.gif",
        name: "Greece"
    }, {
        flag: "https://www.worldometers.info/img/flags/hu-flag.gif",
        name: "Hungary"
    }, {
        flag: "https://www.worldometers.info/img/flags/ic-flag.gif",
        name: "Iceland"
    }, {
        flag: "https://www.worldometers.info/img/flags/in-flag.gif",
        name: "India"
    }, {
        flag: "https://www.worldometers.info/img/flags/ei-flag.gif",
        name: "Ireland"
    }, {
        flag: "https://www.worldometers.info/img/flags/is-flag.gif",
        name: "Israel"
    }, {
        flag: "https://www.worldometers.info/img/flags/it-flag.gif",
        name: "Italy"
    }, {
        flag: "https://www.worldometers.info/img/flags/ja-flag.gif",
        name: "Japan"
    }, {
        flag: "https://www.worldometers.info/img/flags/lg-flag.gif",
        name: "Latvia"
    }, {
        flag: "https://www.worldometers.info/img/flags/lu-flag.gif",
        name: "Luxembourg"
    }, {
        flag: "https://www.worldometers.info/img/flags/mx-flag.gif",
        name: "Mexico"
    }, {
        flag: "https://www.worldometers.info/img/flags/np-flag.gif",
        name: "Nepal"
    }, {
        flag: "https://www.worldometers.info/img/flags/no-flag.gif",
        name: "Norway"
    }, {
        flag: "https://www.worldometers.info/img/flags/pm-flag.gif",
        name: "Panama"
    }, {
        flag: "https://www.worldometers.info/img/flags/pl-flag.gif",
        name: "Poland"
    }, {
        flag: "https://www.worldometers.info/img/flags/po-flag.gif",
        name: "Portugal"
    }, {
        flag: "https://www.worldometers.info/img/flags/rs-flag.gif",
        name: "Russia"
    }, {
        flag: "https://www.worldometers.info/img/flags/sp-flag.gif",
        name: "Spain"
    }, {
        flag: "https://www.worldometers.info/img/flags/sz-flag.gif",
        name: "Switzerland"
    }, {
        flag: "https://www.worldometers.info/img/flags/tu-flag.gif",
        name: "Turkey"
    }, {
        flag: "https://www.worldometers.info/img/flags/uk-flag.gif",
        name: "UK"
    }, {
        flag: "https://www.worldometers.info/img/flags/us-flag.gif",
        name: "US"
    }, {
        flag: "https://www.worldometers.info/img/flags/vm-flag.gif",
        name: "Vietnam"
    },
]

app.get("/random", (req, res) => {
    res.json(
        flags[Math.floor(Math.random() * flags.length)]
    )
})
app.get("/easyflags", (req, res) => {
    res.json(
        easyFlags[Math.floor(Math.random() * easyFlags.length)]
    )
})

app.listen(PORT)
