// index.js
// This is the main entry point of our application
import React from 'react'
import ReactDOM from 'react-dom'
// 导入apollo clent库
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
// 全局样式
import GlobalStyle from '/components/GlobalStyle'
// 路由
import Pages from './pages'

// 配置API URI和缓存
const uri = process.env.API_URI
const cache = new InMemoryCache()

// 配置Apollo client
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages />
        </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
