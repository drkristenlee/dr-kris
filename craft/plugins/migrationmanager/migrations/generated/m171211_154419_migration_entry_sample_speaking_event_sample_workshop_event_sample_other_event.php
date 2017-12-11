<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154419_migration_entry_sample_speaking_event_sample_workshop_event_sample_other_event extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - sample-speaking-event
        - sample-workshop-event
        - sample-other-event
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"sample-speaking-event","section":"events","locales":{"en_us":{"slug":"sample-speaking-event","section":"events","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:56:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Sample Speaking Event","entryType":"events","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","date":{"date":"2018-01-26 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Some location"}}},{"slug":"sample-workshop-event","section":"events","locales":{"en_us":{"slug":"sample-workshop-event","section":"events","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:57:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Sample Workshop Event","entryType":"events","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","date":{"date":"2017-12-22 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Boston, MA"}}},{"slug":"sample-other-event","section":"events","locales":{"en_us":{"slug":"sample-other-event","section":"events","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 18:57:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Sample Other Event","entryType":"events","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","date":{"date":"2017-12-28 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Some location"}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
