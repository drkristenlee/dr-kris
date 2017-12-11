<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154408_migration_entry_amazon extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - amazon
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"amazon","section":"mentalligenceBuyLinks","locales":{"en_us":{"slug":"amazon","section":"mentalligenceBuyLinks","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 03:40:20.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Amazon","entryType":"mentalligenceBuyLinks","buyLink":"https://www.amazon.com/Mentalligence-Psychology-Thinking-Learn-Mindful-Connected/dp/0757320570","seller":"Amazon"}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
