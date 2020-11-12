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
    echo -e "$blue$res**"
    reset_colors
}

fancy_echo() {
    string="$1"
    size=$(length "$1")
    star="$blue*"

    echo_stars $size
    printf "$star $NC$string $star\n"
    echo_stars $size
    reset_colors
}

confirm_var() {
    var=$1
    question=$2
    fancy_echo "Is $green$var$NC correct?"
    select yn in "Yes" "No"; do
        case $yn in
            Yes) echo $var; break;;
            No) with_confirmation "$question"; break;;
        esac
    done
}

with_confirmation() {
    question=$1
    fancy_echo "$question"
    read var; echo ""
    confirm_var $var "$question"
}

with_confirmation "What is the route called?"
