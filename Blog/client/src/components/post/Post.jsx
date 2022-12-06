import './post.css'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const PF = "http://localhost:5000/images/"

    return (
        <div className="post">
            {post.photo && (
                <img 
                    className="post-img"
                    src={PF + post.photo} 
                    alt="Img"
                />
            )}
            <div className="post-info">
                <div className="post-cats">
                    {post.categories.map((c, index) => (
                        <span className="post-cat" key={index}>{c}</span>
                    ))}
                </div>
                <Link className="link" to={`/post/${post._id}`}>
                    <div className="post-title">
                        {post.title}
                    </div>
                </Link>
                <hr />
                <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post-desc">
                {post.desc}
            </p>
        </div>
    )
}
