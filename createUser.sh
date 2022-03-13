RED='\033[0;31m'
NC='\033[0m'

if [ $# -eq 0 ]
then
    echo $RED
    echo "$RED No arguments supplied$NC"
    exit 1
fi

mkdir -p ./src/users/$1
cp ./src/exercises/*.txt ./src/users/$1/.
if grep -q "$1" ./src/usernames; then
  echo "$1 already in list"
else
  echo "$1" >> ./src/usernames
fi
