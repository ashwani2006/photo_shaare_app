import React,{useState, useEffect} from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [username, setUsername] = useState('')
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [posts, setPosts] = useState([]);


  // fetching username
  useEffect(()=>{
      const fetchUsername = async()=>{
        try {
          const res = await axios.get("http://localhost:4000/auth/api/me",{withCredentials: true})
          setUsername(res.data.username);
        } catch (error) {
          // alert("username gathering")
        }
      }

      fetchUsername();
  },[])


  // fetching post on database
  const fetchPost  = async()=>{
     try {
        const res=  await axios.get("http://localhost:4000/auth/api/gets",{withCredentials: true})
        setPosts(res.data)
  
     } catch (error) {
        // alert("error on fetching all post ")
     }
  }

  useEffect(()=>{
     fetchPost();
  },[])
  

  // Conver image to base64
  const handleFileChange = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () =>{
      setImage(reader.result);
    }

    if(file){
      reader.readAsDataURL(file);
    }
  }


  // upload post on database
  const handleUpload = async ()=>{
    try {
      await axios.post("http://localhost:4000/auth/api/posts",{ image ,caption, username},{withCredentials:true})
      toast("post uploaded",{autoClose: 800})
      fetchPost();
      setCaption("");
      setImage("");
    } catch (error) {
      // alert("error on uploaded post")
    }
  }


  return (
    <div>
       {/* home area */}
       <div>
         <h1>Hello { username === ''? (<span>Guest</span>):(<span>{username}💝</span>)}</h1>
       </div>
        <hr />

      {/* post upload on database form  */}
      <div>
         <input type="file" accept='image/*' onChange={handleFileChange}/>
         <input type="text" placeholder='caption' onChange={(e)=>setCaption(e.target.value)}/>
         <button onClick={handleUpload}>upload post</button>
      </div>

      <div>
       <h1>Post your photos...</h1>
      </div>
         
      {/* 🖼️ Display All Posts */}
      <h2></h2>
      {posts.length === 0 ? (
        <h3>Reloading🔄️🔄️🔄️</h3>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h3>{post.username}</h3>
            <img src={post.image} alt="post" width="300" />
            { <p>{post.caption}</p>}
            <small>{new Date(post.createdAt).toLocaleString()}</small>
            <hr />
          </div>
        ))
      )}


    </div>
  )
}

export default Home;