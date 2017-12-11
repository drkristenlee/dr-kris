<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154441_migration_entry_book_review_kirkus_reviews_2017_12_07_book_review_amy_morin_lcsw_bestselling_author_of_13_things_mentally_strong_people_dont_do_2017_12_07_book_review_cameron_marzelli_phd_2017_12_07_book_review_kirkus_reviews_2017_12_0 extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - book-review-kirkus-reviews-2017-12-07
        - book-review-amy-morin-lcsw-bestselling-author-of-13-things-mentally-strong-people-dont-do-2017-12-07
        - book-review-cameron-marzelli-phd-2017-12-07
        - book-review-kirkus-reviews-2017-12-07
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"book-review-kirkus-reviews-2017-12-07","section":"bookReviews","locales":{"en_us":{"slug":"book-review-kirkus-reviews-2017-12-07","section":"bookReviews","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-07 01:36:17.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"book-review-Kirkus Reviews-2017-12-07","entryType":"bookReviews","reviewText":"Join Dr. Kris as she chats about ways you can be a more global thinker in today\u0027s workaholic world.","reviewAuthor":"Kirkus Reviews"}}},{"slug":"book-review-amy-morin-lcsw-bestselling-author-of-13-things-mentally-strong-people-dont-do-2017-12-07","section":"bookReviews","locales":{"en_us":{"slug":"book-review-amy-morin-lcsw-bestselling-author-of-13-things-mentally-strong-people-dont-do-2017-12-07","section":"bookReviews","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-07 01:38:30.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"book-review-Amy Morin, LCSW & Bestselling Author of 13 Things Mentally Strong People Don\u2019t Do-2017-12-07","entryType":"bookReviews","reviewText":"Filled with skills you can start applying to your life today, RESET serves as a practical guide to coping with stress. Backed by scientific evidence, yet presented in an easy-to-digest format, Dr. Kris\u2019 advice will prepare you for challenges of all sizes..","reviewAuthor":"Amy Morin, LCSW & Bestselling Author of 13 Things Mentally Strong People Don\u2019t Do"}}},{"slug":"book-review-cameron-marzelli-phd-2017-12-07","section":"bookReviews","locales":{"en_us":{"slug":"book-review-cameron-marzelli-phd-2017-12-07","section":"bookReviews","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-07 01:38:59.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"book-review-Cameron Marzelli, PhD-2017-12-07","entryType":"bookReviews","reviewText":"Reset offers a breakthrough model that reframes our ideas about stress in support of well-being\u2026","reviewAuthor":"Cameron Marzelli, PhD"}}},{"slug":"book-review-kirkus-reviews-2017-12-07","section":"bookReviews","locales":{"en_us":{"slug":"book-review-kirkus-reviews-2017-12-07","section":"bookReviews","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-07 01:39:26.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"book-review-Kirkus Reviews-2017-12-07","entryType":"bookReviews","reviewText":"Lee\u2019s voice and the book\u2019s structure will be useful to readers looking for a leg up\u2026A well-written, sensible self-help guide.","reviewAuthor":"Kirkus Reviews"}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
