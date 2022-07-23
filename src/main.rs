mod data_structures;
mod exercism;
mod helpers;
mod iterators;
use iterators::my_iter::Counter;

fn main() {
    let sum: u32 = Counter::new()
        .zip(Counter::new().skip(1))
        .map(|(a, b)| a * b)
        .filter(|x| x % 3 == 0)
        .sum();
    println!("{:?}", sum);
}
