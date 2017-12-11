<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154431_migration_entry_harvard_kennedy_school_virgin_pulse_johnson_johnson_mclean_hospital_harvard_medical_school_national_institute_on_the_teaching_of_psychology_national_alliance_on_mental_illness_emerson_college_boston_ballet_association_f extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - harvard-kennedy-school
        - virgin-pulse
        - johnson-johnson
        - mclean-hospital-harvard-medical-school
        - national-institute-on-the-teaching-of-psychology
        - national-alliance-on-mental-illness
        - emerson-college
        - boston-ballet
        - association-for-women-in-science
        - girl-scouts-of-america
        - tedx
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"harvard-kennedy-school","section":"clientList","locales":{"en_us":{"slug":"harvard-kennedy-school","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:29:33.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Harvard Kennedy School","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"harvard_kennedy.svg","folder":"Clients","source":"clients"}]}}},{"slug":"virgin-pulse","section":"clientList","locales":{"en_us":{"slug":"virgin-pulse","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:29:51.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Virgin Pulse","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"virgin-color.png","folder":"Clients","source":"clients"}]}}},{"slug":"johnson-johnson","section":"clientList","locales":{"en_us":{"slug":"johnson-johnson","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:30:10.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Johnson & Johnson","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"1024px-JohnsonandJohnsonLogo.svg.png","folder":"Clients","source":"clients"}]}}},{"slug":"mclean-hospital-harvard-medical-school","section":"clientList","locales":{"en_us":{"slug":"mclean-hospital-harvard-medical-school","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:30:31.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"McLean Hospital (Harvard Medical School)","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"McLean-Hospital.png","folder":"Clients","source":"clients"}]}}},{"slug":"national-institute-on-the-teaching-of-psychology","section":"clientList","locales":{"en_us":{"slug":"national-institute-on-the-teaching-of-psychology","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:31:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"National Institute on the Teaching of Psychology","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"nitop.png","folder":"Clients","source":"clients"}]}}},{"slug":"national-alliance-on-mental-illness","section":"clientList","locales":{"en_us":{"slug":"national-alliance-on-mental-illness","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:31:48.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"National Alliance on Mental Illness","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"nami-logo-blue.gif","folder":"Clients","source":"clients"}]}}},{"slug":"emerson-college","section":"clientList","locales":{"en_us":{"slug":"emerson-college","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:32:25.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Emerson College","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"emerson-college.png","folder":"Clients","source":"clients"}]}}},{"slug":"boston-ballet","section":"clientList","locales":{"en_us":{"slug":"boston-ballet","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:32:40.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Boston Ballet","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"boston-ballet-logo.png","folder":"Clients","source":"clients"}]}}},{"slug":"association-for-women-in-science","section":"clientList","locales":{"en_us":{"slug":"association-for-women-in-science","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:33:12.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Association for Women in Science","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"AWIS_logo_GTW.png","folder":"Clients","source":"clients"}]}}},{"slug":"girl-scouts-of-america","section":"clientList","locales":{"en_us":{"slug":"girl-scouts-of-america","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:33:27.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Girl Scouts of America","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"girl-scouts.png","folder":"Clients","source":"clients"}]}}},{"slug":"tedx","section":"clientList","locales":{"en_us":{"slug":"tedx","section":"clientList","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 02:33:39.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"TedX","entryType":"clientList","clientLogo":[{"elementType":"Asset","filename":"tedx-logo.png","folder":"Clients","source":"clients"}]}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
