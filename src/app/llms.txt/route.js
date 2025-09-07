import fetchPosts from '@/data/fetchPosts';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.kasunsameera.com';
  
  try {
    // Fetch all posts
    const allPosts = await fetchPosts('sort[0]=publishedAt:desc');
    
    // Get categories from the categories array
    const categoriesResponse = await fetchPosts();
    const uniqueCategories = [...new Set(
      categoriesResponse.data?.flatMap(post => 
        post.postPrimary?.categories || []
      ).filter(Boolean) || []
    )];

    // All posts (sorted by publication date)
    const posts = allPosts.data || [];
    
    // Build llms.txt content
    const llmsContent = `# llms.txt

## About This Site
This is Kasun Sameera's personal blog covering technology, blogging, and digital insights.
URL: ${baseUrl}
Last Updated: ${new Date().toISOString().split('T')[0]}

## Site Structure
- Homepage: ${baseUrl}
- Blog Posts: ${baseUrl}/[slug]
- Category Pages: ${baseUrl}/category/[category-name]

## Categories
${uniqueCategories.map(category => {
  const categorySlug = category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  return `- ${category}: ${baseUrl}/category/${categorySlug}`;
}).join('\n')}

## All Posts
${posts.map(post => {
  const title = post.title || 'Untitled';
  const slug = post.postSlug || '';
  const publishedAt = new Date(post.publishedAt || post.createdAt).toISOString().split('T')[0];
  const excerpt = post.postPrimary?.excerpt || '';
  const categories = post.postPrimary?.categories?.join(', ') || 'Uncategorized';
  
  return `- [${title}](${baseUrl}/${slug}) (${publishedAt})
  Categories: ${categories}${excerpt ? `\n  ${excerpt.substring(0, 150)}${excerpt.length > 150 ? '...' : ''}` : ''}`;
}).join('\n\n')}

## Content Guidelines
- All blog posts are original content
- Topics include: ${uniqueCategories.slice(0, 5).join(', ')}${uniqueCategories.length > 5 ? ', and more' : ''}
- Content is regularly updated and maintained
- Posts include technical tutorials, industry insights, and personal experiences
- Posts can belong to multiple categories

## Contact & Usage
- This content is publicly available for learning and reference
- Please respect copyright and provide attribution when referencing
- For questions or collaboration: Contact through the website

## Technical Details
- Built with Next.js 15
- Content managed through Strapi CMS
- Responsive design optimized for all devices
- SEO optimized with proper meta tags and structured data
- Multi-category system allows posts to be tagged with multiple topics

## Crawling Instructions
- Sitemap available at: ${baseUrl}/sitemap.xml
- Robots.txt available at: ${baseUrl}/robots.txt
- All public pages are crawlable unless specified otherwise
- Rate limiting may apply to prevent abuse

---
Generated: ${new Date().toISOString()}
Total Posts: ${posts.length}
Total Categories: ${uniqueCategories.length}`;

    return new Response(llmsContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
    
  } catch (error) {
    console.error('Error generating llms.txt:', error);
    
    // Return basic llms.txt if fetch fails
    const fallbackContent = `# llms.txt

## About This Site
Kasun's personal blog covering technology and programming.
URL: ${baseUrl}
Last Updated: ${new Date().toISOString().split('T')[0]}

## Site Structure
- Homepage: ${baseUrl}
- Blog Posts: ${baseUrl}/[slug]

## Error Notice
Unable to fetch dynamic content at this time. Please check back later or visit the site directly.

---
Generated: ${new Date().toISOString()}`;

    return new Response(fallbackContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=300, s-maxage=300', // Shorter cache on error
      },
    });
  }
}