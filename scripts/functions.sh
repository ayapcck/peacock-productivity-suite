source ./scripts/colors.sh

length() {
    text=$1
    stripped_var=$(echo -e "$text" | sed "s/$(echo -e "\e")[^m]*m//g")
    echo ${#stripped_var}
}

echo_stars() {
    res="**"
    for ((i = 0; i < $1; i++)); do
        res="$res*"
    done
    echo -e "$blue$res**$NC"
}

fancy_echo() {
    string="$1"
    size=$(length "$1")
    star="$blue*"

    echo_stars $size
    echo -e "$star $NC$string $star"
    echo_stars $size
}

confirm_var() {
    var=$1
    var_name=$2
    question=$3
    fancy_echo "Is $green$var$NC correct? (y/N)"
    read -p "" yn
    echo ""
    if [[ $yn == "y" || $yn == "Y" ]]; then
        return 0
    elif [[ $yn == "n" || $yn == "N" ]]; then
        with_confirmation "$question" "$var_name"
    fi
}

with_confirmation() {
    question=$1
    local -n val=$2
    name=$2
    fancy_echo "$question"
    read -p "" val
    echo ""
    confirm_var "$val" "$name" "$question"
}
