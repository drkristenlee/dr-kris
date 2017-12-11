<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154423_migration_entry_mindfulness_matters_harvard_kennedy_school_book_event_360_corporate_wellbeing_indie_book_awards_northeastern_resident_assistants_talk_harvard_medical_school_talk extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - mindfulness-matters
        - harvard-kennedy-school-book-event
        - 360-corporate-wellbeing
        - indie-book-awards
        - northeastern-resident-assistants-talk
        - harvard-medical-school-talk
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"mindfulness-matters","section":"eventCarousel","locales":{"en_us":{"slug":"mindfulness-matters","section":"eventCarousel","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 05:50:10.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Mindfulness Matters","entryType":"eventCarousel","date":{"date":"2017-09-04 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Somewhere, Earth","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","carouselImage":[{"elementType":"Asset","filename":"Minfulness Matters.jpg","folder":"Event Page Photos","source":"eventPagePhotos"}]}}},{"slug":"harvard-kennedy-school-book-event","section":"eventCarousel","locales":{"en_us":{"slug":"harvard-kennedy-school-book-event","section":"eventCarousel","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 05:51:45.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Harvard Kennedy School Book Event","entryType":"eventCarousel","date":{"date":"2017-10-12 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Cambridge, MA","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","carouselImage":[{"elementType":"Asset","filename":"Harvard Kennedy School.JPG","folder":"Event Page Photos","source":"eventPagePhotos"}]}}},{"slug":"360-corporate-wellbeing","section":"eventCarousel","locales":{"en_us":{"slug":"360-corporate-wellbeing","section":"eventCarousel","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 05:52:30.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"360 Corporate Wellbeing","entryType":"eventCarousel","date":{"date":"2017-04-14 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Boston, MA","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","carouselImage":[{"elementType":"Asset","filename":"360 Corporate Wellbeing.JPG","folder":"Event Page Photos","source":"eventPagePhotos"}]}}},{"slug":"indie-book-awards","section":"eventCarousel","locales":{"en_us":{"slug":"indie-book-awards","section":"eventCarousel","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 05:54:18.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Indie Book Awards","entryType":"eventCarousel","date":{"date":"2017-01-20 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"New York City, NY","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","carouselImage":[{"elementType":"Asset","filename":"Indie Book Awards New York.JPG","folder":"Event Page Photos","source":"eventPagePhotos"}]}}},{"slug":"northeastern-resident-assistants-talk","section":"eventCarousel","locales":{"en_us":{"slug":"northeastern-resident-assistants-talk","section":"eventCarousel","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 05:54:58.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Northeastern Resident Assistants Talk","entryType":"eventCarousel","date":{"date":"2017-08-14 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Boston, MA","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","carouselImage":[{"elementType":"Asset","filename":"Northeatern Residential Assistants.JPG","folder":"Event Page Photos","source":"eventPagePhotos"}]}}},{"slug":"harvard-medical-school-talk","section":"eventCarousel","locales":{"en_us":{"slug":"harvard-medical-school-talk","section":"eventCarousel","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 05:55:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Harvard Medical School Talk","entryType":"eventCarousel","date":{"date":"2017-11-06 00:00:00.000000","timezone_type":3,"timezone":"UTC"},"location":"Boston, MA","eventDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","carouselImage":[{"elementType":"Asset","filename":"Harvard Medical School.JPG","folder":"Event Page Photos","source":"eventPagePhotos"}]}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
