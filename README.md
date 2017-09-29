
Docs: Summary of the Music Memory Game Documents

Folder contains

I  musicMemory.html (contains html coding for the page)
     A) Header includes links bootstrap, jQuery, the css stylesheet file, the main javascript file, & the supplmentary javascript turtle graphics file. 
     B) Function to start top banner graphic animation starts upon load
     C) SixCellRow div includes canvases for graphic animation, timer, count, and visual representation of number of tries with stars[records]. Also includes the Play game which launches timer (and then disappears and the Restart button which creates new shuffle.
     D)  Cards are held in 4 gridRows in the gridContainer on lines 71-108. ClearLeft divs were included to address float glitches.
     E) Lines 116-163 create constructors and event listeners so that the javascript functions know and track which cards were selected last.
     F) Lines 170-bottom details the popup modal upon making all of the pairs.  It includes visual representation of success with numbers of records, time, and number of matching pair attempts.

II  musicMemory.js (contains most of functions for the page)
     A) Cars are defined in musicCardList on line 4
     B) To shuffle, select, match, and track cards, the master functions are included from approximately lines 8-81
     C) Helper functions are under line 81
     D) Functions to start or restart the game are toward bottom of file.

III musicMemory.css (style guide for the webpage)

IV musicTurtle.js (graphics for banner graphics and some of modal graphics)
     A) First graphic is for the spinning record at the top of the banner
     B) Second graphic is for the bouncing boombox at the top of the banner
     C) Third graphic is for the spinning golden records on the popup modal at the end.

Additional files:

V    eight named png cards that fuel the game   [thicke, beyonce, bobby_blue_bland, jill, taylor, fifty, siouxsie, & vogue]
VI   one graphic file for the back of the cards [music_card_back.png]
VII  one graphic file for the disappearing stars [records] on the top banner [goldStar]
VIII two sound effects mp3 files (guitarGrowl and needleScratch)




