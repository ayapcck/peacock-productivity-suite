source ./scripts/colors.sh

length() {
    text=$1
    stripped_var=$(echo -e "$text" | sed "s/$(echo -e "\e")[^m]*m//g")
    echo ${#stripped_var}
}

build_on_length() {
    res="$1"
    separator="$2"
    length="$(($3))"
    for ((i = 0; i < $length; i++)); do
        res="$res$separator"
    done
    echo "$res"
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

multi_header_echo() {
    size=0
    for string in "$@"; do
        temp_size=$(length "$string")
        if [[ $temp_size > $size ]]; then
            size=$temp_size
        fi
    done

    star="$blue*"
    echo_stars $size
    for string in "$@"; do
        this_size=$(length "$string")
        if [[ $size > $this_size ]]; then
            difference=$size-$this_size
            split=($size-$this_size)/2
            res=$(build_on_length "$star" " " $split)
            test=($size-$this_size)%2
            if [[ $test -eq 1 ]]; then
                split=$split+1
            fi
            res=$(build_on_length "$res $NC${string} " " " $split)
            res="$res$star"
            echo -e "$res"
        else
            echo -e "$star $NC${string} $star"
        fi
    done
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
    name=$1
    prompt "$name" "${@:2}"
    confirm_var "$name" "$question"
}

prompt() {
    local -n val=$1
    multi_header_echo "${@:2}"
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
