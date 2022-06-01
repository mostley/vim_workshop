# vim_workshop

Some scripts and exercises for a ssh based VIM course. It contains a custom watcher based on jest to get an overview of the participants progress on the exercises.

## usage

* Ensure your server has a group named workshop with restricted rights but which users are allowed to log in via SSH.
  * groupadd workshop
  * edit ssh config
* Add the vimrc to the system
* install zsh via oh-my-zsh
* install vim
* npm install in the folder
* add users via adduser.sh
* prepare users via prepareUserShell.sh
* run npm test in the vim_workshop folder to start the watcher


## structure

* createUser.sh - creates a folder with exercises for the user and adds his name to the username list
* adduser.sh - adds a user to the system with password fablab
* prepareUserShell.sh - for each name in the arguments calls createUser.sh links the folder with exercises as the users home dir and adds configurations for vim and zsh also adds the user to the group workshop

## slides (german)

https://docs.google.com/presentation/d/13b-LezA079TYB3S6FyFSaStkyjxrF-gk6YjV66XAyfA/edit

## slides (english)

https://docs.google.com/presentation/d/1ZuF5szCk1LzxvMz15l-CgiT2c5JoNDkLaJkLHFA7Pbg/edit?usp=sharing
