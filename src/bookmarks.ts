interface Bookmark {
    id: number;
    link: string;
    tags: string[];
  }
  
  let bookmarks: Bookmark[] = [
    { id: 1, link: "https://google.com", tags: ["search"] },
    { id: 2, link: "https://twitter.com", tags: ["social"] },
    { id: 3, link: "https://github.com", tags: ["development"] },
  ];
  
  export default bookmarks;
  