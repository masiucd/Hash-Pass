mod helpers;
mod math;
fn main() {
  let res = math::add(1);
  let res = helpers::strings::append_to("Hello ".to_string(), "World!");
  let res = helpers::helper_mod::say_hello();
  println!("{}", res);
}
