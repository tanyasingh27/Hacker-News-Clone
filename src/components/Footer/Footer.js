import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <div className='footer'>
            <a href='https://news.ycombinator.com/newsguidelines.html'> Guidelines |</a>
            <a href='https://news.ycombinator.com/newsfaq.html'> FAQ | </a>
            <a href='mailto:hn@ycombinator.com'> Support | </a>
            <a href='https://github.com/HackerNews/API'> API | </a>
            <a href='https://news.ycombinator.com/security.html'> Security | </a>
            <a href='https://news.ycombinator.com/lists'> Lists | </a>
            <a href='https://news.ycombinator.com/bookmarklet.html'> Bookmarklet | </a>
            <a href='https://www.ycombinator.com/legal/'> Legal | </a>
            <a href='https://www.ycombinator.com/apply/'> Apply to YC | </a>
            <a href='mailto:hn@ycombinator.com'> Contact </a>
            <div><input type="text" placeholder="  Search"/></div>
        </div>
    );
}

export default footer;