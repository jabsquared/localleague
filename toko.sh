#!/bin/zsh
# To use, do ./toko.sh with appropriate commands:
case "$1" in
    deploy)
    git checkout deploy
    git merge master
    git push
    git checkout master
    ;;
    *)
        help
    ;;
esac
