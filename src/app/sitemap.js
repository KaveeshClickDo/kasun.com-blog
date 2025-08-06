import fetchPosts from '@/data/fetchPosts';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.kasunsameera.com';
  
  try {
    // Fetch all posts
    const allPosts = await fetchPosts('sort[0]=publishedAt:desc');
    
    // Get categories
    const categoriesResponse = await fetchPosts();
    const uniqueCategories = [...new Set(
      categoriesResponse.data?.map(post => post.postPrimary?.category).filter(Boolean) || []
    )];

    // Static pages
    const staticPages = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1,
      },
    ];

    // Blog posts
    const blogPosts = allPosts.data?.map(post => ({
      url: `${baseUrl}/${post.postSlug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'always',
      priority: 0.9,
    })) || [];

    // Category pages
    const categoryPages = uniqueCategories.map(category => ({
      url: `${baseUrl}/category/${category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.7,
    }));

    return [...staticPages, ...blogPosts, ...categoryPages];
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return at least the homepage if fetch fails
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'always',
        priority: 1,
      },
    ];
  }
}