import Link from "next/link";
import "./blog-detail.css";

export default function BlogDetail({ post, recentPosts }) {
  return (
    <main className="lux-blog-detail">
      <div className="blog-detail-container">
        {/* LEFT: CURRENT BLOG ARTICLE */}
        <article className="blog-article">
          <Link href="/blogs" className="blog-back-link">
            <span>←</span> BACK TO JOURNAL
          </Link>

          <div className="blog-article-header">
            <span className="blog-detail-category">{post.category}</span>

            <h1>{post.title}</h1>

            <p className="blog-detail-intro">{post.intro}</p>
          </div>

          {/* MAIN BLOG IMAGE */}
          <div className="blog-detail-main-image">
            <img src={post.image} alt={post.title} />
          </div>

          {/* DATE ONLY — NO AUTHOR */}
          <div className="blog-detail-date">
            <span>{post.date}</span>
          </div>

          {/* ARTICLE BODY */}
          <div className="blog-article-body">
            <p className="blog-article-opening">{post.intro}</p>

            {post.sections.map((section, index) => (
              <section className="blog-article-section" key={index}>
                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {section.image && (
                  <figure className="blog-article-image">
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.heading}
                      loading="lazy"
                    />
                  </figure>
                )}
              </section>
            ))}

            <div className="blog-article-end">
              <span>—</span>
              <p>Thoughtfully designed. Timelessly experienced.</p>
              <span className="blog-article-brand">LUXÉLAN</span>
            </div>
          </div>

          {/* BACK TO BLOGS */}
          <div className="blog-article-footer">
            <Link href="/blogs">
              <span>←</span> EXPLORE ALL STORIES
            </Link>
          </div>
        </article>

        {/* RIGHT: STICKY RECENT BLOGS */}
        <aside className="blog-recent-sidebar">
          <div className="blog-recent-inner">
            <div className="blog-recent-heading">
              <span>EXPLORE MORE</span>
              <h2>Recent Stories</h2>
            </div>

            <div className="blog-recent-list">
              {recentPosts.map((recentPost, index) => (
                <Link
                  href={`/blog/${recentPost.slug}`}
                  className="blog-recent-item"
                  key={recentPost.id}
                >
                  <div className="blog-recent-image">
                    <img
                      src={recentPost.image}
                      alt={recentPost.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="blog-recent-content">
                    <span className="blog-recent-number">
                      0{index + 1} / {recentPost.date}
                    </span>

                    <h3>{recentPost.title}</h3>

                    <span className="blog-recent-arrow">↗</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/blogs" className="blog-view-all">
              VIEW ALL STORIES <span>↗</span>
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
