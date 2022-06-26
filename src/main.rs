fn main() {
  println!("{}", solution(String::from("a1"), String::from("b2")));
  let x = char::from('a');
  let x = 'a' as u8;
  let x = '1' as u8;
  println!("{}", x);
}

fn solution(cell1: String, cell2: String) -> bool {
  let sum1: u8 = cell1.chars().map(|c| c as u8).sum();
  let sum2: u8 = cell2.chars().map(|c| c as u8).sum();
  sum1 % 2 == sum2 % 2
}
