<?php
namespace Craft;

return [
    'endpoints' => [
        'api/resources.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 3,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'resources'],
            'transformer' => function(EntryModel $entry) {
                if (isset($entry->resourceFile[0])) {
                    $srcFile = $entry->resourceFile[0];
                    $assetUrl = $srcFile->getPath();
                }   
                
                return [
                    'title' => $entry->title,
                    'date' => $entry->dateCreated,
                    'filePath' => $assetUrl,
                    'fileType' => pathinfo($assetUrl, PATHINFO_EXTENSION)
                ];
            },
        ],
        'api/press_media.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'press', 'type' => 'pressVideoAndPodcasts'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'publication' => $entry->publication,
                    'publicationDate' => $entry->publicationDate,
                    'description' => $entry->title,
                    'linkToContent' => $entry->linkToContent,
                    'thumbnailImageUrl' => $entry->thumbnailImageUrl
                ];
            },
        ],
        'api/press_mentioned.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'press', 'type' => 'pressMentionedIn'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'publication' => $entry->publication,
                    'publicationDate' => $entry->publicationDate,
                    'description' => $entry->title,
                    'linkToContent' => $entry->linkToContent,
                    'thumbnailImageUrl' => $entry->thumbnailImageUrl
                ];
            },
        ],
        'api/press_written.json' => [
            'elementType' => 'Entry',
            'elementsPerPage' => 4,
            'pageParam' => 'pg',
            'criteria' => ['section' => 'press', 'type' => 'pressWrittenBy'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'publication' => $entry->publication,
                    'publicationDate' => $entry->publicationDate,
                    'description' => $entry->title,
                    'linkToContent' => $entry->linkToContent,
                    'thumbnailImageUrl' => $entry->thumbnailImageUrl
                ];
            },
        ],
    ]
];