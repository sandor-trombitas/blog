import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    console.log(readingTime);
    
    data.astro.frontmatter.readingTime = readingTime.text;
    }
};
