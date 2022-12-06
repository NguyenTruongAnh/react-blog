import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import './home.css'
import Slider from '../../components/slider/Slider'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data)
        }

        fetchPosts()
    }, [search])

    return (
        <>
            <Slider />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
