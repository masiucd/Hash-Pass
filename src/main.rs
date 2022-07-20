mod helpers;

fn main() {
    // let p = math_and_stuff::println!("{}", p);
    let x = helpers::primes::is_prime_slow(5);
    println!("{}", x);
    let x = helpers::primes::is_prime_slow(12);
    println!("{}", x);
}
