#!/usr/bin/env bash
# Purpose: batch image resizer
# Source: https://guides.wp-bullet.com
# Author: Mike

# absolute path to image folder
FOLDER="/home/alex/repos/twportfolio/img/resized/scapes/"

# max height
WIDTH=2000

#resize jpg only to either height or width, keeps proportions using imagemagick
find ${FOLDER} -iname '*.jpg' -exec convert \{} -verbose -resize $WIDTH\> \{} \;
