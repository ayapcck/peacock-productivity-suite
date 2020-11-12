#!/bin/bash

Echo "Set envrionment to:"

read user_env

env=".env"
if [ $user_env = "production" ]; then
    env=".env.production"
fi

for line in $(cat $env)
do
    export "$line"
done