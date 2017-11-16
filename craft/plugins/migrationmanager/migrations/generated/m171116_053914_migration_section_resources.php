<?php
namespace Craft;

/**
 * Generated migration
 */
class m171116_053914_migration_section_resources extends BaseMigration
{
    /**
    Migration manifest:
    
    SECTION
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
	    $json = '{"settings":{"dependencies":{"sections":[{"name":"Resources","handle":"resources","type":"channel","enableVersioning":"1","hasUrls":"1","template":"resources/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"resources/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"resources","hasTitleField":"1","titleLabel":"Title","name":"Resources","handle":"resources","fieldLayout":{"Content":["description"]},"requiredFields":[]}]}]},"elements":{"sections":[{"name":"Resources","handle":"resources","type":"channel","enableVersioning":"1","hasUrls":"1","template":"resources/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"resources/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"resources","hasTitleField":"1","titleLabel":"Title","name":"Resources","handle":"resources","fieldLayout":{"Content":["description"]},"requiredFields":[]}]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
