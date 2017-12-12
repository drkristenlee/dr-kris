<?php
namespace Craft;

/**
 * Generated migration
 */
class m171212_163730_migration_section_bookPage extends BaseMigration
{
    /**
    Migration manifest:
    
    SECTION
        - bookPage
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":{"sections":[{"name":"Book Page","handle":"bookPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"book-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"book-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"bookPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Book Page","handle":"bookPage","fieldLayout":{"Mentalligence":["mentalligenceCallToAction","mentalligenceExcerpt","mentalligenceButtonText","whatIsMentalligence","praiseForMentalligence"],"Reset":["aboutReset","praiseForReset","resetButtonText"]},"requiredFields":["mentalligenceButtonText","whatIsMentalligence","aboutReset","resetButtonText"]}]}]},"elements":{"sections":[{"name":"Book Page","handle":"bookPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"book-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"book-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"bookPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Book Page","handle":"bookPage","fieldLayout":{"Mentalligence":["mentalligenceCallToAction","mentalligenceExcerpt","mentalligenceButtonText","whatIsMentalligence","praiseForMentalligence"],"Reset":["aboutReset","praiseForReset","resetButtonText"]},"requiredFields":["mentalligenceButtonText","whatIsMentalligence","aboutReset","resetButtonText"]}]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
