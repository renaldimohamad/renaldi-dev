export type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  readTime: string;
  excerpt: string;
  content: string;
  cover: string;
};

export const posts: Post[] = [
  {
    slug: "why-i-love-building-dashboards",
    title: "Why I Love Building Dashboards",
    date: "February 20, 2026",
    tag: "Engineering",
    readTime: "4 min read",
    excerpt:
      "Building dashboards isn’t about charts. It’s about clarity and decision-making.",
    cover: "/images/image3.jpg",
    content: `
Building dashboards isn’t about charts.

It’s about clarity.

A good dashboard reduces noise...
`,
  },
  {
    slug: "clean-ui-is-a-superpower",
    title: "Clean UI Is a Superpower",
    date: "February 10, 2026",
    tag: "Design",
    readTime: "3 min read",
    excerpt:
      "Great interfaces reduce cognitive load and make products feel effortless.",
    cover: "/images/image2.jpg",
    content: `
Clean UI is not about minimalism...
`,
  },
];
