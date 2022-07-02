mod helpers;
mod math;
mod models;
use models::dog;
fn main() {
  models::user::print_user();
  dog::doggy();

  let add_by_10 = curry_add(10);
  let a = add_by_10(20);
  let b = add_by_10(500);
  println!("{}", a);
  println!("{}", b);
}

fn curry_add(n: i32) -> impl Fn(i32) -> i32 {
  move |x| x + n
}
