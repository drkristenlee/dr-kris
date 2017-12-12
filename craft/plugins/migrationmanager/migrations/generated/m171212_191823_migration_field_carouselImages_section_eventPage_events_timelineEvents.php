<?php
namespace Craft;

/**
 * Generated migration
 */
class m171212_191823_migration_field_carouselImages_section_eventPage_events_timelineEvents extends BaseMigration
{
    /**
    Migration manifest:
    
    FIELD
        - carouselImages
        
    SECTION
        - eventPage
        - events
        - timelineEvents
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"settings":{"dependencies":{"sections":[{"name":"Event Page","handle":"eventPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"event-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"event-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"eventPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Event Page","handle":"eventPage","fieldLayout":{"Event Page":["heroImage","carouselImages"]},"requiredFields":[]}]},{"name":"Events","handle":"events","type":"channel","enableVersioning":"1","hasUrls":"1","template":"events/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"events/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"events","hasTitleField":"1","titleLabel":"Title","name":"Events","handle":"events","fieldLayout":{"Content":["eventDescription","date","location"]},"requiredFields":["eventDescription","date","location"]}]},{"name":"Timeline Events","handle":"timelineEvents","type":"channel","enableVersioning":"1","hasUrls":"0","template":null,"maxLevels":null,"locales":{"en_us":"1"},"entrytypes":[{"sectionHandle":"timelineEvents","hasTitleField":"1","titleLabel":"Title","name":"Timeline Events","handle":"timelineEvents","fieldLayout":{"Content":["eventDate","eventInfo","eventImage"]},"requiredFields":["eventInfo"]}]}]},"elements":{"fields":[{"group":"Event Page","name":"Carousel Images","handle":"carouselImages","instructions":"Select the images you want to go on the carousel","translatable":"0","required":false,"type":"Entries","typesettings":{"sources":["eventCarousel"],"limit":"","selectionLabel":""}}],"sections":[{"name":"Event Page","handle":"eventPage","type":"single","enableVersioning":"1","hasUrls":"1","template":"event-page","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"event-page","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"eventPage","hasTitleField":"0","titleLabel":null,"titleFormat":"{section.name|raw}","name":"Event Page","handle":"eventPage","fieldLayout":{"Event Page":["heroImage","carouselImages"]},"requiredFields":[]}]},{"name":"Events","handle":"events","type":"channel","enableVersioning":"1","hasUrls":"1","template":"events/_entry","maxLevels":null,"locales":{"en_us":{"locale":"en_us","urlFormat":"events/{slug}","nestedUrlFormat":null,"enabledByDefault":"1"}},"entrytypes":[{"sectionHandle":"events","hasTitleField":"1","titleLabel":"Title","name":"Events","handle":"events","fieldLayout":{"Content":["eventDescription","date","location"]},"requiredFields":["eventDescription","date","location"]}]},{"name":"Timeline Events","handle":"timelineEvents","type":"channel","enableVersioning":"1","hasUrls":"0","template":null,"maxLevels":null,"locales":{"en_us":"1"},"entrytypes":[{"sectionHandle":"timelineEvents","hasTitleField":"1","titleLabel":"Title","name":"Timeline Events","handle":"timelineEvents","fieldLayout":{"Content":["eventDate","eventInfo","eventImage"]},"requiredFields":["eventInfo"]}]}]}}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
