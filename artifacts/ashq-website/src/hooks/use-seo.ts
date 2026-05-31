import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
}

export function useSEO({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage = "/opengraph.jpg",
  canonicalPath,
}: SEOOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords.length) setMeta("keywords", keywords.join(", "));

    setMeta("og:title", ogTitle ?? title, true);
    setMeta("og:description", ogDescription ?? description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", "article", true);

    setMeta("twitter:title", ogTitle ?? title);
    setMeta("twitter:description", ogDescription ?? description);
    setMeta("twitter:card", "summary_large_image");

    if (canonicalPath) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", `https://ashqexports.com${canonicalPath}`);
    }

    return () => {
      document.title = "ASHQ Merchant Exports";
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonicalPath]);
}
