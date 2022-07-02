pub fn append_to(input: String, adding: &str) -> String {
  let mut output = String::new();
  output.push_str(&input);
  output.push_str(adding);
  output
}
