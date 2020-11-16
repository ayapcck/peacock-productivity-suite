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

header_echo() {
    string="$1"
    size=$(length "$1")
    star="$blue*"

    echo_stars $size
    echo -e "$star $NC$string $star"
    echo_stars $size
}

step_echo() {
    step=$1
    star="$green* "
    echo -e "$star$step$NC"
}

confirm_var() {
    local -n var=$1
    var_name=$1
    question=$2
    header_echo "Is $green$var$NC correct? (y/N)"
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
    name=$2
    prompt "$question" "$name"
    confirm_var "$name" "$question"
}

prompt() {
    question=$1
    local -n val=$2
    header_echo "$question"
    read -p "" val
    echo ""
}

options_prompt() {
    local -n var=$1
    question=$2
    header_echo "$question"
    select opt in "${@:3}"; do
        var="$opt"
        break
    done
}

get_lowercase() {
    word=$1
    echo "$1" | tr [:upper:] [:lower:]
}

first_letter_capital() {
    word=$1
    lowercase=$(get_lowercase $word)
    echo "${lowercase^}"
}
