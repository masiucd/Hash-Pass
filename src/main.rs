mod config;
mod math;
mod problem_solving;
mod util_fns;

fn main() {
<<<<<<< HEAD
    config::simple_config();
    let sum = math::addition::add(10, 20);
    let sum = math::addition::increase_by_one(sum);
    let reversed = problem_solving::reverse::reverse_string("hello".to_string());
    let x = problem_solving::dummy::print_name_if_even_age(20, "John");
    println!("{:?}", sum);
    println!("{:?}", reversed);
    println!("{:?}", x);
=======
  let xs = vec![2, 4, 7];
  println!("{}", solution(xs));
}

#[test]
fn test_solution() {
  assert_eq!(solution(vec![2, 4, 7]), 4);
  assert_eq!(solution(vec![1, 1, 3, 4]), 1);
  assert_eq!(
    solution(vec![
      -10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3,
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
      29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
    ]),
    15
  );
}

fn solution(a: Vec<i32>) -> i32 {
  a[(a.len() - 1) / 2]
>>>>>>> e3d0ab3b1fdd74e3e5c2c7075758d54501cd700c
}
