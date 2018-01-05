<?php
namespace Craft;

/**
 * Generated migration
 */
class m180105_165736_migration_entry_about_page extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - about-page
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"about-page","section":"aboutPage","locales":{"en_us":{"slug":"about-page","section":"aboutPage","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2018-01-05 16:00:53.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"About Page","entryType":"aboutPage","bio":"My biggest takeaway from spending the last twenty plus years as a clinician, educator, researcher and activist? That everything is learning and learning is everything. Lessons are always ours for the finding, if we stay woke. I live and breathe and eat and study human resilience, authenticity and identity. I\u2019ve spent my entire life in a love/hate relationship with my anxiety, my one true frenemy.\r\n\r\nI write to teach, to cope, and to spur on change\u2014to try to make sense of our complicated and gorgeous human condition. Mostly, this happens by rethinking and unlearning what we\u2019re first sold.\r\nI love serving as the Lead Faculty for Behavioral Science at Northeastern University. Even though I consider myself a global citizen, I adore my wicked awesome and Bostonstrong city.\r\n\r\nMy children and my students have taught me as much as I\u2019ve taught them. I believe human progress is always possible. But first, we need to stop romanticizing resilience, and get honest about the conditions that cause us to need it in the first place. Despite what\u2019s being Chicken Littled out there, we have a lot more in common than we realize. I can\u2019t stand pretentiousness. We shine brightest in raw, underdog, misfit mode, not airbrushed, forms. I have no place for fake it \u2018til you make it or hierarchy in my heart.\r\n\r\nIn my spare time, I can be found out on the running trails and attempting tricky yoga poses. I love peanut butter cups and kale juice\u2014but not at the same time.\r\n\r\nMy \u201crecovery\u201d as a perfectionist is a bit of a circus, but it keeps things entertaining.\r\n\r\nSo glad you\u2019re here-- take awesome care!","bioImage":[{"elementType":"Asset","filename":"bio-color.jpg","folder":"Dr Kris","source":"drKris"}],"speakerPacket":[{"elementType":"Asset","filename":"PDF-Final-Speakers-Packet.pdf","folder":"Resources","source":"resources"}],"cv":[{"elementType":"Asset","filename":"PDF-Dr.-Kristen-Lee-CV-December-2017.pdf","folder":"Resources","source":"resources"}]}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
