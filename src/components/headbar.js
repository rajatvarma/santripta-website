import React from 'react'

class headbar extends React.Component
{
    render()
    {
        return(
            <div id = "header">
                <h2 id = "title">Santra</h2>
                <ul id = "links">
                    <li>who</li>
                    <li>what</li>
                    <li>why</li>
                    <li>where</li>
                </ul>
            </div>
        )
    }
}

export default headbar;