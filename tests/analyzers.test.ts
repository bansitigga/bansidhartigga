import { describe, it, expect } from 'vitest';
import { checkTitle } from '../packages/analyzers/src/index';

describe('checkTitle', () => {
  it('detects missing title', () => {
    const res = checkTitle('<html></html>');
    expect(res.passed).toBe(false);
  });
  it('passes valid title', () => {
    const res = checkTitle('<html><title>Hello</title></html>');
    expect(res.passed).toBe(true);
  });
});
