<?php
namespace Craft;

/**
 * Generated migration
 */
class m171212_171225_migration_field_termsAndConditions_section_quizPage extends BaseMigration
{
    /**
    Migration manifest:
    
    FIELD
        - termsAndConditions
        
    SECTION
        - quizPage
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":{"sections":[{"name":"Quiz Page","handle":"quizPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"quiz-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"quiz-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"quizPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Quiz Page","handle":"quizPage","fieldLayout":{"Quiz Page":["termsAndConditions"]},"requiredFields":[]}]}]},"elements":{"fields":[{"group":"Quiz Page","name":"Terms and Conditions","handle":"termsAndConditions","instructions":"The PDF file for your terms and conditions for the Mentalligence Quiz","translatable":"0","required":false,"type":"Assets","typesettings":{"useSingleFolder":"1","sources":[],"defaultUploadLocationSource":"timelinePhotos","defaultUploadLocationSubpath":"","singleUploadLocationSource":"resources","singleUploadLocationSubpath":"","restrictFiles":"","limit":"1","viewMode":"list","selectionLabel":""}}],"sections":[{"name":"Quiz Page","handle":"quizPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"quiz-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"quiz-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"quizPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Quiz Page","handle":"quizPage","fieldLayout":{"Quiz Page":["termsAndConditions"]},"requiredFields":[]}]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
