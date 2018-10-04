// 这个 process.env.NODE_ENV 应该是webpack注入的变量
if (process.env.NODE_ENV === 'production' || (window.location && window.location.hostname !== 'localhost')) {
    module.exports =  require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}