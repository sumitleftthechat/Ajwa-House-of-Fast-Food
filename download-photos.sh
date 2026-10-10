#!/usr/bin/env bash
# Downloads the 21 Unsplash photos into assets/photos/. Run once from this folder:  bash download-photos.sh
set -e
mkdir -p assets/photos
dl(){ curl -L --fail -sS -o "assets/photos/$1.jpg" "https://images.unsplash.com/photo-$2?auto=format&fit=crop&w=1000&q=75" && echo "ok  $1.jpg"; }
dl hero 1551782450-a2132b4ba21d
dl about 1622021142947-da7dedc7c39a
dl cta 1604382354936-07c5d9983bd3
dl burger 1615297928064-24977384d0da
dl chickenpizza 1734769484424-36b99dd84818
dl vegpizza 1590947132387-155cc02f3212
dl vegpizza2 1573821663912-569905455b1c
dl chickensandwich 1703219342329-fce8488cf443
dl vegsandwich 1528735602780-2552fd46c7af
dl wrap 1632660346941-023cc64e1252
dl shawarma 1719282431723-9d0f4370d4bc
dl fries 1630384060421-cb20d0e0649d
dl panipuri 1781243680771-1fea4521e196
# gulab.jpg is your own photo and ships with the site (not downloaded)
dl soda 1527960471264-932f39eb5846
dl g1 1551782450-17144efb9c50
dl g2 1513185158878-8d8c2a2a3da3
dl g3 1618213837799-25d5552820d3
dl g4 1528736235302-52922df5c122
dl g5 1518013431117-eb1465fa5752
dl g6 1529006557810-274b9b2fc783
echo "Done: $(ls assets/photos | wc -l) photos in assets/photos"
