<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154321_migration_entry_resource_1_resource_2_resource_3_resource_4_resource_5_resource_6 extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - resource-1
        - resource-2
        - resource-3
        - resource-4
        - resource-5
        - resource-6
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"resource-1","section":"resources","locales":{"en_us":{"slug":"resource-1","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:18:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"AWIS Presentation","entryType":"resources","description":"PPT slides from AWIS presentation","resourceFile":[{"elementType":"Asset","filename":"AWIS-presentation.pptx","folder":"Resources","source":"resources"}]}}},{"slug":"resource-2","section":"resources","locales":{"en_us":{"slug":"resource-2","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:19:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Slides for GRI Presentation","entryType":"resources","description":"PowerPoint of slides from GRI presentation","resourceFile":[{"elementType":"Asset","filename":"Slides-for-GRI.pptx","folder":"Resources","source":"resources"}]}}},{"slug":"resource-3","section":"resources","locales":{"en_us":{"slug":"resource-3","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:19:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Reset Book Club Discussion Guide","entryType":"resources","description":"Draft of Reset Book Club discussion guide and talking points","resourceFile":[{"elementType":"Asset","filename":"Reset-Book-Club-Discussion-Guide.doc","folder":"Resources","source":"resources"}]}}},{"slug":"resource-4","section":"resources","locales":{"en_us":{"slug":"resource-4","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-10-14 19:19:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Mentalligence Book Club Discussion Guide","entryType":"resources","description":"","resourceFile":[{"elementType":"Asset","filename":"Mentalligence-Book-Club.doc","folder":"Resources","source":"resources"}]}}},{"slug":"resource-5","section":"resources","locales":{"en_us":{"slug":"resource-5","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-11-16 05:18:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Dr. Kris Speaking Packet 2017","entryType":"resources","description":"Speakers packet for Dr. Kris, updated Nov. 2017","resourceFile":[{"elementType":"Asset","filename":"Dr.-Kristen-Lee-Speakers-Packet-2017.pdf","folder":"Resources","source":"resources"}]}}},{"slug":"resource-6","section":"resources","locales":{"en_us":{"slug":"resource-6","section":"resources","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-11-16 05:18:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Reset Model PDF","entryType":"resources","description":"PDF of the model covered by RESET","resourceFile":[{"elementType":"Asset","filename":"Dr.-Kristen-Lee-Reset-Model-PDF.pdf","folder":"Resources","source":"resources"}]}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
