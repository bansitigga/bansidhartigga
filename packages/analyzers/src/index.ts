import { load } from 'cheerio';

export interface CheckResult {
  passed: boolean;
  weight: number;
  message: string;
}

export function checkTitle(html: string, maxLength = 60): CheckResult {
  const $ = load(html);
  const title = $('title').text();
  if (!title) return { passed: false, weight: 1, message: 'Missing <title>' };
  return { passed: title.length <= maxLength, weight: 1, message: `Title length: ${title.length}` };
}
