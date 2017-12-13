<?php
namespace Craft;

return [
    'endpoints' => [
        'api/resources.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 6,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'resources'],
            'transformer' => function(EntryModel $entry) {
                if (isset($entry->resourceFile[0])) {
                    $srcFile = $entry->resourceFile[0];
                    $assetUrl = $srcFile->getPath();
                }   
                return [
                    'title' => $entry->title,
                    'date' => $entry->dateCreated->w3cDate(),
                    'filePath' => $assetUrl,
                    'fileType' => pathinfo($assetUrl, PATHINFO_EXTENSION)
                ];
            },
        ],
        'api/press_media.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'press', 'type' => 'pressVideoAndPodcasts', 'order' => 'dateUpdated desc'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'publication' => $entry->publication,
                    'publicationDate' => $entry->publicationDate,
                    'description' => $entry->description,
                    'linkToContent' => $entry->linkToContent,
                    'thumbnailImageUrl' => $entry->thumbnailImageUrl
                ];
            },
        ],
        'api/press_mentioned.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'press', 'type' => 'pressMentionedIn', 'order' => 'dateUpdated desc'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'publication' => $entry->publication,
                    'publicationDate' => $entry->publicationDate,
                    'description' => $entry->description,
                    'linkToContent' => $entry->linkToContent,
                    'thumbnailImageUrl' => $entry->thumbnailImageUrl
                ];
            },
        ],
        'api/press_written.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'press', 'type' => 'pressWrittenBy', 'order' => 'dateUpdated desc'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'publication' => $entry->publication,
                    'publicationDate' => $entry->publicationDate,
                    'description' => $entry->description,
                    'linkToContent' => $entry->linkToContent,
                    'thumbnailImageUrl' => $entry->thumbnailImageUrl
                ];
            },
        ],
        'api/events_upcoming.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'events', 'date' => ['>=' . date("Y-m-d H:i:s.u")], 'order' => 'date asc'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'description' => $entry->eventDescription,
                    'date' => $entry->date->w3cDate(),
                    'location' => $entry->location
                ];
            },
        ],
        'api/quiz_terms.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'quizPage'],
            'transformer' => function(EntryModel $entry) {
                if (isset($entry->termsAndConditions[0])) {
                    $srcFile = $entry->termsAndConditions[0];
                    $termsUrl = $srcFile->getPath();
                }   
                return [
                    'terms' => $termsUrl,
                ];
            },
        ],
    ]
];