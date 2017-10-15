<?php
namespace Craft;

/**
 * Generated migration
 */
class m171015_215728_migration_field_body_date_description_eventDescription_headingQuote_location_section_events_homepage_landingQuotes_news_resources extends BaseMigration
{
    /**
    Migration manifest:
    
    FIELD
        - body
        - date
        - description
        - eventDescription
        - headingQuote
        - location
        
    SECTION
        - events
        - homepage
        - landingQuotes
        - news
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
	    $json = '{"settings":{"dependencies":{"sections":[{"name":"Events","handle":"events","type":"channel","enableVersioning":"1","hasUrls":"1","template":"events/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"events/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"events","hasTitleField":"1","titleLabel":"Title","name":"Events","handle":"events","fieldLayout":{"Content":["eventDescription","date","location"]},"requiredFields":[]}]},{"name":"Homepage","handle":"homepage","type":"single","enableVersioning":"1","hasUrls":"1","template":"index","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"__home__","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"homepage","hasTitleField":"1","titleLabel":"Title","name":"Homepage","handle":"homepage","fieldLayout":{"Content":["body"]},"requiredFields":["body"]}]},{"name":"Landing Quotes","handle":"landingQuotes","type":"channel","enableVersioning":"1","hasUrls":"0","template":null,"maxLevels":null,"locales":{"en_us":"1"},"entrytypes":[{"sectionHandle":"landingQuotes","hasTitleField":"0","titleLabel":null,"titleFormat":"{headingQuote}","name":"Landing Quotes","handle":"landingQuotes","fieldLayout":{"Content":["headingQuote"]},"requiredFields":[]}]},{"name":"News","handle":"news","type":"channel","enableVersioning":"1","hasUrls":"1","template":"news/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"news/{postDate.year}/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"news","hasTitleField":"1","titleLabel":"Title","name":"News","handle":"news","fieldLayout":{"Content":["body","tags"]},"requiredFields":["body"]}]},{"name":"Resources","handle":"resources","type":"channel","enableVersioning":"1","hasUrls":"1","template":"resources/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"resources/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"resources","hasTitleField":"1","titleLabel":"Title","name":"Resources","handle":"resources","fieldLayout":{"Content":["description"]},"requiredFields":[]}]}]},"elements":{"fields":[{"group":"Default","name":"Body","handle":"body","instructions":null,"translatable":"1","required":false,"type":"RichText","typesettings":{"configFile":"Standard.json","columnType":"text","availableAssetSources":[]}},{"group":"Event","name":"Date","handle":"date","instructions":"Enter the date of the event you are creating","translatable":"0","required":false,"type":"Date","typesettings":{"minuteIncrement":"30","showDate":1,"showTime":0}},{"group":"Resource","name":"Description","handle":"description","instructions":"Enter a description of the resource to explain what it is","translatable":"0","required":false,"type":"PlainText","typesettings":{"placeholder":"","maxLength":"100","multiline":"","initialRows":"4"}},{"group":"Event","name":"EventDescription","handle":"eventDescription","instructions":"Enter the description of the event that will be used for short previews","translatable":"0","required":false,"type":"PlainText","typesettings":{"placeholder":"","maxLength":"","multiline":"","initialRows":"4"}},{"group":"Quote","name":"Heading Quote","handle":"headingQuote","instructions":"Enter in the text of the quote you want to go at the top of the landing page. Do not include quotation marks, those will be generated automatically. ","translatable":"0","required":false,"type":"PlainText","typesettings":{"placeholder":"Enter hero quote here..","maxLength":"","multiline":"","initialRows":"4"}},{"group":"Event","name":"Location","handle":"location","instructions":"Give details on the location of the event","translatable":"0","required":false,"type":"PlainText","typesettings":{"placeholder":"","maxLength":"","multiline":"","initialRows":"4"}}],"sections":[{"name":"Events","handle":"events","type":"channel","enableVersioning":"1","hasUrls":"1","template":"events/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"events/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"events","hasTitleField":"1","titleLabel":"Title","name":"Events","handle":"events","fieldLayout":{"Content":["eventDescription","date","location"]},"requiredFields":[]}]},{"name":"Homepage","handle":"homepage","type":"single","enableVersioning":"1","hasUrls":"1","template":"index","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"__home__","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"homepage","hasTitleField":"1","titleLabel":"Title","name":"Homepage","handle":"homepage","fieldLayout":{"Content":["body"]},"requiredFields":["body"]}]},{"name":"Landing Quotes","handle":"landingQuotes","type":"channel","enableVersioning":"1","hasUrls":"0","template":null,"maxLevels":null,"locales":{"en_us":"1"},"entrytypes":[{"sectionHandle":"landingQuotes","hasTitleField":"0","titleLabel":null,"titleFormat":"{headingQuote}","name":"Landing Quotes","handle":"landingQuotes","fieldLayout":{"Content":["headingQuote"]},"requiredFields":[]}]},{"name":"News","handle":"news","type":"channel","enableVersioning":"1","hasUrls":"1","template":"news/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"news/{postDate.year}/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"news","hasTitleField":"1","titleLabel":"Title","name":"News","handle":"news","fieldLayout":{"Content":["body","tags"]},"requiredFields":["body"]}]},{"name":"Resources","handle":"resources","type":"channel","enableVersioning":"1","hasUrls":"1","template":"resources/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"resources/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"resources","hasTitleField":"1","titleLabel":"Title","name":"Resources","handle":"resources","fieldLayout":{"Content":["description"]},"requiredFields":[]}]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
