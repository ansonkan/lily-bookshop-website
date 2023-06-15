This is a failed attempt of a book store website for a local book store. Also, this serves as my SST practice.

# Lily Bookshop

## TODO

- [ ] Support multi-locale
- [ ] Create pages for book management, including create, remove, update
- [ ] Protect the book management pages with user authentication
- [ ] Improve website design
- [x] Plan on how should we digitalize all of your physical books into a database (Based on my understanding, most books should have a `ISBN 13` or `ISBN 10` barcode that is a universal ID for a book. There is likely a free service for `ISBN` lookup. If so, all we need to do is to get a barcode scanner, then scan all the books)
- [ ] Improve searching, such as support tags or multiple keywords
- [x] Improve "You might be interested" because now it might suggests the same book
- [ ] Improve responsiveness related to iPhone's inset, see [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

## Notes

- "You might be interested" has been slightly improved. The origin book won't be in the result, and `$search` is used more effectively
- Google Books API offers `ISBN` search align with other searching options, see https://developers.google.com/books/docs/v1/using#PerformingSearch
