fn main() {}

fn knapsack_light(value_1: i32, weight_1: i32, value_2: i32, weight_2: i32, max_w: i32) -> i32 {
  if weight_1 + weight_2 <= max_w {
    return value_1 + value_2;
  } else if weight_1 > max_w && weight_2 > max_w {
    return 0;
  } else if weight_1 <= max_w && weight_2 > max_w {
    return value_1;
  } else if weight_2 <= max_w && weight_1 > max_w {
    return value_2;
  } else if value_1 >= value_2 {
    return value_1;
  } else {
    return value_2;
  }
}

#[cfg(test)]
mod test {

  #[test]
  fn test_knapsack_light() {
    assert_eq!(super::knapsack_light(10, 5, 6, 4, 9), 16);
    assert_eq!(super::knapsack_light(5, 3, 7, 4, 6), 7);
    assert_eq!(super::knapsack_light(15, 2, 20, 3, 2), 15);
  }
}
