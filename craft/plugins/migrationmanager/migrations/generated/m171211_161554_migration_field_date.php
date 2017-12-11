<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_161554_migration_field_date extends BaseMigration
{
    /**
    Migration manifest:
    
    FIELD
        - date
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":[],"elements":{"fields":[{"group":"Event","name":"Date","handle":"date","instructions":"Enter the date of the event you are creating","translatable":"0","required":false,"type":"Date","typesettings":{"minuteIncrement":"30","showDate":1,"showTime":0}}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
