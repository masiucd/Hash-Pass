use crate::helpers::strings::append_to as append;
pub fn doggy() {
  let res = append("Hello ".to_string(), "Doggy!");
  println!("Calling from helper module {} ", res);
}
