pub fn reverse_string(input: String) -> String {
    let mut reversed = String::new();
    for ch in input.chars() {
        reversed = ch.to_string() + reversed.as_str();
    }
    reversed
}
