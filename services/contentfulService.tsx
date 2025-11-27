import { createClient, ContentfulClientApi } from 'contentful';

// --- Configuration ---
const SPACE_ID = 'spi5armhw568';
const ACCESS_TOKEN = 'LyCAi6xMVE2V5Ku3w_EdtCvgKz_v5x12jQrlTPCLYgs';

// --- App-facing Type Definitions (remain unchanged) ---
interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImageUrl: string;
  category: string;
  publishDate: string;
  content?: any; // Rich Text JSON object
}

interface PortfolioItem {
  id:string;
  title: string;
  description: string;
  youtubeId?: string;
}

// --- NEW Type Definitions for Homepage Content ---
export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  images: Array<{ src: string; alt: string; }>;
}

export interface VideoSectionContent {
    headline: string;
    description: string;
    videos: Array<{ id: string; title: string; }>;
}

export interface CourseCTAContent {
    headline: string;
    description: string;
    features: string[];
    boxHeadline: string;
    boxDescription: string;
}

export interface ArticleLinkContent {
    headline: string;
    description: string;
    buttonText: string;
}

export interface HomePageContent {
  hero: HeroContent;
  videoSection: VideoSectionContent;
  courseCTA: CourseCTAContent;
  articleLink: ArticleLinkContent;
}

// --- Contentful Client Initialization ---
let client: ContentfulClientApi<any> | null = null;
try {
  client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });
} catch (error) {
    console.error("Failed to initialize Contentful client. The site may use default content.", error);
}

// --- Helper function to format dates ---
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// --- NEW: Default content to prevent the site from breaking ---
const defaultHomePageContent: HomePageContent = {
  hero: {
    headline: 'Cinematic AI',
    subheadline: 'สร้างสรรค์ผลงานภาพยนตร์<br />เหนือจินตนาการด้วย AI',
    description: 'ปลดล็อคศักยภาพการสร้างสรรค์ของคุณด้วยคอร์สเรียนของเราที่คลอบคลุมทั้งการสร้างภาพเคลื่อนไหว การสร้างคลิปเล่าเรื่องด้วยเครื่องมือ AI ที่มีประสิทธิภาพอันดับต้นๆ ของวงการ',
    ctaText: 'เริ่มต้นเส้นทางของคุณ',
    ctaLink: 'https://www.facebook.com/profile.php?id=61563219540499',
    images: [
        { src: 'https://picsum.photos/seed/zombieangel/800/600', alt: 'Horror creature with wings in a bloody scene' },
        { src: 'https://picsum.photos/seed/podcast/800/600', alt: 'Elderly cartoon character with headphones at a microphone' },
        { src: 'https://picsum.photos/seed/horroreye/800/600', alt: 'Close-up of a terrified eye in the dark' },
        { src: 'https://picsum.photos/seed/zombiehead/800/600', alt: 'Decaying zombie head in a muddy puddle' },
        { src: 'https://picsum.photos/seed/hallwaygirl/800/600', alt: 'Young woman with a serious expression in a dimly lit hallway' },
        { src: 'https://picsum.photos/seed/pixargirl1/800/600', alt: 'Cartoon girl with large eyes looking down thoughtfully' },
        { src: 'https://picsum.photos/seed/pixargirl2/800/600', alt: 'Worried-looking cartoon girl on a city street' },
        { src: 'https://picsum.photos/seed/pixargroup/800/600', alt: 'Elderly cartoon man, a young girl, and a small robot' },
    ],
  },
  videoSection: {
    headline: 'ชมตัวอย่างผลงานของเรา',
    description: 'นี่คือส่วนหนึ่งของความเป็นไปได้ที่ไร้ขีดจำกัด เมื่อความคิดสร้างสรรค์ของมนุษย์ผสานกับพลังของปัญญาประดิษฐ์',
    videos: [
        { id: 'upQfwYRcO8s', title: 'Cinematic AI Reel' },
        { id: 'UdczOWZPFKM', title: 'AI Generated Short Film' },
        { id: 'Sye_EecXi7I', title: 'AI Generated Sci-Fi Scene' },
    ],
  },
  courseCTA: {
    headline: 'คอร์สเรียนทั้งหมดของ Cinematic AI',
    description: 'ไม่ว่าคุณจะเป็นเจ้าของแบรนด์ แม่ค้า SME เจ้าของธุรกิจ หรือผู้สนใจในการสร้างงานวิดีโอด้วย AI คอร์สของเราช่วยลดต้นทุน เพิ่มมูลค่าให้ธุรกิจของคุณได้',
    features: [
        'เรียนรู้การใช้ AI Tools ล่าสุดในวงการ',
        'สูตรลัดการเปลี่ยนจินตนาการเป็นภาพเคลื่อนไหว',
        'การใช้ Chat GPT ในการควบคุมสั่งงาน',
        'มีการสอนครอบคลุมทั้งการสอนออนไลน์ผ่านกลุ่มปิด การสอนออนไลน์แบบสอนสด และการสอน Onsite ถึงที่ ผู้เรียนเลือกสถานที่และเวลาได้เอง',
    ],
    boxHeadline: 'เปิดรับสมัครแล้ววันนี้',
    boxDescription: 'รับส่วนลดพิเศษสำหรับผู้ลงทะเบียน 100 ท่านแรก!',
  },
  articleLink: {
    headline: 'เพิ่มพูนความรู้ของคุณ',
    description: 'สำรวจบทความและกรณีศึกษาเกี่ยวกับการใช้ AI ในอุตสาหกรรมภาพยนตร์จากทั่วทุกมุมโลก เพื่อสร้างแรงบันดาลใจให้โปรเจกต์ต่อไปของคุณ',
    buttonText: 'อ่านบทความทั้งหมด',
  },
};

