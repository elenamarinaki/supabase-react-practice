import './App.css';
import { useState, useEffect } from 'react';
import { supabase } from './client';

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: '', content: '' });
  const { title, content } = post;

  const fetchPosts = async () => {
    const { data } = await supabase.from('posts').select();
    console.log('data', data);
    setPosts(data);
  };

  const createPost = async () => {
    await supabase.from('posts').insert([{ title, content }]).single();
    setPost({ title: '', content: '' });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  });

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <input
        type='text'
        placeholder='Content'
        value={content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <button onClick={createPost}>Create Post 🍱</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
