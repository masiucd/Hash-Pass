fn solution(n: i32) -> i32 {
    if (n.to_string().chars().count() as i32) == 1 {
        return 0;
    }
    let sum = n
        .to_string()
        .chars()
        .map(|chr| chr.to_digit(10).unwrap() as i32)
        .sum();

    return solution(sum) + 1;
}

#[derive(test)]
mod tests {
    #[test]
    fn test_solution_under_10() {
        assert_eq!(solution(5), 0);
        assert_eq!(solution(6), 0);
        assert_eq!(solution(7), 0);
        assert_eq!(solution(8), 0);
        assert_eq!(solution(9), 0);
    }
    fn test_solution_100() {
        assert_eq!(solution(100), 1);
    }
    fn test_solution_91() {
        assert_eq!(solution(91), 2);
        assert_eq!(solution(99), 2);
    }
    fn test_solution_1000_000_000() {
        assert_eq!(solution(1000000000), 1);
    }
}
