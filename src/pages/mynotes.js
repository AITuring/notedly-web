import React, { useEffect }from 'react'

const MyNotes = () => {
    useEffect(() => {
        // 更新文档标题
        document.title = 'My Notes -- Notedly'
    })

    return (
        <div>
            <p>These are my notes</p>
        </div>
    )
}

export default MyNotes