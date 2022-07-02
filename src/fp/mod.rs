pub mod fp_funcs {
  pub fn curry_add(n: i32) -> impl Fn(i32) -> i32 {
    move |x| x + n
  }
}
