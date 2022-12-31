import React from 'react'
import Post from './Post'
import Sidebar from '../Sidebar/indexWide'
const Posts = ({ posts, title }) => {
  return (
    <section className="posts container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <h3 className="section-title category-title">
            category // <span>{title}</span>
          </h3>
          <div className="">
            {/* posts column */}
            <article className="flex flex-wrap category-card-margin">
              {posts.map(post => {
                return <Post key={post.id} {...post} />
              })}
            </article>
            {/* banner column */}
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  )
}

export default Posts
