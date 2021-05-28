$(function() {
    console.log('Script linked');

    // array to hold tags taken from images
    let tags = [];
    let taggedImages = {};

    // iterating through images
    $('img').each(function() {
        console.warn('Image loop');
        $img = $(this);
        console.log($img);

        let $tagString = $(this).data('tags');
        
        // array that contains the tags of the current image
        let $arrayString = $tagString.split(',');
        console.log('This image has the following tags: ' + $tagString);
        
        // adding new tags of the current image to the tags array
        $arrayString.forEach(item => {
            if (!tags.includes(item)) {
                tags.push(item);
            }
            console.log('Unique tags so far: ' + tags);

            //adding current tag as a property of the taggedImages array
            if(taggedImages[item] == null) {
                taggedImages[item] = [];
            }
            // adding image to the corresponding tags in the taggedImages array
            taggedImages[item].push($img);
        });

        console.log('TaggedImages:', taggedImages['animals']);
    });
    console.log('Number of total tags: ' + tags.length);
});