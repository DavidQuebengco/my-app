import React, { useState, useEffect } from 'react';
import { Card, Stack } from 'react-bootstrap';


function NewsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    })
    return (
        <div>
            {posts.map(post => (
                <div>
                    <Card className='px-2 mb-5' key={post.id}>
                        <Card.Header className=''>
                            <h4><strong>{post.title}</strong> </h4>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            ))}
        </div>
    )

}

export default NewsFeed;