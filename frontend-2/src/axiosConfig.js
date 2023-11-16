import axios from 'axios'

axios.defaults.baseYRL = 
    process.env.NODE_ENV !== 'production'? 'http://localhost:5000': '/';