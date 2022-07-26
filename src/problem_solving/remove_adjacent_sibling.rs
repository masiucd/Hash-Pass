fn remove_adjacent_siblings(input: String) -> String {
    let mut stack = Vec::new();
    for c in input.chars() {
        if stack.len() > 0 && stack.last() == Some(&c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    println!("{:?}", stack);
    stack.iter().collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_aaabbb() {
        assert_eq!(
            remove_adjacent_siblings("aaabbb".to_string()),
            "ab".to_string()
        );
    }
    #[test]
    fn test_ab() {
        assert_eq!(remove_adjacent_siblings("ab".to_string()), "ab".to_string());
    }
    #[test]
    fn test_aabbf() {
        assert_eq!(
            remove_adjacent_siblings("aabbf".to_string()),
            "f".to_string()
        );
    }

    #[test]
    fn test_aabbccdd() {
        assert_eq!(
            remove_adjacent_siblings("aabbccdd".to_string()),
            "".to_string()
        );
    }
}
