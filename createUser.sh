mkdir -p ./src/users/$1
cp ./src/exercises/*.txt ./src/users/$1/.
echo "$1" >> ./src/usernames
