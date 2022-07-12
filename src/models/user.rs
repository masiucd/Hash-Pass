pub fn print_user() {
  let res = crate::helpers::strings::append_to("Hello ".to_string(), "Marcell!");
  println!("Calling from helper module {} ", res);
}
