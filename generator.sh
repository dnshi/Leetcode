#!/bin/bash

leetcode_url=$1
source_file=$2

sh ./comments.sh $leetcode_url $source_file
sh ./readme.sh $source_file
