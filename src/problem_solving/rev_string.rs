use super::*;

fn rev_string_stack(input: String) -> String {
    let mut stack = data_structures::stack::Stack {
        data: vec![],
        size: 0,
    };
    for char in input.chars() {
        stack.push(char as i32);
    }
    let mut result = String::new();
    while stack.len() > 0 {
        result.push(stack.pop() as u8 as char);
    }
    result
}

#[cfg(test)]
mod tests {

    #[test]
    fn test_rev_string_stack() {
        assert_eq!(rev_string_stack("apa".to_string()), "apa".to_string());
        assert_eq!(
            rev_string_stack("marcell".to_string()),
            "llecram".to_string()
        );
    }
}
