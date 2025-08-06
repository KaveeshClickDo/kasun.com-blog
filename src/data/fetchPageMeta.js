import config from "@/config";

const fetchPageMeta = async () => {
  try {
    const reqOptions = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      cache: 'no-store'
    };
    
    const populateParams = [
      'populate=*'
    ].join('&');
    
    const request = await fetch(`${config.api}/api/website-metadata?${populateParams}`, reqOptions);
    
    if (!request.ok) {
      throw new Error(`API request failed with status ${request.status}`);
    }
    
    const response = await request.json();
    return response;
  } catch (error) {
    console.error('Fetch page meta error:', error);
    return { data: null };
  }
}

export default fetchPageMeta;