const SITE_URL = 'https://qinyuxu.io';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
    },
  ];
}
