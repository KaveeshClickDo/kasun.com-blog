import fetchCustomHeader from '@/data/fetchCustomHeader';
import ClientHeader from './ClientHeader';

export default async function Header() {
    let headerData = null;
    
    try {
        const response = await fetchCustomHeader();
        headerData = response?.data || {};
    } catch (error) {
        console.error('Error fetching header data:', error);
        // Fallback to default values
        headerData = {
            headerBgColor: '#000000',
            headerFontColor: '#ffffff',
            headerImage: null,
            addHeaderNavigations: []
        };
    }

    return <ClientHeader headerData={headerData} />;
}