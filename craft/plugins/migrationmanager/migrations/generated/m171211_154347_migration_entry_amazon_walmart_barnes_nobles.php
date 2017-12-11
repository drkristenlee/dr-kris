<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154347_migration_entry_amazon_walmart_barnes_nobles extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - amazon
        - walmart
        - barnes-nobles
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"amazon","section":"resetBuyLinks","locales":{"en_us":{"slug":"amazon","section":"resetBuyLinks","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-11-30 06:34:35.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Amazon","entryType":"resetBuyLinks","buyLink":"https://www.amazon.com/RESET-Make-Most-Stress-Well-Being/dp/1491747552","seller":"Amazon"}}},{"slug":"walmart","section":"resetBuyLinks","locales":{"en_us":{"slug":"walmart","section":"resetBuyLinks","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-11-30 06:35:05.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"WalMart","entryType":"resetBuyLinks","buyLink":"https://www.walmart.com/ip/Reset-Make-the-Most-of-Your-Stress-Your-24-7-Plan-for-Well-Being/53075802?wmlspartner=wlpa&selectedSellerId=0&adid=22222222227091087059&wmlspartner=wmtlabs&wl0=&wl1=g&wl2=c&wl3=204419602051&wl4=pla-354955738074&wl5=9001979&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=online&wl12=53075802&wl13=&veh=sem","seller":"WalMart"}}},{"slug":"barnes-nobles","section":"resetBuyLinks","locales":{"en_us":{"slug":"barnes-nobles","section":"resetBuyLinks","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-11-30 06:35:31.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Barnes & Nobles","entryType":"resetBuyLinks","buyLink":"https://www.barnesandnoble.com/w/reset-edd-licsw-kristen-lee-costa/1120677295?ean=9781491747568&st=PLA&sid=NOK_DRS_NOOK+EBooks_00000000&2sid=Google_&sourceId=PLGoP75008&gclid=Cj0KCQiA0vnQBRDmARIsAEL0M1mDbT7JC46xozPyLcLpCskrFxUsH-WGU24zMWkYXFgTrq2YluesKawaAhWqEALw_wcB","seller":"Barnes & Nobles"}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
