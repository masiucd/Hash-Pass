fn main() {
  let x = 'a' as u32;
  let x = 'z' as u32;
  let x = solution("crazy".to_string());
  println!("{}", x);
}

#[test]
fn test_solution() {
  assert_eq!(solution("crazy".to_string()), "dsbaz".to_string());
  assert_eq!(solution("z".to_string()), "a".to_string());
  assert_eq!(solution("aaaabbbccd".to_string()), "bbbbcccdde".to_string());
}

fn solution(input_string: String) -> String {
  input_string
    .bytes()
    .map(|b| {
      if b + 1 > 122 {
        97 as char
      } else {
        (b + 1) as char
      }
    })
    .collect()
}
