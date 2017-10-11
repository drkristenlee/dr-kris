<?php
namespace Craft;

/**
 * Generated migration
 */
class m171011_164754_migration_entry_homepage_we_just_installed_craft extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - homepage
        - we-just-installed-craft
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"homepage","section":"homepage","locales":{"en_us":{"slug":"homepage","section":"homepage","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-04 20:19:15.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Welcome to Localhost!","entryType":"homepage","body":"<p>It\u2019s true, this site doesn\u2019t have a whole lot of content yet, but don\u2019t worry. Our web developers have just installed the CMS, and they\u2019re setting things up for the content editors this very moment. Soon Localhost will be an oasis of fresh perspectives, sharp analyses, and astute opinions that will keep you coming back again and again.</p>"}}},{"slug":"we-just-installed-craft","section":"news","locales":{"en_us":{"slug":"we-just-installed-craft","section":"news","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-04 20:19:15.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"We just installed Craft!","entryType":"news","body":"<p>Craft is the CMS that\u2019s powering Localhost. It\u2019s beautiful, powerful, flexible, and easy-to-use, and it\u2019s made by Pixel &amp; Tonic. We can\u2019t wait to dive in and see what it\u2019s capable of!</p><!--pagebreak--><p>This is even more captivating content, which you couldn\u2019t see on the News index page because it was entered after a Page Break, and the News index template only likes to show the content on the first page.</p><p>Craft: a nice alternative to Word, if you\u2019re making a website.</p>","tags":[]}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
