<?php
namespace Craft;

/**
 * Generated migration
 */
class m171211_154414_migration_entry_abbe_thor extends BaseMigration
{
    /**
    Migration manifest:
    
    ENTRY
        - abbe
        - thor
        
    */
	/**
	 * Any migration code in here is wrapped inside of a transaction.
	 * Returning false will rollback the migration
	 *
	 * @return bool
	 */
	public function safeUp()
	{
	    $json = '{"content":{"entries":[{"slug":"abbe","section":"meetTheTeam","locales":{"en_us":{"slug":"abbe","section":"meetTheTeam","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 01:44:00.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Abbe","entryType":"meetTheTeam","memberBio":"Abigail Nasshan is a certified Human Capital coach, who lives and breathes human connection. She was the winner of the 2016 Northeastern University case study writing competition, holds a M.S. in Non-profit Management and Leadership from Northeastern University and a B.A. from Smith College. Abbe has brought impact in the health and non-profit arenas in a vast range of roles and settings, wielding her finesse to maximize outcomes for executive leadership teams. In her spare time, she can be found meditating, running, knitting, watching documentaries, and attempting a more minimalistic life.","position":"Communications Director","memberProfileImage":[{"elementType":"Asset","filename":"NasshanOConnell_Headshot.jpg","folder":"Meet the Team","source":"meetTheTeam"}]}}},{"slug":"thor","section":"meetTheTeam","locales":{"en_us":{"slug":"thor","section":"meetTheTeam","enabled":"1","locale":"en_us","localeEnabled":"1","postDate":{"date":"2017-12-04 01:44:33.000000","timezone_type":3,"timezone":"UTC"},"expiryDate":null,"title":"Thor","entryType":"meetTheTeam","memberBio":"Thor Blanco-Reynoso is an educator dedicated to ensuring equity for all. He has served as a Behavioral Science intern and teaching assistant at Northeastern University and holds a B.S. in Psychology. Thor has brought impact through a wide range of professional and volunteer roles, bringing his genuine love for people to help leverage the human condition. In his spare time, he can be found speaking Spanish, Portuguese and Italian, traveling, playing soccer, chatting about his latest research discovery, and spending time with his loved ones.","position":"Global Liaison/Trainer","memberProfileImage":[{"elementType":"Asset","filename":"ThorBlanco.jpg","folder":"Meet the Team","source":"meetTheTeam"}]}}}]}}';
        return craft()->migrationManager_migrations->import($json);
    }

}
