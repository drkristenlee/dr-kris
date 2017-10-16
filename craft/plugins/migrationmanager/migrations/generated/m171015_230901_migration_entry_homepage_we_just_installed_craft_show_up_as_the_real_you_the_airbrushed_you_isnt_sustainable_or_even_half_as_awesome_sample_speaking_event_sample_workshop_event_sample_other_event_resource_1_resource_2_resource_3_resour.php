<?php
namespace Craft;

/**
 * Generated migration
 */
class m171015_230901_migration_entry_homepage_we_just_installed_craft_show_up_as_the_real_you_the_airbrushed_you_isnt_sustainable_or_even_half_as_awesome_sample_speaking_event_sample_workshop_event_sample_other_event_resource_1_resource_2_resource_3_resour extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - homepage
        - we-just-installed-craft
        - show-up-as-the-real-you-the-airbrushed-you-isnt-sustainable-or-even-half-as-awesome
        - sample-speaking-event
        - sample-workshop-event
        - sample-other-event
        - resource-1
        - resource-2
        - resource-3
        - resource-4
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"homepage","section":"homepage","locales":{"en_us":{"slug":"homepage","section":"homepage","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-06 18:06:19.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Welcome to Localhost!","entryType":"homepage","body":"<p>It\u2019s true, this site doesn\u2019t have a whole lot of content yet, but don\u2019t worry. Our web developers have just installed the CMS, and they\u2019re setting things up for the content editors this very moment. Soon Localhost will be an oasis of fresh perspectives, sharp analyses, and astute opinions that will keep you coming back again and again.</p>"}}},{"slug":"we-just-installed-craft","section":"news","locales":{"en_us":{"slug":"we-just-installed-craft","section":"news","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-06 18:06:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"We just installed Craft!","entryType":"news","body":"<p>Craft is the CMS that\u2019s powering Localhost. It\u2019s beautiful, powerful, flexible, and easy-to-use, and it\u2019s made by Pixel &amp; Tonic. We can\u2019t wait to dive in and see what it\u2019s capable of!</p>\n<!--pagebreak-->\n<p>This is even more captivating content, which you couldn\u2019t see on the News index page because it was entered after a Page Break, and the News index template only likes to show the content on the first page.</p>\n<p>Craft: a nice alternative to Word, if you\u2019re making a website.</p>","tags":[]}}},{"slug":"show-up-as-the-real-you-the-airbrushed-you-isnt-sustainable-or-even-half-as-awesome","section":"landingQuotes","locales":{"en_us":{"slug":"show-up-as-the-real-you-the-airbrushed-you-isnt-sustainable-or-even-half-as-awesome","section":"landingQuotes","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:32:01.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Show up as the real you. The airbrushed you isn\u0027t sustainable, or even half as awesome.","entryType":"landingQuotes","headingQuote":"Show up as the real you. The airbrushed you isn\u0027t sustainable, or even half as awesome."}}},{"slug":"sample-speaking-event","section":"events","locales":{"en_us":{"slug":"sample-speaking-event","section":"events","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:56:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Sample Speaking Event","entryType":"events","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","date":{"date":"2017-11-01 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Some location"}}},{"slug":"sample-workshop-event","section":"events","locales":{"en_us":{"slug":"sample-workshop-event","section":"events","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:57:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Sample Workshop Event","entryType":"events","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","date":{"date":"2017-11-02 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Lorem ipsum"}}},{"slug":"sample-other-event","section":"events","locales":{"en_us":{"slug":"sample-other-event","section":"events","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:57:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Sample Other Event","entryType":"events","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","date":{"date":"2017-11-03 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Some location"}}},{"slug":"resource-1","section":"resources","locales":{"en_us":{"slug":"resource-1","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:18:59.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Resource 1","entryType":"resources","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "}}},{"slug":"resource-2","section":"resources","locales":{"en_us":{"slug":"resource-2","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:19:06.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Resource 2","entryType":"resources","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "}}},{"slug":"resource-3","section":"resources","locales":{"en_us":{"slug":"resource-3","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:19:14.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Resource 3","entryType":"resources","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "}}},{"slug":"resource-4","section":"resources","locales":{"en_us":{"slug":"resource-4","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:19:22.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Resource 4","entryType":"resources","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
