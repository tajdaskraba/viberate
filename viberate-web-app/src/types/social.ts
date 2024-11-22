export type SocialPlatform = 
  | 'facebook' 
  | 'twitter' 
  | 'instagram' 
  | 'spotify'
  | 'soundcloud'
  | 'youtube'
  | 'beatport'
  | 'mixcloud'
  | 'songkick'
  | 'bandsintown'
  | 'itunes'
  | 'home_page'
  | 'shazam'
  | 'deezer'
  | 'tidal'
  | 'google_play_music'
  | 'napster'
  | 'amazon_music'
  | 'tiktok'
  | 'google_plus';

export interface SocialLink {
  channel: SocialPlatform;
  link: string;
}