// --- Service Functions to Fetch Data ---

/**
 * Fetches and transforms the content for the homepage.
 * This is a singleton entry.
 */
export const getHomePageContent = async (): Promise<HomePageContent> => {
    if (!client) {
        return defaultHomePageContent;
    }
    try {
        const response = await client.getEntries({
            content_type: 'homePage',
            limit: 1,
            include: 10, // Fetch linked assets
        });

        if (response.items.length === 0) {
            console.warn("Homepage content not found in Contentful. Using default content.");
            return defaultHomePageContent;
        }

        const entry = response.items[0].fields;

        return {
            hero: {
                // FIX: Cast Contentful field to string to ensure type safety.
                headline: (entry.heroHeadline as string) || defaultHomePageContent.hero.headline,
                // FIX: Cast Contentful field to string before using string methods like 'replace'.
                subheadline: (entry.heroSubheadline as string)?.replace(/\n/g, '<br />') || defaultHomePageContent.hero.subheadline,
                // FIX: Cast Contentful field to string to ensure type safety.
                description: (entry.heroDescription as string) || defaultHomePageContent.hero.description,
                // FIX: Cast Contentful field to string to ensure type safety.
                ctaText: (entry.heroCtaText as string) || defaultHomePageContent.hero.ctaText,
                // FIX: Cast Contentful field to string to ensure type safety.
                ctaLink: (entry.heroCtaLink as string) || defaultHomePageContent.hero.ctaLink,
                // FIX: Cast Contentful field to an array to use array methods like 'map'.
                images: (entry.heroBackgroundImages as any[])?.map((img: any) => ({
                    src: `https:${img.fields.file.url}`,
                    alt: img.fields.description || img.fields.title || '',
                })) || defaultHomePageContent.hero.images,
            },
            videoSection: {
                // FIX: Cast Contentful field to string to ensure type safety.
                headline: (entry.videoSectionHeadline as string) || defaultHomePageContent.videoSection.headline,
                // FIX: Cast Contentful field to string to ensure type safety.
                description: (entry.videoSectionDescription as string) || defaultHomePageContent.videoSection.description,
                // FIX: Cast Contentful field to an array to use array methods like 'map'.
                videos: (entry.youtubeVideoIds as string[])?.map((id: string) => ({
                    id: id,
                    title: 'Cinematic AI Video', // Title is not displayed, so can be generic
                })) || defaultHomePageContent.videoSection.videos,
            },
            courseCTA: {
                // FIX: Cast Contentful field to string to ensure type safety.
                headline: (entry.courseCtaHeadline as string) || defaultHomePageContent.courseCTA.headline,
                // FIX: Cast Contentful field to string to ensure type safety.
                description: (entry.courseCtaDescription as string) || defaultHomePageContent.courseCTA.description,
                // FIX: Cast Contentful field to string array to match expected type.
                features: (entry.courseFeatures as string[]) || defaultHomePageContent.courseCTA.features,
                // FIX: Cast Contentful field to string to ensure type safety.
                boxHeadline: (entry.courseCtaBoxHeadline as string) || defaultHomePageContent.courseCTA.boxHeadline,
                // FIX: Cast Contentful field to string to ensure type safety.
                boxDescription: (entry.courseCtaBoxDescription as string) || defaultHomePageContent.courseCTA.boxDescription,
            },
            articleLink: {
                // FIX: Cast Contentful field to string to ensure type safety.
                headline: (entry.articleLinkHeadline as string) || defaultHomePageContent.articleLink.headline,
                // FIX: Cast Contentful field to string to ensure type safety.
                description: (entry.articleLinkDescription as string) || defaultHomePageContent.articleLink.description,
                // FIX: Cast Contentful field to string to ensure type safety.
                buttonText: (entry.articleLinkButtonText as string) || defaultHomePageContent.articleLink.buttonText,
            },
        };
    } catch (error) {
        console.error("Error fetching homepage content:", error);
        return defaultHomePageContent;
    }
};

