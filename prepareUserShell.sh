RED='\033[0;31m'
NC='\033[0m'

if [ $# -eq 0 ]
then
    echo $RED
    echo "$RED No arguments supplied$NC"
    exit 1
fi

for USERNAME in $@
do
        USER_HOME=/home/$USERNAME
        USER_DIR=/home/vim_workshop/src/users/$USERNAME

        cd /home/vim_workshop/
        ./createUser.sh $USERNAME

        rm -rf $USER_HOME
        ln -s $USER_DIR $USER_HOME
        cp /root/.zshrc $USER_HOME/.
        cp -r /root/.oh-my-zsh $USER_HOME/.
        cp /root/.vimrc $USER_HOME/.
        chown -R $USERNAME:$USERNAME $USER_HOME
        chown -R $USERNAME:$USERNAME $USER_DIR
        usermod -a -G workshop sven
        usermod --password $(echo fablab | openssl passwd -1 -stdin) $USERNAME
done

