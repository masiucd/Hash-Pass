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
  pub fn new(value: i32) -> Num {
    Num {
      is_odd: value % 2 == 1,
      value: value,
    }
  }
}
