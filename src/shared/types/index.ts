export interface IVideo {
  id: string;
  title: string;
  category: number;
  hls_path: string;
  description: string;
  thumbnail: string;
  views: number;
  likes: number;
}

export interface ICategory {
  id: string;
  title: string;
}
