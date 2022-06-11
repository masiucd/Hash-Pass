use std::io;

fn main() {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let mut index = String::new();
    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index.trim().parse().expect("Index x is not a number");
    if index > 12 {
        println!("Invalid index, out of range!!!");
    } else {
        println!("{}", months[index - 1]);
    }
}