/**
 * Fetches and transforms articles from Contentful.
 */
export const getArticles = async (): Promise<Article[]> => {
  if (!client) {
    return [];
  }
  try {
    const response = await client.getEntries({
      content_type: 'article',
      order: ['-fields.publishDate'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title || 'Untitled Article',
      slug: item.fields.slug || item.sys.id,
      excerpt: item.fields.excerpt || '',
      featuredImageUrl: item.fields.featuredImage?.fields?.file?.url
        ? `https:${item.fields.featuredImage.fields.file.url}`
        : 'https://via.placeholder.com/1200x600?text=No+Image',
      category: item.fields.category || 'Uncategorized',
      publishDate: item.fields.publishDate ? formatDate(item.fields.publishDate) : 'No Date',
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

/**
 * Fetches a single article by its slug.
 * It includes a fallback to search by entry ID if the slug search fails.
 */
export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    if (!client) {
      return null;
    }
    try {
        // First, try to fetch by slug, as that's the primary method.
        const responseBySlug = await client.getEntries({
            content_type: 'article',
            'fields.slug': slug,
            limit: 1,
            include: 2, // Fetch linked assets in rich text
        });

        let item = null;
        if (responseBySlug.items.length > 0) {
            item = responseBySlug.items[0];
        } else {
            // If not found by slug, it might be an entry ID (the fallback from getArticles).
            // Let's try fetching by entry ID using getEntries to ensure 'include' works.
            const responseById = await client.getEntries({
              'sys.id': slug,
              content_type: 'article',
              limit: 1,
              include: 2, // Crucially, include linked assets here too.
            });

            if (responseById.items.length > 0) {
              item = responseById.items[0];
            }
        }

        if (!item) {
            // If still not found after both attempts, return null.
            return null;
        }

        // Now that we have the item (either by slug or ID), transform it.
        return {
            id: item.sys.id,
            title: item.fields.title || 'Untitled Article',
            slug: item.fields.slug,
            excerpt: item.fields.excerpt || '',
            featuredImageUrl: item.fields.featuredImage?.fields?.file?.url
                ? `https:${item.fields.featuredImage.fields.file.url}`
                : 'https://via.placeholder.com/1200x600?text=No+Image',
            category: item.fields.category || 'Uncategorized',
            publishDate: item.fields.publishDate ? formatDate(item.fields.publishDate) : 'No Date',
            content: item.fields.content, // The rich text field
        };
    } catch (error) {
        console.error(`Error fetching article with slug ${slug}:`, error);
        return null;
    }
};


/**
 * Fetches and transforms portfolio items from Contentful.
 */
export const getPortfolioItems = async (): Promise<PortfolioItem[]> => {
  if (!client) {
    return [];
  }
  try {
    const response = await client.getEntries({
      content_type: 'portfolioItem',
      order: ['sys.createdAt'],
    });

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title || 'Untitled Project',
      description: item.fields.description || '',
      youtubeId: item.fields.youtubeId,
    }));
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    return [];
  }
};
