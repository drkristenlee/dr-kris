<?php
namespace Craft;

/**
 * Generated migration
 */
class m171212_163715_migration_field_mentalligenceExcerpt_assetSource_resources extends BaseMigration
{
    /**
    Migration manifest:
    
    FIELD
        - mentalligenceExcerpt
        
    ASSETSOURCE
        - resources
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":{"assetSources":[{"name":"Resources","handle":"resources","type":"Local","sortOrder":"6","typesettings":{"path":"uploads/resources/","publicURLs":"","url":""}}]},"elements":{"fields":[{"group":"Book Page","name":"MentalligenceExcerpt","handle":"mentalligenceExcerpt","instructions":"Select the resource file that corresponds with the intro of Mentalligence you want to give visitors a sneak-peek of","translatable":"0","required":false,"type":"Assets","typesettings":{"useSingleFolder":"1","sources":[],"defaultUploadLocationSource":"timelinePhotos","defaultUploadLocationSubpath":"","singleUploadLocationSource":"resources","singleUploadLocationSubpath":"","restrictFiles":"","limit":"1","viewMode":"list","selectionLabel":""}}],"assetSources":[{"name":"Resources","handle":"resources","type":"Local","sortOrder":"6","typesettings":{"path":"uploads/resources/","publicURLs":"","url":""},"fieldLayout":[]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
