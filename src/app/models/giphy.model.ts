export interface GiphyGif {
    id: string;
    slug: string;
    url: string;
    bitly_url: string;
    embed_url: string;
    title: string;
    type: string;
    import_datetime: string;
    trending_datetime: string;
    images: GiphyImages;
    username: string;
    display_name: string;
    user?: GiphyUser | null;
    rating: string;
    source: string;
    source_post_url: string;
    source_tld: string;
    language: string;
    alt_text: string;
    alt_text_source: string;
    analytics: GiphyAnalytics;
    is_sticker: number;
    is_hidden: boolean;
}

export interface GiphyImages {
    original: GiphyImage;
    downsized: GiphyImage;
    downsized_large: GiphyImage;
    downsized_medium: GiphyImage;
    downsized_small: GiphyImage;
    downsized_still: GiphyImage;
    fixed_height: GiphyImage;
    fixed_height_downsampled: GiphyImage;
    fixed_height_small: GiphyImage;
    fixed_height_small_still: GiphyImage;
    fixed_width: GiphyImage;
    fixed_width_downsampled: GiphyImage;
    fixed_width_small: GiphyImage;
    fixed_width_small_still: GiphyImage;
    looping: GiphyImage;
    original_still: GiphyImage;
    preview: GiphyImage;
    preview_gif: GiphyImage;
    preview_webp: GiphyImage;
    [key: string]: GiphyImage | undefined;
}

export interface GiphyImage {
    url: string;
    width: string;
    height: string;
    size?: string;
    mp4?: string;
    mp4_size?: string;
    webp?: string;
    webp_size?: string;
    frames?: string;
    hash?: string;
}

export interface GiphyUser {
    avatar_url: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
}

export interface GiphyAnalytics {
    onload: GiphyAnalyticsUrl;
    onclick: GiphyAnalyticsUrl;
    onsent: GiphyAnalyticsUrl;
}

export interface GiphyAnalyticsUrl {
    url: string;
}

export interface GiphyPagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface GiphyMeta {
    status: number;
    msg: string;
    response_id: string;
}

export interface GiphyResponse {
    data: GiphyGif[];
    meta: GiphyMeta;
    pagination: GiphyPagination;
}