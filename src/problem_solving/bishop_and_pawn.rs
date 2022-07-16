#[cfg(test)]
mod tests {
    use crate::solution;

    #[test]
    fn a1_and_c3_bishop_will_catch() {
        assert_eq!(solution("a1".to_string(), "c3".to_string()), true);
    }
    #[test]
    fn a1_and_a3_bishop_will_miss() {
        assert_eq!(solution("a1".to_string(), "a3".to_string()), false);
    }
    #[test]
    fn g1_and_f3_bishop_will_miss() {
        assert_eq!(solution("g1".to_string(), "f3".to_string()), false);
    }
    #[test]
    fn e3_and_a7_bishop_will_catch() {
        assert_eq!(solution("e3".to_string(), "a7".to_string()), true);
    }
}

pub fn solution(bishop: String, pawn: String) -> bool {
    let b = bishop.as_bytes();
    let p = pawn.as_bytes();
    (b[0] as i32 - p[0] as i32).abs() == (b[1] as i32 - p[1] as i32).abs()
}
