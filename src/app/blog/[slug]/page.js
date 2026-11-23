import { notFound } from "next/navigation";
import blogPosts from "@/lib/blogPosts";
import BlogDetail from "@/components/Blogs/BlogDetail";

export const instant = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found | Luxélan",
    };
  }

  return {
    title: `${post.title} | Luxélan`,
    description: post.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5);

  return <BlogDetail post={post} recentPosts={recentPosts} />;
}
