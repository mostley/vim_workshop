RED='\033[0;31m'
NC='\033[0m'

if [ $# -eq 0 ]
then
    echo $RED
    echo "$RED No arguments supplied$NC"
    exit 1
fi

USER_HOME=/home/$1
USER_DIR=/home/vim_workshop/src/users/$1

rm -rf $USER_HOME
ln -s $USER_DIR $USER_HOME
cp /root/.zshrc $USER_HOME/.
cp -r /root/.oh-my-zsh $USER_HOME
cp /root/.vimrc $USER_HOME/.
chown -R $1:$1 $USER_HOME
chown -R $1:$1 $USER_DIR
usermod -a -G workshop sven
cd /home/vim_workshop/
./createUser.sh $1
