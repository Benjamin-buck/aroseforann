export type SongApiResponse = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  template: string;
  meta: {
    _uag_custom_page_level_css: string;
    "site-sidebar-layout": string;
    "site-content-layout": string;
    "ast-site-content-layout": string;
    "site-content-style": string;
    "site-sidebar-style": string;
    "ast-global-header-display": string;
    "ast-banner-title-visibility": string;
    "ast-main-header-display": string;
    "ast-hfb-above-header-display": string;
    "ast-hfb-below-header-display": string;
    "ast-hfb-mobile-header-display": string;
    "site-post-title": string;
    "ast-breadcrumbs-content": string;
    "ast-featured-img": string;
    "footer-sml-layout": string;
    "theme-transparent-header-meta": string;
    "adv-header-id-meta": string;
    "stick-header-meta": string;
    "header-above-stick-meta": string;
    "header-main-stick-meta": string;
    "header-below-stick-meta": string;
    "astra-migrate-meta-layouts": string;
    "ast-page-background-enabled": string;
    "ast-page-background-meta": BackgroundMeta;
    "ast-content-background-meta": BackgroundMeta;
  };
  class_list: string[];
  release_date: string;
  spotify_url: string;
  apple_music_url: string;
  amazon_music_url: string;
  song_description: string;
  lyrics: string;
  uagb_featured_image_src: Record<string, [string, number, number, boolean]>;
  uagb_author_info: {
    display_name: string;
    author_link: string;
  };
  uagb_comment_info: number;
  uagb_excerpt: string | null;
  _links: {
    self: LinkWithHints[];
    collection: Link[];
    about: Link[];
    "wp:featuredmedia"?: LinkWithEmbed[];
    "wp:attachment"?: Link[];
    curies: Curies[];
  };
};

type Link = {
  href: string;
};

type LinkWithHints = Link & {
  targetHints: {
    allow: string[];
  };
};

type LinkWithEmbed = Link & {
  embeddable?: boolean;
};

type Curies = {
  name: string;
  href: string;
  templated: boolean;
};

type BackgroundMeta = {
  desktop: BackgroundSettings;
  tablet: BackgroundSettings;
  mobile: BackgroundSettings;
};

type BackgroundSettings = {
  "background-color": string;
  "background-image": string;
  "background-repeat": string;
  "background-position": string;
  "background-size": string;
  "background-attachment": string;
  "background-type": string;
  "background-media": string;
  "overlay-type": string;
  "overlay-color": string;
  "overlay-opacity": string;
  "overlay-gradient": string;
};

export type TourPost = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  template: string;
  meta: {
    _uag_custom_page_level_css: string;
    "site-sidebar-layout": string;
    "site-content-layout": string;
    "ast-site-content-layout": string;
    "site-content-style": string;
    "site-sidebar-style": string;
    "ast-global-header-display": string;
    "ast-banner-title-visibility": string;
    "ast-main-header-display": string;
    "ast-hfb-above-header-display": string;
    "ast-hfb-below-header-display": string;
    "ast-hfb-mobile-header-display": string;
    "site-post-title": string;
    "ast-breadcrumbs-content": string;
    "ast-featured-img": string;
    "footer-sml-layout": string;
    "theme-transparent-header-meta": string;
    "adv-header-id-meta": string;
    "stick-header-meta": string;
    "header-above-stick-meta": string;
    "header-main-stick-meta": string;
    "header-below-stick-meta": string;
    "astra-migrate-meta-layouts": string;
    "ast-page-background-enabled": string;
    "ast-page-background-meta": {
      desktop: BackgroundSettings;
      tablet: BackgroundSettings;
      mobile: BackgroundSettings;
    };
    "ast-content-background-meta": {
      desktop: BackgroundSettings;
      tablet: BackgroundSettings;
      mobile: BackgroundSettings;
    };
    _tour_date: string;
    _tour_venue: string;
    _tour_city: string;
    _tour_tickets_url: string;
    _tour_rsvp_url: string;
  };
  class_list: string[];
  uagb_featured_image_src: Record<string, boolean>;
  uagb_author_info: {
    display_name: string;
    author_link: string;
  };
  uagb_comment_info: number;
  uagb_excerpt: string | null;
  _links: {
    self: LinkWithHints[];
    collection: Link[];
    about: Link[];
    "wp:attachment": Link[];
    curies: CuryLink[];
  };
};

type BackgroundSettings = {
  "background-color": string;
  "background-image": string;
  "background-repeat": string;
  "background-position": string;
  "background-size": string;
  "background-attachment": string;
  "background-type": string;
  "background-media": string;
  "overlay-type": string;
  "overlay-color": string;
  "overlay-opacity": string;
  "overlay-gradient": string;
};

type Link = {
  href: string;
};

type LinkWithHints = Link & {
  targetHints?: {
    allow: string[];
  };
};

type CuryLink = {
  name: string;
  href: string;
  templated: boolean;
};
