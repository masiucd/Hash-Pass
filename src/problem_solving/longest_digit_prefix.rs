fn longest_digit_prefix(input: String) -> String {
    let mut result = String::new();
    for c in input.chars() {
        if c.is_digit(10) {
            result.push(c);
        } else {
            break;
        }
    }
    return result;
}

#[derive($test)]
mod tests {
    #[test]
    fn test_longest_digit_prefix_empty_string() {
        assert_eq!(longest_digit_prefix("".to_string()), "".to_string());
    }
    #[test]
    fn test_longest_digit_prefix_123() {
        assert_eq!(
            longest_digit_prefix("123aa1".to_string()),
            "123".to_string()
        );
    }
    #[test]
    fn test_longest_digit_prefix_12() {
        assert_eq!(
            longest_digit_prefix("12abc34".to_string()),
            "12".to_string()
        );
    }
}
