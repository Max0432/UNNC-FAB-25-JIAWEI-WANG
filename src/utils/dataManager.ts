import { BlogPost } from '../components/BlogList';

export interface BlogData {
  play: BlogPost[];
  study: BlogPost[];
  assessment: BlogPost[];
  lastUpdated: string;
}

// Export all blog data as JSON file
export function exportBlogData(playPosts: BlogPost[], studyPosts: BlogPost[], assessmentPosts: BlogPost[]) {
  const data: BlogData = {
    play: playPosts,
    study: studyPosts,
    assessment: assessmentPosts,
    lastUpdated: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `blog-data-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Export single page data
export function exportPageData(pageName: string, posts: BlogPost[]) {
  const data = {
    page: pageName,
    posts: posts,
    lastUpdated: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${pageName.toLowerCase()}-data-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Import data from JSON file
export function importData(file: File): Promise<BlogPost[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        
        // Support both single page export and full data export formats
        if (data.posts && Array.isArray(data.posts)) {
          // Single page format
          resolve(data.posts);
        } else if (Array.isArray(data)) {
          // Direct array format
          resolve(data);
        } else {
          reject(new Error('Invalid data format'));
        }
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

// Load initial data from bundled JSON file (if exists)
export async function loadInitialData(pageName: string): Promise<BlogPost[]> {
  const paths = [
    `./data/${pageName.toLowerCase()}-data.json`,
    `/data/${pageName.toLowerCase()}-data.json`,
  ];

  for (const path of paths) {
    try {
      console.log(`Trying to load data from: ${path}`);
      const response = await fetch(path);
      if (response.ok) {
        const data = await response.json();
        console.log(`Successfully loaded data from: ${path}`, data);
        return Array.isArray(data) ? data : data.posts || [];
      }
    } catch (error) {
      console.log(`Failed to load from ${path}:`, error);
    }
  }
  
  console.warn(`No initial data found for ${pageName} after trying all paths`);
  return [];
}
