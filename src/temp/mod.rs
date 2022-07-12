pub mod temp_converter {
  pub fn run() {
    let mut input = String::new();
    println!("Enter a Temperature: ");
    std::io::stdin()
      .read_line(&mut input)
      .expect("Failed to read line");
    let input_number: i32 = input.trim().parse().expect("Please type a number!");

    let c_to_f = celsius_to_fahrenheit(input_number as f64);
    let f_to_c = fahrenheit_to_celsius(input_number as f64);
    println!(
      "    The temperature {} Celsius degrees  is {} Fahrenheit degrees: ",
      input_number, c_to_f
    );
    println!(
      "    The temperature {} Fahrenheit degrees is {} Celsius degrees: ",
      input_number, f_to_c
    );
  }
  fn celsius_to_fahrenheit(celsius: f64) -> f64 {
    celsius * 1.8 + 32.0
  }
  fn fahrenheit_to_celsius(fahrenheit: f64) -> f64 {
    (fahrenheit - 32.0) / 1.8
  }
}
