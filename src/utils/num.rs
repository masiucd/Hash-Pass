use core::ops::Add;
use core::ops::Mul;

pub struct Num {
  pub is_odd: bool,
  pub value: i32,
}

impl std::clone::Clone for Num {
  fn clone(&self) -> Self {
    Num {
      is_odd: self.is_odd,
      value: self.value,
    }
  }
}

impl Num {
  #[allow(dead_code)]
  pub fn new(value: i32) -> Num {
    Num {
      is_odd: value % 2 == 1,
      value: value,
    }
  }
}

#[allow(dead_code)]
pub fn max_value<T: Ord>(a: T, b: T) -> T {
  if a > b {
    a
  } else {
    b
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  #[test]
  fn test_max_value_twelve_is_greater_then_ten() {
    assert_eq!(max_value(10, 12), 12);
  }
  #[test]
  fn test_max_value_five_is_greater_then_one() {
    assert_eq!(max_value(5, 1), 5);
  }
}

#[allow(dead_code)]
pub fn dot<N>(xs1: &[N], xs2: &[N]) -> N
where
  N: Add<Output = N> + Mul<Output = N> + Default + Copy,
{
  let mut sum = N::default();
  for (x, y) in xs1.iter().zip(xs2.iter()) {
    let x = x.clone();
    let y = y.clone();
    sum = sum + x * y;
  }
  sum
}

#[allow(dead_code)]
pub fn sum_generic<T: Add<Output = T>>(a: T, b: T) -> T {
  a + b
}
