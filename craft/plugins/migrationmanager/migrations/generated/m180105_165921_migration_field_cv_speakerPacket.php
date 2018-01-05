<?php
namespace Craft;

/**
 * Generated migration
 */
class m180105_165921_migration_field_cv_speakerPacket extends BaseMigration
{
    /**
    Migration manifest:
    
    FIELD
        - cv
        - speakerPacket
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":[],"elements":{"fields":[{"group":"About Page","name":"CV","handle":"cv","instructions":"This is the cv and shadow cv that can be downloaded.","translatable":"0","required":false,"type":"Assets","typesettings":{"useSingleFolder":"","sources":["resources"],"defaultUploadLocationSource":"timelinePhotos","defaultUploadLocationSubpath":"","singleUploadLocationSource":"timelinePhotos","singleUploadLocationSubpath":"","restrictFiles":"","limit":"1","viewMode":"list","selectionLabel":"Upload CV"}},{"group":"About Page","name":"Speaker Packet","handle":"speakerPacket","instructions":"This is the professional bio and speaker\u0027s packet that can be downloaded.","translatable":"0","required":false,"type":"Assets","typesettings":{"useSingleFolder":"","sources":["resources"],"defaultUploadLocationSource":"resources","defaultUploadLocationSubpath":"","singleUploadLocationSource":"timelinePhotos","singleUploadLocationSubpath":"","restrictFiles":"","limit":"1","viewMode":"list","selectionLabel":"Upload speaker packet"}}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
