use std::io::stdin;

pub fn double_user_input() {
  println!("Welcome, input a number");
  let mut input = String::new();
  stdin().read_line(&mut input).ok().expect("oops");
  let input_num = input.trim().parse::<i32>().unwrap();
  println!("You selected num ---> {}", input_num);
  let res = double(input_num);
  println!("and double it would be ---> {}", res);
}

fn double(input: i32) -> i32 {
  input * 2
}
