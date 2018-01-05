<?php
namespace Craft;

/**
 * Generated migration
 */
class m180105_165928_migration_section_aboutPage extends BaseMigration
{
    /**
    Migration manifest:
    
    SECTION
        - aboutPage
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":{"sections":[{"name":"About Page","handle":"aboutPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"about-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"about-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"aboutPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"About Page","handle":"aboutPage","fieldLayout":{"Content":["bio","bioImage","speakerPacket","cv"]},"requiredFields":["bio"]}]}]},"elements":{"sections":[{"name":"About Page","handle":"aboutPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"about-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"about-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"aboutPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"About Page","handle":"aboutPage","fieldLayout":{"Content":["bio","bioImage","speakerPacket","cv"]},"requiredFields":["bio"]}]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
