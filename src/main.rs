use std::collections::HashMap;

mod data_structures;
mod problem_solving;
mod utils;

fn main() {
    let mut mapper: HashMap<char, i8> = HashMap::new();
    for c in "marcell".chars() {
        let n = mapper.entry(c).or_default();
        *n = *n + 1;
    }
    // get the key with the max value from the mapper
    let max_key = mapper.iter().max_by_key(|&(_, v)| v).unwrap();
    println!("{:?}", max_key);
    println!("{:?}", mapper);
}
