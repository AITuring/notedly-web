import React,{ useEffect} from 'react'

const Favorites = () => {
    useEffect(() => {
        // 更新文档标题
        document.title = 'Favorites -- Notedly'
    })

    return (
        <div>
            <p>These are my Favorites</p>
        </div>
    )
}

export default Favorites