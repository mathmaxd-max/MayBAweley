# Domain name notes

Constraints you mentioned:
- `.de` may not be available through your current registrar/provider (e.g., Cloudflare Registrar has limited TLD support).

Pragmatic options:

## Option A: `maybaweley.com`
Pros:
- Most obvious; best for branding and search recall.
Cons:
- Some German users may mistype the “y” (may vs. mai).

Mitigations:
- Register common variants and redirect:
  - `may-b-aweley.com`
  - `may-aweley.com`
  - `maibaweley.com` (if affordable)
- Use QR codes on print materials.

## Option B: short redirect domain
Example pattern: `mbaweley.com` or `aweley.de` (if ever possible).
Use it as an alias that redirects to the canonical domain.

## Option C: Subdomain under a family-owned domain
Example: `books.yourfamilydomain.tld`
Only if you are comfortable with branding tradeoffs.

Recommendation:
- Use `maybaweley.com` as canonical and add 1–2 typo-safe redirects.
