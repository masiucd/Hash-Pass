pub trait Iterator {
  type Item;
  fn next(&mut self) -> Option<Self::Item>;
}

struct Dog {
  name: String,
  breed: String,
  age: u8,
}

impl Dog {
  fn new(name: String, breed: String, age: u8) -> Dog {
    Dog { name, breed, age }
  }
}

pub fn dogs_by_breed(dogs: &Vec<Dog>, breed: &str) -> Vec<Dog> {
  dogs.iter().filter(|dog| dog.breed == breed).collect()
}

#[cfg(test)]
mod test {
  #[test]
  fn iterator_demonstration() {
    let xs = vec![1, 2, 3];

    let mut xs_iter = xs.into_iter();

    assert_eq!(xs_iter.next(), Some(1));
    assert_eq!(xs_iter.next(), Some(2));
    assert_eq!(xs_iter.next(), Some(3));
    assert_eq!(xs_iter.next(), None);
  }

  #[test]
  fn iterator_sum() {
    let v1 = vec![1, 2, 3];
    let sum: i32 = v1.iter().sum();
    assert_eq!(sum, 6);
  }

  #[test]
  fn iterator_map() {
    let v1 = vec![1, 2, 3];
    let v2: Vec<i32> = v1.iter().map(|x| x + 1).collect();
    assert_eq!(v2, vec![2, 3, 4]);
  }
}
